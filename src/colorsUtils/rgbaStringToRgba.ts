
/**
 * @function rgbaStringToRgba
 * Spits a rgba() or rgb() css string to its r g b a values
 *
 * @example
 * rgbaStringToRgba('rgba(10, 20, 30, 0.45)') // ==> { r: 10, b: 20, b: 30, a: 0.45 }
 * rgbaStringToRgba('rgb(10, 20, 30)') // ==> { r: 10, b: 20, b: 30, a: 1 }
 *
 * @param {string} rgbaString
 * @return RgbaColorObject
 */
const rgbaStringToRgba = (rgbaString: string): RgbaColorObject => {
  const [r, g, b, a] = rgbaString
    .substring(rgbaString.indexOf('(') + 1)
    .replace(')', '')
    .replaceAll(' ', '')
    .split(',')

  return {
    r: parseInt(r),
    g: parseInt(g),
    b: parseInt(b),
    a: typeof a !== 'undefined' ? parseFloat(a) : 1,
  }
}


export default rgbaStringToRgba
