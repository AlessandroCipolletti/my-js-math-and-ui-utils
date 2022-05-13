import getPerpendicularLineFunctionPassingByPoint from './getPerpendicularLineFunctionPassingByPoint'
import getSlopeCoefficientBetweenTwoPoints from './getSlopeCoefficientBetweenTwoPoints'
import getIntersectionBetween4Points from './getIntersectionBetween4Points'


/**
 * @function getPointProjectionOnLine
 * Get the coords of the perpendicular projection of the given point on the given live (on a Cartesian plane px system)
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} x3
 * @param {number} y3
 * @return {Array<number>} Array with [x, y] coords
 */
const getPointProjectionOnLine = (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): Array<number> => {
  // points {x1, y1} and {x2, y2} define the line
  // point {x3, y3} is the point to project on the line
  let x4, y4
  const slopeLine1 = getSlopeCoefficientBetweenTwoPoints(x1, y1, x2, y2)
  if (slopeLine1 === 0) {
    x4 = x3
    y4 = y1
  } else if (isFinite(slopeLine1)) {
    const line2 = getPerpendicularLineFunctionPassingByPoint(slopeLine1, x3, y3)
    if (x3 === x1) {
      x4 = x2
    } else {
      x4 = x1
    }
    y4 = line2(x4)
  } else {
    x4 = x1
    y4 = y3
  }

  return getIntersectionBetween4Points(x1, y1, x2, y2, x3, y3, x4, y4)
}


export default getPointProjectionOnLine
