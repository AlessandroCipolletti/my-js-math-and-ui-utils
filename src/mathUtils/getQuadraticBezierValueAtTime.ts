import { defaultDecimalDigits } from './setDefaultDecimalDigits'
import { roundNumber } from './roundNumber'


/**
 * @function getQuadraticBezierValueAtTime
 * Get the quadratic bezier curve (passing through 3 points) value at the given time t
 *
 * @param {number} t
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} [decimals] Default defaultDecimalDigits
 * @return {number}
 */
export const getQuadraticBezierValueAtTime = (
  t: number,
  p1: number,
  p2: number,
  p3: number,
  decimals = defaultDecimalDigits,
): number => {
  return roundNumber((1 - t) * (1 - t) * p1 + 2 * (1 - t) * t * p2 + t * t * p3, decimals)
}
