import Logger from '../Logger/Logger'
import { formatApiUrlWithParams, stringIsJson } from './apiClientUtils'

import {
  GET,
  HTTP_STATUS_CODE_UNPROCESSABLE_CONTENT,
  HTTP_STATUS_CODE_NO_CONTENT,
  HTTP_STATUS_CODE_CACHED,
  HTTP_STATUS_CODES_WITH_CONTENT,
  HTTP_STATUS_CODE_NOT_FOUND,
  HTTP_STATUS_CODE_TIMEOUT,
  HTTP_STATUS_CODE_SERVER_ERROR,
  HTTP_STATUS_CODE_BAD_GATEWAY,
  DEFAULT_API_TIMEOUT,
  DEFAULT_API_CACHE_DURATION,
  defaultHeaders,
} from './constants'

const defaultDataTranslator = (data) => data


/**
 * @example
 * Wherever you want
 * const [articles] = await ApiClient.getArticles()
 *
 * const params = { id: 123 }
 * const [article] = await ApiClient.getOneArticle({ params })
 *
 * const body = { key: "value" }
 * const [result] = await ApiClient.saveArticle({ body })
 *
 * const params = { id: 123 }
 * const body = { key: "value" }
 * const [result] = await ApiClient.updateArticle({ params, body })
 *
 * const params = { id: 123 }
 * const [result, response] = await ApiClient.deleteArticle({ params })
 *  --> You can access the native 'response' here
 *
 * // const revalidateDuration = 30
 * // const [articles] = await ApiClient.getArticles({ revalidateDuration })
 * // --> You can specify a next-revalidate time to each api call
 *
 *
 * NB:
 * - If you need to do some custom validation, you can access the native fetch response using the second param
 * - If something goes wrong, no error is throw, but the first returned param is false
 * - If the api returns nothing, the first param contains at least true or false
 * - If the api uses cache, when you receive a cached value you cannot access the native 'response' object, because no call has been made.
 */
class ApiClient {
  #cache = null
  #logger = null

  constructor({
    apis = {},
    logger,
    cache,
  } = {}) {
    return Promise.resolve(this.#init(apis, logger, cache))
  }

  async #init (apis, logger, cache) {
    if (logger) {
      this.#logger = logger
    } else {
      this.#logger = new Logger()
    }
    if (cache) {
      this.#cache = cache
    }
    Object.keys(apis).forEach(apiName => {
      this.registerApi(apiName, apis[apiName])
    })

    return this
  }

  registerApi (apiName, {
    url,
    method,
    headers,
    dataTranslator,
    defaultTimeout = DEFAULT_API_TIMEOUT,
    defaultCacheDuration = DEFAULT_API_CACHE_DURATION,
  }) {
    this[apiName] = ({
      params,
      body,
      pageUrl,
      timeout = defaultTimeout,
      cacheDuration = defaultCacheDuration,
    } = {}) =>
      this.call({ apiName, url, method, params, body, headers, dataTranslator, timeout, cacheDuration, pageUrl })
  }

  async call ({
    apiName = '',
    url,
    method = GET,
    params = {},
    body = {},
    headers = {},
    dataTranslator = defaultDataTranslator,
    timeout = DEFAULT_API_TIMEOUT,
    cacheDuration = DEFAULT_API_CACHE_DURATION,
    pageUrl = (document ? document.location.href : 'unknown'),
  } = {}) {
    let apiUrl = ''
    const requestTime = Date.now()

    try {
      // if no url is provided, returns an error
      if (!url) {
        throw new Error('No url provided')
      }

      // build the complete api url, with get params
      apiUrl = formatApiUrlWithParams(url, params)
      const bodyString = body ? JSON.stringify(body) : ''
      const cacheKey = `${apiUrl}+${bodyString}`

      // if cache is available, it returns the last cached value
      if (this.#cache && cacheDuration > 0 && this.#cache.connected && (await this.#cache.hasElement(cacheKey))) {
        this.#logger.info(`Api -> From Cache: (${Date.now() - requestTime}ms) name:${apiName}; path:${apiUrl}; from page url:${pageUrl};`)
        const cachedResult = await this.#cache.getElement(cacheKey)
        const cachedResponse = {
          status: HTTP_STATUS_CODE_CACHED,
        }
        return [cachedResult, cachedResponse, false]
      }

      // if no cache is available, it calls the api,
      // starting by building the fetch options
      const fetchOptions = {
        method,
        timeout,
        headers: {
          ...defaultHeaders,
          ...headers,
        },
      }
      if (method !== GET && Object.keys(body).length > 0) {
        fetchOptions.body = bodyString
      }

      // then it calls the api
      const response = await fetch(apiUrl, fetchOptions)
      if (response.status === HTTP_STATUS_CODE_NOT_FOUND) {
        throw new Error('Api: not found')
      }
      const responseTime = Date.now()
      this.#logger.info(`Api -> Call: (${responseTime - requestTime}ms) name:${apiName}; path:${apiUrl}; from page url:${pageUrl};`)

      // then it parses the response
      const [apiResponseData, parseError] = await this.#parseResponse(response, dataTranslator)
      if (parseError) {
        throw new Error('Api: parse error')
      }
      this.#logger.info(`Api -> Parsed: (${Date.now() - responseTime}ms) name:${apiName}; path:${apiUrl}; from page url:${pageUrl};`)

      // if cache is available, it adds the response to the cache
      if (this.#cache && apiResponseData && this.#cache.connected && cacheDuration > 0) {
        this.#logger.info(`Api -> To Cache: name:${apiName}; path:${apiUrl};`)
        await this.#cache.addElement(cacheKey, apiResponseData, cacheDuration)
      }

      return [apiResponseData, response, false]

    } catch (error) {
      const errorResponse = {}
      let label

      if (error.message.includes('not found')) {
        errorResponse.status = HTTP_STATUS_CODE_NOT_FOUND
        label = 'Not Found'
      } else if (error.message.includes('parse error')) {
        errorResponse.status = HTTP_STATUS_CODE_UNPROCESSABLE_CONTENT
        label = 'Parse error'
      } else if (error.message.includes('No url')) {
        errorResponse.status = HTTP_STATUS_CODE_BAD_GATEWAY
        label = 'Bad Gateway'
      } else if (error.message.includes('timeout')) {
        errorResponse.status = HTTP_STATUS_CODE_TIMEOUT
        label = 'Timeout'
      } else {
        errorResponse.status = HTTP_STATUS_CODE_SERVER_ERROR
        label = 'Server Error'
      }

      this.#logger.error(`Api -> ${label}: (${Date.now() - requestTime}ms) name:${apiName}; path:${apiUrl}; message:${error.message}; from page url:${pageUrl};`)

      return [false, errorResponse, error]
    }
  }

  async #parseResponse (response, dataTranslator) {
    let result
    let error = false

    try {
      if (response.status === HTTP_STATUS_CODE_NO_CONTENT) {
        result = true
      } else if (HTTP_STATUS_CODES_WITH_CONTENT.includes(response.status)) {
        const isJson = response.headers.get('content-type')?.includes('application/json')

        if (isJson) {
          result = await response.json()
          result = dataTranslator(result)
        } else {
          result = await response.text()
          if (stringIsJson(result)) {
            result = JSON.parse(result)
            result = dataTranslator(result)
          }
        }
      } else {
        result = false
      }
    } catch (e) {
      result = false
      error = true
    }

    return [result, error]
  }
}


export default ApiClient
