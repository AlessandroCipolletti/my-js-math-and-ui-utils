import { defaultDecimalDigits } from './setDefaultDecimalDigits'
import roundNumber from './roundNumber'


/**
 * @function getMiddlePointCoords
 * Get the middle point's coords between the two given points (on a Cartesian plane px system)
 *
 * @example
 * getMiddlePointCoords(1, 1, 3, 3) // ==> [ 2, 2 ]
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} [decimals] Default defaultDecimalDigits
 * @returns {Array<number>} Array with [x, y] middle point's coords
 */
const getMiddlePointCoords = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  decimals: number = defaultDecimalDigits
): Array<number> => {

  return [
    roundNumber((x1 + x2) / 2, decimals),
    roundNumber((y1 + y2) / 2, decimals),
  ]
}


export default getMiddlePointCoords
