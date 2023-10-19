
/**
 * Formats different types of params inside the url string.
 *
 * @example
 * const url = 'http://my.api/${id}/${prop1}'
 * const params = {
 *   id: '123',
 *   prop1: 'value1',
 * }
 * const formattedUrl = formatApiUrlWithParams(url, params)
 * formattedUrl ==> 'http://my.api/123/value1'
 *
 * @example
 * const url = 'http://my.api/id/${id}'
 * const params = {
 *   id: '123',
 *   prop1: 'value1',
 * }
 * const formattedUrl = formatApiUrlWithParams(url, params)
 * formattedUrl ==> 'http://my.api/id/123?prop1=value1'
 *
 * @example
 * const url = 'http://my.api'
 * const params = {
 *   param1: 'value1',
 *   param2: ['value2', 'value3'],
 * }
 * const formattedUrl = formatApiUrlWithParams(url, params)
 * formattedUrl ==> 'http://my.api?param1=value1&param2=value2,value3'
 *
 * @example
 * const url = 'http://my.api'
 * const params = ['param1', 'param2']
 * const formattedUrl = formatApiUrlWithParams(url, params)
 * formattedUrl ==> 'http://my.api/param1/param2
 *
 * @param {String} url
 * @param {Object} params
 * @returns
 */
export function formatApiUrlWithParams(url, params) {
  if (url.includes('${') && typeof params === 'object') {
    return replaceStringParams(url, params)
  }
  return `${url}${formatApiParamsToString(params)}`
}


export function formatApiParamsToString(params) {
  let result = ''

  if (Array.isArray(params)) {
    result = `/${params.join('/')}`
  } else if (typeof params === 'object' && Object.keys(params).length) {
    result = `?${Object.keys(params)
      .map((key) => {
        if (Array.isArray(params[key])) {
          return `${key}=${params[key].join(',')}`
        }
        return `${key}=${params[key]}`
      })
      .join('&')}`
  }

  return result
}


export function replaceStringParams(str, params) {
  let string = str
  const queryParams = {}

  Object.keys(params).forEach(key => {
    if (string.includes(`\${${key}}`)) {
      string = string.replace(`\${${key}}`, params[key])
    } else {
      queryParams[key] = params[key]
    }
  })

  return `${string}${formatApiParamsToString(queryParams)}`
}


export const stringIsJson = (string) => {
  let result

  try {
    JSON.parse(string)
    result = true
  } catch (e) {
    result = false
  }

  return result
}
