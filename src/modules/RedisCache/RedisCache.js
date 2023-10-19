import { createClient } from 'redis'
import Logger from '../Logger/Logger'

import {
  DEFAULT_CACHE_URL,
  DEFAULT_CACHE_DURATION,
  DEFAULT_MAX_CACHE_KEY_LENGTH,
} from './redisCacheConfig'

let defaultCache

/**
 * Allows to cache string values, with a default time to live of 60 seconds.
 *
 * @class CacheConnection
 * @example
 * .connect() accepts optinal parameters: 'url' for redis server, and 'duration' for the default TTL value.
 * defaults values are available inside the config.
 *
 * const Cache = new CacheConnection()
 * await Cache.connect()
 *
 * await Cache.addElement('myKey', 'myValue') // TTL = 60 seconds
 * await Cache.addElement('myKey', 'myValue', 0) // this one never expires
 * await Cache.addElement('myKey', 'myValue', 30) // TTL = 30 seconds
 * await Cache.hasElement('myKey') // true || false
 * await Cache.getElement('myKey') // 'myValue'
 * await Cache.deleteElement('myKey')
 */
class RedisCache {
  constructor(options = {}) {
    this.url = options.url || DEFAULT_CACHE_URL
    this.duration = options.duration || DEFAULT_CACHE_DURATION
    this.maxKeyLength = options.maxKeyLength || DEFAULT_MAX_CACHE_KEY_LENGTH
    this.emptyDbOnOpen = options.emptyDbOnOpen || false
    this.logger = options.logger || Logger

    this.connected = false
  }

  /**
   * Connects to the cache server
   *
   * @async
   * @function connect
   * @param {object} options
   * @param {string} [options.url]
   * @param {number} [options.duration]
   * @param {bool} [options.emptyDbOnOpen]
   */
  async connect() {
    this.client = createClient({
      url: this.url,
    })

    this.client.on('error', async (err) => {
      if (this.connected)
        {this.logger.error('Cache disconnected')}

      this.connected = false
    })

    this.client.on('connect', async () => {
      this.connected = true
      this.logger.info('Cache connected')
    })

    this.client.connect()

    if (this.emptyDbOnOpen)
      {await this.client.sendCommand(['FLUSHDB'])}

  }

  /**
   * Adds a new cached value
   *
   * @async
   * @function addElement
   * @param {string} key
   * @param {any} value
   * @param {number} [duration]
   */
  async addElement(key, value, duration = this.duration) {
    if (!this.connected)
      {return}


    key = key.substring(0, this.maxKeyLength)
    value = JSON.stringify(value)

    if (duration > 0)
      {await this.client.set(key, value, {
        EX: duration,
      })}
     else
      {await this.client.set(key, value)}

  }

  /**
   * Gets a cached value (by its key) or null
   *
   * @async
   * @function getElement
   * @param {string} key
   * @returns {any|null}
   */
  async getElement(key) {
    if (!this.connected)
      {return null}


    if (!key || typeof (key) !== 'string')
      {return null}


    key = key.substring(0, this.maxKeyLength)
    const value = await this.client.get(key)
    if (typeof (value) === 'undefined')
      {return null}


    return JSON.parse(value)
  }

  /**
   * Checks if the given key is present inside the cache
   *
   * @async
   * @function hasElement
   * @param {string} key
   * @returns {bool}
   */
  async hasElement(key) {
    if (!this.connected)
      {return false}


    if (typeof (key) !== 'string')
      {return false}


    key = key.substring(0, this.maxKeyLength)

    return parseInt(await this.client.sendCommand(['EXISTS', key])) > 0
  }

  /**
   * Delete a cached key
   *
   * @async
   * @function deleteElement
   * @param {string} key - The key of the element to delete.
   */
  async deleteElement(key) {
    if (!this.connected)
      {return null}


    key = key.substring(0, this.maxKeyLength)

    await this.client.sendCommand(['DEL', key])
  }

}


/**
 * Init the default Cache object
 *
 * @async
 * @function initDefaultCache
 */
const initDefaultCache = async () => {
  defaultCache = new RedisCache()
  await defaultCache.connect()
}


/**
 *
 * @returns {defaultCache}
 */
export const getDefaultCache = async () => {
  if (!defaultCache) {
    await initDefaultCache()
  }

  return defaultCache
}


export default RedisCache
