import hexToRgba from './hexToRgba'
import rgbaToHsla from './rgbaToHsla'


/**
 * @function getHexBrightness
 * Allows to read the brightness of an hex rgb string like it was an hsl color.
 *
 * @param {string} hex
 * @return {number}
 */
const getHexBrightness = (hex: string): number => {
  const rgb: RgbaColorObject = hexToRgba(hex)
  const hsl: HslaColorObject = rgbaToHsla(rgb.r, rgb.g, rgb.b)

  return hsl.l
}


export default getHexBrightness
