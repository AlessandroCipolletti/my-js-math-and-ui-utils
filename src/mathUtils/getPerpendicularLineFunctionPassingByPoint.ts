
/**
 * @function getPerpendicularLineFunctionPassingByPoint
 * Get the cartesian function of the perpendicular line passing through one given point (on a Cartesian plane px system)
 *
 * @param {number} slope
 * @param {number} x1
 * @param {number} y1
 * @returns {(n: number) => number}
 */
const getPerpendicularLineFunctionPassingByPoint = (slope: number, x1: number, y1: number): (n: number) => number => {
  return (x: number) => (-1 / slope) * (x - x1) + y1
}


export default getPerpendicularLineFunctionPassingByPoint
