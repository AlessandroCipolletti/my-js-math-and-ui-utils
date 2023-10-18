
/**
 * @function getAngleRadiansBetweenTwoPoints
 * Get the angle (in radians) of the line passing through two points (on a Cartesian plane px system)
 *
 * @example
 * getAngleRadiansBetweenTwoPoints(1, 1, 2, 2) // ==> 0.7853981633974483
 * @example
 * getAngleRadiansBetweenTwoPoints(1, 1, 3, -1) // ==> 5.497787143782138
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @returns {number}
 */
const getAngleRadiansBetweenTwoPoints = (
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number => {

  const m1 = x2 - x1
  const m2 = y2 - y1

  if (m1 > 0 && m2 > 0) { // first quadrant
    return (Math.atan(m2 / m1))
  } else if (m1 < 0 && m2 > 0) { // second quadrant
    return (Math.atan(m2 / m1) + Math.PI)
  } else if (m1 < 0 && m2 < 0) { // third quadrant
    return (Math.atan(m2 / m1) + Math.PI)
  } else if (m1 > 0 && m2 < 0) { // fourth quadrant
    return (Math.atan(m2 / m1) + Math.PI * 2)
  } else {
    // multiples of 90
    if (m1 === 0) {
      if (m2 > 0) {
        return Math.PI / 2
      } else {
        return Math.PI * 1.5
      }
    } else {
      if (m1 > 0) {
        return 0
      } else {
        return Math.PI
      }
    }
  }
}


export default getAngleRadiansBetweenTwoPoints
