import convertAngleRadiansToDegrees from './convertAngleRadiansToDegrees'
import getAngleRadiansBetweenTwoPoints from './getAngleRadiansBetweenTwoPoints'


/**
 * @function getAngleDegreesBetweenTwoPoints
 * Get the angle (in degree) of the line passing through two points (on a Cartesian plane px system)
 *
 * @example
 * getAngleDegreesBetweenTwoPoints(1, 1, 2, 2) // ==> 45
 * @example
 * getAngleDegreesBetweenTwoPoints(1, 1, 3, -1) // ==> 315
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 */
const getAngleDegreesBetweenTwoPoints = (x1: number, y1: number, x2: number, y2: number): number => {
  return convertAngleRadiansToDegrees(getAngleRadiansBetweenTwoPoints(x1, y1, x2, y2))
}


export default getAngleDegreesBetweenTwoPoints
