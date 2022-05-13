import { defaultDecimalDigits } from './setDefaultDecimalDigits'
import { roundNumber } from './roundNumber'


/**
 * @function getIntersectionBetween4Points
 * Get the coords of the intersection point between two lines (on a Cartesian plane px system)
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} x3
 * @param {number} y3
 * @param {number} x4
 * @param {number} y4
 * @param {number} [decimals] Default defaultDecimalDigits
 * @return {Array<number>} Array with [x, y] coords
 */
export const getIntersectionBetween4Points = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  x4: number,
  y4: number,
  decimals: number = defaultDecimalDigits,
): Array<number> => {
  // points {x1, y1} and {x2, y2} define the first line
  // points {x3, y3} and {x4, y4} define the second line
  const denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1)
  if (denom === 0) {
    return [NaN, NaN]
  }
  const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denom
  return [
    roundNumber(x1 + ua * (x2 - x1), decimals),
    roundNumber(y1 + ua * (y2 - y1), decimals),
  ]
}
