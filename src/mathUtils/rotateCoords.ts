import { defaultDecimalDigits } from './setDefaultDecimalDigits'
import roundNumber from './roundNumber'


/**
 * @function rotateCoords
 * Rotate a point's coords by a specific radians angle (on a Cartesian plane px system)
 *
 * @example
 * rotateCoords(1, 1, Math.PI) // ==> [ -1, -1 ]
 * @example
 * rotateCoords(1, 1, Math.PI / 2) // ==> [ 1, -1 ]
 *
 * @param {number} x
 * @param {number} y
 * @param {number} angleRadians
 * @param {number} [decimals] Default defaultDecimalDigits
 * @return {Array<number>} Array with [x, y] rotated coords
 */
const rotateCoords = (x: number, y: number, angleRadians: number, decimals: number = defaultDecimalDigits): Array<number> => {
  return [
    roundNumber(x * Math.cos(angleRadians) + y * Math.sin(angleRadians), decimals),
    roundNumber(-x * Math.sin(angleRadians) + y * Math.cos(angleRadians), decimals),
  ]
}


export default rotateCoords
