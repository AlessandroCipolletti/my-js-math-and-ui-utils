import { getRandomNumber, roundNumber } from './mathUtils'


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
export const rgbaToRgbaString = (r: number, g: number, b: number, a = 1) => {
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

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
export const rgbaStringToRgba = (rgbaString: string): RgbaColorObject => {
  const [r, g, b, a] = rgbaString.substring(rgbaString.indexOf('(') + 1).replace(')', '').replaceAll(' ', '').split(',')
  return {
    r: parseInt(r),
    g: parseInt(g),
    b: parseInt(b),
    a: typeof a !== 'undefined' ? parseFloat(a) : 1,
  }
}

/**
 * @function hexToRgba
 * Converts hex string (#aabbcc || #aabbccdd) to rgba object
 *
 * @example
 * hexToRgba('#aabbcc') // ==> { r: 170, g: 187, b: 204, a: 1 }
 * hexToRgba('#aabbccdd') // ==> { r: 0, g: 0, b: 0, a: 0.8667 }
 *
 * @param {string} hex
 * @return RgbaColorObject
 */
export const hexToRgba = (hex: string): RgbaColorObject => ({
  r: parseInt(hex.substring(1, 3), 16),
  g: parseInt(hex.substring(3, 5), 16),
  b: parseInt(hex.substring(5, 7), 16),
  a: hex.length > 7 ? roundNumber(parseInt(hex.substring(7, 9), 16) / 255, 4) : 1,
})

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
export const rgbToHex = (r: number, g: number, b: number): string => {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

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
export const rgbaToHex = (r: number, g: number, b: number, a: number): string => {
  return `${rgbToHex(r, g, b)}${roundNumber(a * 255, 0).toString(16).padStart(2, '0')}`
}

/**
 * @function compareRgbColorsWithTolerance
 * Compares two RgbColorObject.
 * It needs all three values r g b to be within the tolerance for the two colors to be treated as equal.
 *
 * @param {RgbColorObject} rgb1
 * @param {RgbColorObject} rgb2
 * @param {number} [tolerance = 10]
 * @return {boolean}
 */
export const compareRgbColorsWithTolerance = (
  rgb1: RgbColorObject,
  rgb2: RgbColorObject,
  tolerance = 10,
): boolean => !(
  Math.abs(rgb1.r - rgb2.r) > tolerance ||
  Math.abs(rgb1.g - rgb2.g) > tolerance ||
  Math.abs(rgb1.b - rgb2.b) > tolerance
)

/**
 * @function hslaToRgba
 * Converts hue saturation brightness alpha values to  r g b a values
 *
 * @example
 * hslaToRgba(100, 50, 50, 0.5) // ==> { r: 106, g: 149, b: 191, a: 0.5 }
 * hslaToRgba(100, 10, 50, 0.5) // ==> { r: 123, g: 140, b: 115, a: 0.5 }
 *
 * @param {number} hue
 * @param {number} sat
 * @param {number} light
 * @param {number} [alpha = 1]
 * @return {RgbaColorObject}
 */
export const hslaToRgba = (hue: number, sat: number, light: number, alpha = 1): RgbaColorObject => {
  let t2: number
  sat = roundNumber(sat / 100, 2)
  light = roundNumber(light / 100, 2)
  hue = hue / 60
  if (light <= 0.5) {
    t2 = light * (sat + 1)
  } else {
    t2 = light + sat - (light * sat)
  }
  const t1: number = light * 2 - t2
  const r = roundNumber(_hueToRgb(t1, t2, hue + 2) * 255, 0)
  const g = roundNumber(_hueToRgb(t1, t2, hue) * 255, 0)
  const b = roundNumber(_hueToRgb(t1, t2, hue - 2) * 255, 0)

  return { r, g, b, a: alpha }
}

const _hueToRgb = (t1: number, t2: number, hue: number): number => {
  if (hue < 0) hue += 6
  if (hue >= 6) hue -= 6
  if (hue < 1) return (t2 - t1) * hue + t1
  else if (hue < 3) return t2
  else if (hue < 4) return (t2 - t1) * (4 - hue) + t1
  else return t1
}

/**
 * @function rgbaToHsla
 * Converts r g b a values to h l s a values
 *
 * @example
 * rgbaToHsla(106, 149, 191, 0.5) // ==> { h: 100, s: 50, l: 50, a: 0.5 }
 * rgbaToHsla(123, 140, 115, 0.5) // ==> { h: 100, s: 10, l: 50, a: 0.5 }
 *
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} [a]
 * @return {HslaColorObject}
 */
const rgbaToHsla = (r: number, g: number, b: number, a = 1): HslaColorObject => {
  let s: number, h = 0
  const rgb: Array<number> = [r / 255, g / 255, b / 255]
  let min: number = rgb[0]
  let max: number = rgb[0]
  let maxcolor = 0

  for (let i = 0; i < rgb.length - 1; i++) {
    if (rgb[i + 1] <= min) {
      min = rgb[i + 1]
    }
    if (rgb[i + 1] >= max) {
      max = rgb[i + 1]
      maxcolor = i + 1
    }
  }

  if (maxcolor === 0) {
    h = (rgb[1] - rgb[2]) / (max - min)
  }

  if (maxcolor === 1) {
    h = 2 + (rgb[2] - rgb[0]) / (max - min)
  }

  if (maxcolor === 2) {
    h = 4 + (rgb[0] - rgb[1]) / (max - min)
  }

  if (isNaN(h)) {
    h = 0
  }

  h = h * 60
  if (h < 0) {h = h + 360 }

  const l = (min + max) / 2

  if (min === max) {
    s = 0
  } else {
    if (l < 0.5) {
      s = (max - min) / (max + min)
    } else {
      s = (max - min) / (2 - max - min)
    }
  }

  return {
    h: roundNumber(h, 0),
    s: roundNumber(s * 100, 0),
    l: roundNumber(l * 100, 0),
    a,
  }
}

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
export const hslaStringToRgba = (hslaString: string): RgbaColorObject => {
  const [h, s, l, a] = hslaString.substring(hslaString.indexOf('(') + 1).replace(')', '').replaceAll(' ', '').split(',')
  return hslaToRgba(parseInt(h), parseInt(s) / 100, parseInt(l) / 100, typeof a !== 'undefined' ? parseFloat(a) : 1)
}

/**
 * @function getRandomRgbaColor
 * Get a random rgba() css string color.
 * With a specific alpha, a default alpha, or without alpha.
 *
 * @example
 * getRandomRgbaColor(false) // ==> 'rgba(12, 43, 146, 1)'
 * getRandomRgbaColor(true) // ==> 'rgba(212, 143, 246, 0.7)'
 * getRandomRgbaColor(0.356) // ==> 'rgba(22, 13, 26, 0.356)'
 *
 * @param {boolean|number} [alpha = false]
 * @return {string}
 */
export const getRandomRgbaColor = (alpha: boolean|number = false): string => {
  if (alpha === false) alpha = 1
  else if (alpha === true) alpha = 0.7
  else if (typeof(alpha) !== 'number') alpha = 1

  return `rgba(${getRandomNumber(255, 0, 0)}, ${getRandomNumber(255, 0, 0)}, ${getRandomNumber(255, 0, 0)}, ${alpha})`
}

/**
 * @function getRandomHexColor
 * Get a random hex css string #123456
 *
 * @example
 * getRandomHexColor() // ==> '#adc398'
 *
 * @return {string}
 */
export const getRandomHexColor = (): string => {
  const a = getRandomNumber(255, 0, 0)
  const b = getRandomNumber(255, 0, 0)
  const c = getRandomNumber(255, 0, 0)
  return `#${((256+a<<8|b)<<8|c).toString(16).slice(1)}`
}

/**
 * @function getRandomHslaColor
 * Get a random hsla() css string
 *
 * @example
 * getRandomHslaColor() // ==> 'hsla(123, 23, 98, 1)'
 * getRandomHslaColor(0.34) // ==> 'hsla(349, 67, 9, 0.34)'
 * getRandomHslaColor(0.34, 50) // ==> 'hsla(111, 50, 28, 0.34)'
 * getRandomHslaColor(0.34, 50, 40) // ==> 'hsla(87, 50, 40, 0.34)'
 *
 * @param {boolean|number} [alpha = false]
 * @param {boolean|number} [defaultSat = true]
 * @param {boolean|number} [defaultLight = true]
 * @return {string}
 */
export const getRandomHslaColor = (alpha: boolean|number = false, defaultSat = true, defaultLight = true): string => {
  if (alpha === false) alpha = 1
  else if (alpha === true) alpha = 0.7
  else if (typeof(alpha) !== 'number') alpha = 1

  const hue = getRandomNumber(360, 0, 0)
  const sat = defaultSat ? 100 : getRandomNumber(100, 0, 0)
  const light = defaultLight ? 50 : getRandomNumber(100, 0, 0)

  return `hsla(${hue}, ${sat}%, ${light}%, ${alpha})`
}

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
export const colorStringToRgb = (colorString: string): RgbaColorObject|string => {
  if (colorString.startsWith('#')) {
    return hexToRgba(colorString)
  } else if (colorString.startsWith('rgb')) {
    return rgbaStringToRgba(colorString)
  } else if (colorString.startsWith('hsl')) {
    return hslaStringToRgba(colorString)
  }

  return colorString
}

/**
 * @function applyBrightnessToHex
 * Allows to chenge brightness to an hex rgb color like it was an hsl color.
 * It returns a new hex rgb string.
 *
 * @param {string} hex
 * @param {number} brightness
 * @return {string}
 */
export const applyBrightnessToHex = (hex: string, brightness: number): string => {
  const rgb: RgbaColorObject = hexToRgba(hex)
  const hsl: HslaColorObject = rgbaToHsla(rgb.r, rgb.g, rgb.b)
  const newRgb: RgbaColorObject = hslaToRgba(hsl.h, hsl.s, brightness)
  const newHex: string = rgbToHex(newRgb.r, newRgb.g, newRgb.b)

  return newHex
}

/**
 * @function getHexBrightness
 * Allows to read the brightness of an hex rgb string like it was an hsl color.
 *
 * @param {string} hex
 * @return {number}
 */
export const getHexBrightness = (hex: string): number => {
  const rgb: RgbaColorObject = hexToRgba(hex)
  const hsl: HslaColorObject = rgbaToHsla(rgb.r, rgb.g, rgb.b)

  return hsl.l
}
