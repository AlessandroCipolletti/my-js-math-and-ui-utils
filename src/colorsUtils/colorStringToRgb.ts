import hexToRgba from './hexToRgba'
import rgbaStringToRgba from './rgbaStringToRgba'
import hslaStringToRgba from './hslaStringToRgba'


/**
 * @function colorStringToRgb
 * Converts any valid css color string to rgba values
 *
 * @example
 * colorStringToRgba('#aabbcc') // ==> { r: 170, g: 187, b: 204, a: 1 }
 * colorStringToRgba('#aabbccdd') // ==> { r: 170, g: 187, b: 204, a: 0.8667 }
 * colorStringToRgba('rgba(10, 20, 30, 0.45)') // ==> { r: 10, b: 20, b: 30, a: 0.45 }
 * colorStringToRgba('rgb(10, 20, 30)') // ==> { r: 10, b: 20, b: 30, a: 1 }
 * colorStringToRgba('hsla(100, 50%, 50%, 0.5)') // ==> { r: 106, g: 149, b: 191, a: 0.5 }
 * colorStringToRgba('hsl(100, 50%, 50%)') // ==> { r: 106, g: 149, b: 191, a: 1 }
 *
 * @param {string} colorString
 * @return {RgbaColorObject|string}
 */
const colorStringToRgb = (colorString: string): RgbaColorObject|string => {
  if (colorString.startsWith('#')) {
    return hexToRgba(colorString)
  } else if (colorString.startsWith('rgb')) {
    return rgbaStringToRgba(colorString)
  } else if (colorString.startsWith('hsl')) {
    return hslaStringToRgba(colorString)
  }

  return colorString
}


export default colorStringToRgb
