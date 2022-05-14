import roundNumber from '../mathUtils/roundNumber'
import rgbToHex from './rgbToHex'


/**
 * @function rgbaToHex
 * converts r g b a values to rgb string #aabbccdd
 *
 * @example
 * rgbToHex(170, 187, 204, 0.8667) // ==> '#aabbccdd'
 *
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 * @return {string}
 */
const rgbaToHex = (r: number, g: number, b: number, a: number): string => {
  return `${rgbToHex(r, g, b)}${roundNumber(a * 255, 0).toString(16).padStart(2, '0')}`
}


export default rgbaToHex
