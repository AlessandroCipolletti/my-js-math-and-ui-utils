import { defaultDecimalDigits } from './setDefaultDecimalDigits'
import { roundNumber } from './roundNumber'


/**
 * @function getPercentageOfValue
 * Get the percentage of a value out of the total, and then rounds it
 *
 * @example
 * // returns 50 because 10 is 50% of 20
 * getPercentageOfValue(10, 20)
 * @example
 * // returns 5.4187 because 11 is 5.4187% of 203
 * getPercentageOfValue(11, 203, 4)
 *
 * @param {number} value
 * @param {number} total
 * @param {number} [decimals] Default defaultDecimalDigits
 * @return {number}
 */
export const getPercentageOfValue = (value: number, total: number, decimals: number = defaultDecimalDigits): number => {
  return roundNumber(value * 100 / total, decimals)
}
