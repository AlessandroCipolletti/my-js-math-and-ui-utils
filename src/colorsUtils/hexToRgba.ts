import roundNumber from '../mathUtils/roundNumber'


/**
 * @function hexToRgba
 * Converts hex string (#aabbcc || #aabbccdd) to rgba object
 *
 * @example
 * hexToRgba('#aabbcc') // ==> { r: 170, g: 187, b: 204, a: 1 }
 * hexToRgba('#aabbccdd') // ==> { r: 0, g: 0, b: 0, a: 0.8667 }
 *
 * @param {string} hex
 * @returns RgbaColorObject
 */
const hexToRgba = (hex: string): RgbaColorObject => ({
  r: parseInt(hex.substring(1, 3), 16),
  g: parseInt(hex.substring(3, 5), 16),
  b: parseInt(hex.substring(5, 7), 16),
  a: hex.length > 7 ? roundNumber(parseInt(hex.substring(7, 9), 16) / 255, 4) : 1,
})


export default hexToRgba
