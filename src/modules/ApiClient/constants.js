export const HTTP_STATUS_CODE_OK = 200
export const HTTP_STATUS_CODE_CREATED = 201
export const HTTP_STATUS_CODE_ACCEPTED = 202
export const HTTP_STATUS_CODE_NO_CONTENT = 204
export const HTTP_STATUS_CODE_CACHED = 304
export const HTTP_STATUS_CODE_ACCESS_DENIED = 403
export const HTTP_STATUS_CODE_NOT_FOUND = 404
export const HTTP_STATUS_CODE_TIMEOUT = 408
export const HTTP_STATUS_CODE_UNPROCESSABLE_CONTENT = 422
export const HTTP_STATUS_CODE_SERVER_ERROR = 500
export const HTTP_STATUS_CODE_BAD_GATEWAY = 502
export const HTTP_STATUS_CODES_WITH_CONTENT = [
  HTTP_STATUS_CODE_OK,
  HTTP_STATUS_CODE_CREATED,
  HTTP_STATUS_CODE_ACCEPTED,
  HTTP_STATUS_CODE_CACHED,
]

export const GET = 'GET'
export const POST = 'POST'
export const PUT = 'PUT'
export const DELETE = 'DELETE'
export const PATCH = 'PATCH'

export const DEFAULT_API_TIMEOUT = 5000 // millisecond
export const DEFAULT_API_CACHE_DURATION = 90 // seconds

export const defaultHeaders = {
  Accept: 'application/json,text/plain;charset=UTF-8,text/plain',
  'Content-Type': 'application/json',
}
