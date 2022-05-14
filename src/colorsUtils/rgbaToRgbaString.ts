
/**
 * @function rgbaToRgbaString
 * Returns a valid rgba() css string from the given r g b a values
 *
 * @example
 * rgbaToRgbaString(10, 20, 30, 0.45) // ==> 'rgba(10, 20, 30, 0.45)'
 * rgbaToRgbaString(10, 20, 30) // ==> 'rgba(10, 20, 30, 1)'
 *
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} [a = 1]
 * @return {string}
 */
const rgbaToRgbaString = (r: number, g: number, b: number, a = 1): string => {
  return `rgba(${r}, ${g}, ${b}, ${a})`
}


export default rgbaToRgbaString
