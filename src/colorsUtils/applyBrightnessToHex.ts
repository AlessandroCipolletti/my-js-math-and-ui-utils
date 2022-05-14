import hexToRgba from './hexToRgba'
import rgbaToHsla from './rgbaToHsla'
import hslaToRgba from './hslaToRgba'
import rgbToHex from './rgbToHex'


/**
 * @function applyBrightnessToHex
 * Allows to chenge brightness to an hex rgb color like it was an hsl color.
 * It returns a new hex rgb string.
 *
 * @param {string} hex
 * @param {number} brightness
 * @return {string}
 */
const applyBrightnessToHex = (hex: string, brightness: number): string => {
  const rgb: RgbaColorObject = hexToRgba(hex)
  const hsl: HslaColorObject = rgbaToHsla(rgb.r, rgb.g, rgb.b)
  const newRgb: RgbaColorObject = hslaToRgba(hsl.h, hsl.s, brightness)
  const newHex: string = rgbToHex(newRgb.r, newRgb.g, newRgb.b)

  return newHex
}


export default applyBrightnessToHex
