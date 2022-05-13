import { defaultDecimalDigits } from './setDefaultDecimalDigits'
import { roundNumber } from './roundNumber'


/**
 * @function linerarInterpolation
 * Returns linear interpolation between two numbers.
 *
 * @example
 * linerarInterpolation(5, 15, 0.5) // returns 10
 * linerarInterpolation(5, 15, 0.1) // returns 6
 *
 * @param {number} min
 * @param {number} max
 * @param {number} t number between 0 and 1
 * @param {number} [decimals] Default defaultDecimalDigits
 * @return {number}
 */
export const linerarInterpolation = (
  min: number,
  max: number,
  t: number,
  decimals = defaultDecimalDigits,
): number => {
  return roundNumber(min + (max - min) * t, decimals)
}
