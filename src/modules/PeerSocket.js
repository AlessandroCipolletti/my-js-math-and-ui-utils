import { Peer } from 'peerjs'
import throttle from '../jsUtils/throttle'
import { exponentialTimeout } from '../jsUtils/exponentialTimeout'

const CONFIRMED = 'confirmed'
const REFUSED = 'refused'

const config = {
  defaultMaxConcurrentConnections: 1,
  defaultPingInterval: 5000,
}


class PeerSocket {
  connections = [] // connections with other users
  connected = false // if one or more connections are open
  online = false // connected to the peer websocket server
  id = null // local peer id

  #host = ''
  #port = 0
  #path = ''
  #debug = false
  #pingInterval = config.defaultPingInterval

  #peer = null
  #maxConcurrentConnections = 0
  #reconnectTimeout = false
  #reopenTimeout = false

  #eventsCallbacks = {
    newConnection: [],
    newConnectionFailed: [],
    newConnectionRefused: [],
    connectionClosed: [],
    connectionError: [],
    message: [],
    online: [],
    offline: [],
    peerError: [],
  }

  constructor({
    host,
    port,
    path,
    debug = false,
    pingInterval = config.defaultPingInterval,
    maxConcurrentConnections = config.defaultMaxConcurrentConnections,
  } = {}) {
    this.#host = host
    this.#port = port
    this.#path = path
    this.#debug = debug
    this.#pingInterval = pingInterval
    this.#maxConcurrentConnections = maxConcurrentConnections
    this.#initWhenOnline()
  }

  on(event, callback) {
    if (typeof(event) !== 'string' || typeof(callback) !== 'function' || !this.#eventsCallbacks[event]) {
      return
    }

    this.#eventsCallbacks[event].push(callback)
  }

  sendMessage(message) {
    this.connections.forEach((conn) => {
      conn.send(message)
    })
  }

  connectTo(peerId) {
    if (peerId === this.id) {
      console.error('cannot connect to yourself')
      return
    }

    if (this.connections.length >= this.#maxConcurrentConnections) { // we cannot connect to more peers
      console.error('max concurrent connections reached')
      return
    }

    this.#handleNewConnection(this.#peer.connect(peerId), false)
  }

  disconnectFrom(peerId = this.connections[0]?.peer) {
    if (peerId) {
      const dataConnection = this.connections.find(conn => conn.peer === peerId)

      if (dataConnection) {
        dataConnection.close()
      } else {
        console.error(`not connected to ${peerId}`)
      }
    }
  }

  #initWhenOnline = () => {
    if (navigator.onLine) {
      this.#initPeerConnection()
    } else {
      window.addEventListener('online', this.#initPeerConnection)
    }
  }

  #initPeerConnection = () => {
    window.removeEventListener('online', this.#initPeerConnection)
    this.#peer = new Peer({
      host: this.#host,
      port: this.#port,
      path: this.#path,
      pingInterval: this.#pingInterval,
      secure: true,
      debug: this.#debug ? 3 : 0,
    })

    this.#peer.on('open', this.#handlePeerOpen)
    this.#peer.on('close', this.#handlePeerClose)
    this.#peer.on('connection', this.#handleNewConnection)
    this.#peer.on('disconnected', this.#handlePeerDisconnect)
    this.#peer.on('error', throttle(this.#handlePeerError, 1000))
  }

  #confirmConnection = (conn) => {
    this.connections.push(conn)
    this.connected = true
    this.#eventsCallbacks.newConnection.forEach(callback => callback())

    conn.on('close', this.#handleConnectionClosed)
    conn.on('error', throttle(this.#handleConnectionError.bind(this, conn), 1000))
    conn.peerConnection.oniceconnectionstatechange = () => {
      if (conn.peerConnection.iceConnectionState === 'disconnected') {
        conn.close()
      }
    }
  }

  #handleConnectionClosed = () => {
    this.#eventsCallbacks.connectionClosed.forEach(callback => callback())
    this.#removeClosedConnections()
  }

  #handleConnectionError = (conn, error) => {
    console.log('connection error', error)
    this.#eventsCallbacks.connectionError.forEach(callback => callback())
    conn.close()
  }

  #handleNewConnection = (conn, isIncomingConnection = true) => {
    if (conn) {
      conn.on('open', () => {
        conn.on('data', this.#handleConnectionReceivedData.bind(this, conn))

        if (this.connections.length >= this.#maxConcurrentConnections) {
          conn.send(REFUSED) // we are refusing an incoming connection
          return
        }

        if (isIncomingConnection) {
          // we are receiving a connection, and we accept it
          conn.send(CONFIRMED)
          this.#confirmConnection(conn)
        }
      })
    }
  }

  #handleConnectionReceivedData = (conn, data) => {
    if (data === REFUSED) { // our connection was refused
      // we asked for a connection, but it was refused
      this.#eventsCallbacks.newConnectionRefused.forEach(callback => callback())
      conn.close()
      return
    }
    if (data === CONFIRMED) {
      // we asked for a connection, and it was confirmed
      this.#confirmConnection(conn)
      return
    }

    this.#eventsCallbacks.message.forEach(callback => callback(data))
  }

  #handleInternetOffline = () => {
    setTimeout(() => {
      if (!navigator.onLine) {
        this.#peer.destroy()
      }
    }, 5000)
  }

  #handlePeerOpen = (id) => {
    this.id = id
    if (!this.online) {
      // perché viene chiamato anche quando si riconnette per una semplice perdita di connessione momentanea
      // ma l'id ed il peer non cambiano
      this.online = true
      this.#eventsCallbacks.online.forEach(callback => callback(id))
      window.addEventListener('offline',this.#handleInternetOffline)
    }

    this.#reconnectTimeout = false
    this.#reopenTimeout = false
  }

  #handlePeerClose = () => {
    this.#eventsCallbacks.offline.forEach(callback => callback(this.connected))
    this.connections = []
    this.connected = false
    this.online = false
    this.id = null
    window.removeEventListener('offline',this.#handleInternetOffline)

    if (navigator.onLine) {
      if (!this.#reopenTimeout && this.#reopenIfNeeded()) {
        exponentialTimeout(this.#reopenIfNeeded)
      }
    } else {
      this.#initWhenOnline()
    }
  }

  #handlePeerDisconnect = () => {
    this.online = false
    if (!this.#reconnectTimeout && this.#reconnectIfNeeded()) {
      exponentialTimeout(this.#reconnectIfNeeded)
    }
  }

  #handlePeerError = (e) => {
    if (e.type === 'peer-unavailable') {
      this.#eventsCallbacks.newConnectionFailed.forEach(callback => callback())
    } else {
      console.log('peer error', e)
      this.#eventsCallbacks.peerError.forEach(callback => callback(this.connected))
      this.#peer.destroy()
    }
  }

  #reconnectIfNeeded = () => {
    if (this.#peer.disconnected && !this.#peer.destroyed) {
      this.#peer.reconnect()
      this.#reconnectTimeout = true
      return true
    }
    return false
  }

  #reopenIfNeeded = () => {
    if (this.#peer.destroyed) {
      this.#initPeerConnection()
      this.#reopenTimeout = true
      return true
    }
    return false
  }

  #removeClosedConnections = () => {
    this.connections = this.connections.filter(conn => !!conn.peerConnection)
    this.connected = !!this.connections.length
  }
}

export default PeerSocket
