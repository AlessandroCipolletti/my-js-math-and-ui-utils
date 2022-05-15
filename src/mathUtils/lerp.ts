import getLinerarInterpolation from './getLinerarInterpolation'


/**
 * @function lerp
 * @alias getLinerarInterpolation
 * Returns linear interpolation between two numbers.
 *
 * @example
 * lerp(5, 15, 0.5) // returns 10
 * lerp(5, 15, 0.1) // returns 6
 *
 * @param {number} min
 * @param {number} max
 * @param {number} t number between 0 and 1
 * @param {number} [decimals] Default defaultDecimalDigits
 * @returns {number}
 */
const lerp = getLinerarInterpolation


export default lerp
