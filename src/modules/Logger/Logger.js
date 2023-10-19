// const fs = require('fs')
import { formatLogMessage } from './loggerUtils'

import {
  MESSAGE_TYPE_LOG,
  MESSAGE_TYPE_INFO,
  MESSAGE_TYPE_WARN,
  MESSAGE_TYPE_ERROR,
} from './constants'


// const FILE_ID = Math.trunc(Math.random() * 100000000000)


class Logger {
  constructor(options = {}) {
    this.includeDate = options.includeDate || true
    this.formatDate = options.formatDate || true
    this.dateFormatIntl = options.dateFormatIntl || 'fr-FR'
    // this.saveTofile = options.saveTofile && (typeof (process) !== 'undefined')
    // this.filesPath = options.filesPath || './'

    // if (this.saveTofile) {
    //   this.fileName = `${this.filesPath}/${getCurrentDateString()}-${FILE_ID}.txt`
    //   this.fileStream = fs.createWriteStream(this.fileName)
    // }
  }

  // code colors: https://en.m.wikipedia.org/wiki/ANSI_escape_code#Colors
  #consoleColors = {
    white: 97,
    gray: 37,
    black: 30,
    blue: 34,
    yellow: 33,
    green: 32,
    red: 31,
  }

  #logTypeColors = {
    [MESSAGE_TYPE_LOG]: this.#consoleColors.white,
    [MESSAGE_TYPE_INFO]: this.#consoleColors.blue,
    [MESSAGE_TYPE_WARN]: this.#consoleColors.yellow,
    [MESSAGE_TYPE_ERROR]: this.#consoleColors.red,
  }

  #getDate() {
    let result = ''

    if (this.includeDate)
      {if (this.formatDate)
        {result = `${(new Date()).toLocaleString(this.dateFormatIntl)}`}
       else
        {result = `${Date.now()}`}}



    return result
  }

  // #getHour() {
  //   let result = ''

  //   if (this.includeDate) {
  //     if (this.formatDate) {
  //       result = `${(new Date()).toLocaleString(this.dateFormatIntl)}`
  //       result = result.substring(result.indexOf(' ') + 1, result.length)
  //     } else {
  //       result = `${Date.now()}`
  //     }
  //   }

  //   return result
  // }

  #doLog(type, message, data) {
    const messageString = formatLogMessage(message, data)
    console[type](`${this.#getDate()} - \x1b[${this.#logTypeColors[type]}m${type.toUpperCase()}: \x1b[0m${messageString}`)

    // if (this.saveTofile) {
    //   this.fileStream.write(`${this.#getHour()} - ${type.toUpperCase()}: ${messageString}`)
    // }
  }


  /**
   * Public log function
   * @param {String | Object} message
   * @param {Object} [data]
   */
  log(message, data) {
    this.#doLog(MESSAGE_TYPE_LOG, message, data)
  }

  /**
   * Public info function
   * @param {String | Object} message
   * @param {Object} [data]
   */
  info(message, data) {
    this.#doLog(MESSAGE_TYPE_INFO, message, data)
  }

  /**
   * Public warn function
   * @param {String | Object} message
   * @param {Object} [data]
   */
  warn(message, data) {
    this.#doLog(MESSAGE_TYPE_WARN, message, data)
  }

  /**
   * Public error function
   * @param {String | Object} message
   * @param {Object} [data]
   */
  error(message, data) {
    this.#doLog(MESSAGE_TYPE_ERROR, message, data)
  }
}

export default Logger
