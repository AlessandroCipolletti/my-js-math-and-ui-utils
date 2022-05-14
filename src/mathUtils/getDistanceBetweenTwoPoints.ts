import { defaultDecimalDigits } from './setDefaultDecimalDigits'
import roundNumber from './roundNumber'


/**
 * @function getDistanceBetweenTwoPoints
 * Get the distance between two points' coords (on a Cartesian plane px system), and then rounds it
 *
 * @example
 * getDistanceBetweenTwoPoints(1, 1, 5, 5) // ==> 5.6569
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} [decimals] Default defaultDecimalDigits
 * @returns {number}
 */
const getDistanceBetweenTwoPoints = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  decimals: number = defaultDecimalDigits,
): number => {
  return roundNumber(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)), decimals)
}


export default getDistanceBetweenTwoPoints
