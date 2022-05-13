/**
 * @function convertAngleDegreesToRadians
 * Converts degrees to radians
 *
 * @example
 * convertAngleDegreesToRadians(180) // ==> 3.141592653589793
 *
 * @param {number} degrees
 */
export const convertAngleDegreesToRadians = (degrees: number): number => {
  return degrees * Math.PI / 180
}
