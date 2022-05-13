import { defaultDecimalDigits } from './setDefaultDecimalDigits'
import roundNumber from './roundNumber'
import getDistanceBetweenTwoPoints from './getDistanceBetweenTwoPoints'


/**
 * @function getDistanceBetweenThreePoints
 * Get the distance between three points' coords (on a Cartesian plane px system), and then rounds it
 *
 * @example
 * getDistanceBetweenThreePoints(1, 1, 5, 5, 8, 6, 4) // ==> 8.8192
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} x3
 * @param {number} y3
 * @param {number} [decimals] Defalut defaultDecimalDigits
 * @return {number}
 */
const getDistanceBetweenThreePoints = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  decimals: number = defaultDecimalDigits,
): number => {

  const firstDistance = getDistanceBetweenTwoPoints(x1, y1, x2, y2, decimals) || 0
  const secondDistance = getDistanceBetweenTwoPoints(x2, y2, x3, y3, decimals) || 0

  return roundNumber(firstDistance + secondDistance, decimals)
}


export default getDistanceBetweenThreePoints
