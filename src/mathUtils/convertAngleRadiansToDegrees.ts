/**
 * @function convertAngleRadiansToDegrees
 * Converts radians to degrees
 *
 * @example
 * convertAngleRadiansToDegrees(Math.Math.PI) // ==> 180
 *
 * @param {number} radians
 * @return {number}
 */
export const convertAngleRadiansToDegrees = (radians: number): number => {
  return radians * 180 / Math.PI
}
