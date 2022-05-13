import { getNumberInBetween } from './getNumberInBetween'


/**
 * @function clamp
 * @alias getNumberInBetween
 * Force a number to be between a min and a max value, and then rounds it.
 * It's like clamp, but the params order here doesn't matter.
 *
 * @example
 * const currentValue = 12
 * const minAcceptableValue = 2
 * const maxAcceptableValue = 5
 * clamp(currentValue, minAcceptableValue, maxAcceptableValue) // returns 5
 *
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @param {number} [decimals] Default defaultDecimalDigits
 * @return {number}
 */
export const clamp = getNumberInBetween
