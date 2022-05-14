import roundNumber from '../mathUtils/roundNumber'


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
 * @returns {HslaColorObject}
 */
const rgbaToHsla = (
  r: number,
  g: number,
  b: number,
  a = 1,
): HslaColorObject => {

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


export default rgbaToHsla
