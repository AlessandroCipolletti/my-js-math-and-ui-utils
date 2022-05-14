import { defaultDecimalDigits } from './setDefaultDecimalDigits'
import roundNumber from './roundNumber'
import arrayOrderNumberIncreasing from '../jsUtils/arrayOrderNumberIncreasing'


/**
 * @function getNumberInBetween
 * Force a number to be between a min and a max value, and then rounds it.
 * It's like clamp, but the params order here doesn't matter.
 *
 * @example
 * const currentValue = 12
 * const minAcceptableValue = 2
 * const maxAcceptableValue = 5
 * getNumberInBetween(currentValue, minAcceptableValue, maxAcceptableValue) // returns 5
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} [decimals] Default defaultDecimalDigits
 * @return {number}
 */
const getNumberInBetween = (a:number, b:number, c:number, decimals: number = defaultDecimalDigits): number => {
  return roundNumber([a, b, c].sort(arrayOrderNumberIncreasing)[1], decimals)
}


export default getNumberInBetween
