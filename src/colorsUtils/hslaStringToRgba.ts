import hslaToRgba from './hslaToRgba'


/**
 * @function hslaStringToRgba
 * Converts hsl css strings to rgba values
 *
 * @example
 * hslaStringToRgba('hsla(100, 50%, 50%, 0.5)') // ==> { r: 106, g: 149, b: 191, a: 0.5 }
 * hslaStringToRgba('hsl(100, 50%, 50%)') // ==> { r: 106, g: 149, b: 191, a: 1 }
 *
 * @param {string} hslaString
 * @return {RgbaColorObject}
 */
const hslaStringToRgba = (hslaString: string): RgbaColorObject => {
  const [h, s, l, a] = hslaString
    .substring(hslaString.indexOf('(') + 1)
    .replace(')', '')
    .replaceAll(' ', '')
    .split(',')

  return hslaToRgba(
    parseInt(h),
    parseInt(s) / 100,
    parseInt(l) / 100,
    typeof a !== 'undefined' ? parseFloat(a) : 1
  )
}


export default hslaStringToRgba
