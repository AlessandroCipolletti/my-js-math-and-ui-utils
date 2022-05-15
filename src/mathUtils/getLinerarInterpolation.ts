import { defaultDecimalDigits } from './setDefaultDecimalDigits'
import roundNumber from './roundNumber'


/**
 * @function getLinerarInterpolation
 * Returns linear interpolation between two numbers.
 *
 * @example
 * getLinerarInterpolation(5, 15, 0.5) // returns 10
 * getLinerarInterpolation(5, 15, 0.1) // returns 6
 *
 * @param {number} min
 * @param {number} max
 * @param {number} t number between 0 and 1
 * @param {number} [decimals] Default defaultDecimalDigits
 * @returns {number}
 */
const getLinerarInterpolation = (
  min: number,
  max: number,
  t: number,
  decimals = defaultDecimalDigits,
): number => {
  return roundNumber(min + (max - min) * t, decimals)
}


export default getLinerarInterpolation
