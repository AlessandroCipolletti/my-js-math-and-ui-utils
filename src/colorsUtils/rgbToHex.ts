
/**
 * @function rgbToHex
 * converts r g b values to rgb string #aabbcc
 *
 * @example
 * rgbToHex(170, 187, 204) // ==> '#aabbcc'
 *
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {string}
 */
const rgbToHex = (r: number, g: number, b: number): string => {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}


export default rgbToHex
