import linerarInterpolation from './linerarInterpolation'


/**
 * @function lerp
 * @alias linerarInterpolation
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
 * @return {number}
 */
const lerp = linerarInterpolation


export default lerp
