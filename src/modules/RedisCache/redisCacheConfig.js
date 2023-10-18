const { REDIS_USERNAME, REDIS_PASSWORD } = process.env
const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1'
const REDIS_PORT = process.env.REDIS_PORT || 6379
const REDIS_DB = process.env.REDIS_DB || 0

export const DEFAULT_CACHE_DURATION = process.env.CACHE_TTL || 60 // seconds

export const DEFAULT_MAX_CACHE_KEY_LENGTH = process.env.CACHE_MAX_KEY_LENGTH || Infinity // chars. 0 => no-limits

export const DEFAULT_CACHE_URL = REDIS_USERNAME && REDIS_PASSWORD
  ? `redis://${REDIS_USERNAME}:${REDIS_PASSWORD}@${REDIS_HOST}:${REDIS_PORT}/${REDIS_DB}`
  : `redis://${REDIS_HOST}:${REDIS_PORT}/${REDIS_DB}`
