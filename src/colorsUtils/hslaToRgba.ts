import roundNumber from '../mathUtils/roundNumber'


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
const hslaToRgba = (
  hue: number,
  sat: number,
  light: number,
  alpha = 1,
): RgbaColorObject => {

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


export default hslaToRgba
