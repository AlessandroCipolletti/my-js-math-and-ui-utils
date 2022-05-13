import { defaultDecimalDigits } from './setDefaultDecimalDigits'
import { roundNumber } from './roundNumber'


/**
 * @function getQuadraticBezierCurvePointAtTime
 * Get the length of a quadratic bezier curve passing through 3 points, and then rounds it
 *
 * @param {number} t
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} x3
 * @param {number} y3
 * @param {number} [decimals] Default defaultDecimalDigits
 * @return {Array<number>} Array of [x, y] coords
 */
export const getQuadraticBezierCurvePointAtTime = (
  t: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  decimals: number = defaultDecimalDigits,
): Array<number> => {
  return [
    roundNumber((1 - t) * (1 - t) * x1 + 2 * (1 - t) * t * x2 + t * t * x3, decimals), // curve x at time t
    roundNumber((1 - t) * (1 - t) * y1 + 2 * (1 - t) * t * y2 + t * t * y3, decimals), // curve y at time t
  ]
}
