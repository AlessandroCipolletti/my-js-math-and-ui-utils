
/**
 * @function compareRgbColorsWithTolerance
 * Compares two RgbColorObject.
 * It needs all three values r g b to be within the tolerance for the two colors to be treated as equal.
 *
 * @param {RgbColorObject} rgb1
 * @param {RgbColorObject} rgb2
 * @param {number} [tolerance = 10]
 * @returns {boolean}
 */
const compareRgbColorsWithTolerance = (
  rgb1: RgbColorObject,
  rgb2: RgbColorObject,
  tolerance = 10
): boolean => !(
  Math.abs(rgb1.r - rgb2.r) > tolerance ||
  Math.abs(rgb1.g - rgb2.g) > tolerance ||
  Math.abs(rgb1.b - rgb2.b) > tolerance
)


export default compareRgbColorsWithTolerance
