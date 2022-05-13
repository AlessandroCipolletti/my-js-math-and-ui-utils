
/**
 * @function distanceBetweenTwoPointsGreaterThan
 * Tells if the distance between two points is greater than a certain amount (on a Cartesian plane px system)
 *
 * @example
 * distanceBetweenTwoPointsGreaterThan(1, 1, 5, 5, 5) // ==> true because distance between [1, 1] and [5, 5] is 5.6569
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} distance
 * @return {boolean}
 */
const distanceBetweenTwoPointsGreaterThan = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  distance: number,
): boolean => {
  return Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) >= Math.pow(distance, 2)
}


export default distanceBetweenTwoPointsGreaterThan
