import { defaultDecimalDigits } from './setDefaultDecimalDigits'
import roundNumber from './roundNumber'


/**
 * @function getQuadraticBezierCurveLength
 * Get the length of a quadratic bezier curve passing through 3 points, and then rounds it
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} x3
 * @param {number} y3
 * @param {number} [decimals] Default defaultDecimalDigits
 * @return {number}
 */
const getQuadraticBezierCurveLength = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  decimals: number = defaultDecimalDigits,
): number => {

  const a = {
    x: x1 - 2 * x2 + x3,
    y: y1 - 2 * y2 + y3,
  }
  const b = {
    x: 2 * x2 - 2 * x1,
    y: 2 * y2 - 2 * y1,
  }
  const A = 4 * (a.x * a.x + a.y * a.y)
  const B = 4 * (a.x * b.x + a.y * b.y)
  const C = b.x * b.x + b.y * b.y
  const Sabc = 2 * Math.sqrt(A + B + C)
  const A_2 = Math.sqrt(A)
  const A_32 = 2 * A * A_2
  const C_2 = 2 * Math.sqrt(C)
  let BA = B / A_2
  if (BA === -C_2 && a.x !== 0 && a.y !== 0 && b.x !== 0 && b.y !== 0) {
    BA += 1
  }
  const length = (A_32 * Sabc + A_2 * B * (Sabc - C_2) + (4 * C * A - B * B) * Math.log((2 * A_2 + BA + Sabc) / (BA + C_2))) / (4 * A_32)

  return roundNumber(length, decimals)
}


export default getQuadraticBezierCurveLength
