import { arrayOrderNumberIncreasing } from './jsUtils'

/*
 * Specify how many decimal digits you want in all results
 *
 * @type {number}
 */
let defaultDecimalGidits = 4

/*
 * Local alias for Math object
 */
const MATH = Math

/*
 * Local alias for Math.PI number
 *
 * @type {number}
 */
const PI = MATH.PI

/*
 * Set a different default decimal digit amount
 *
 * @param {number} digits
 */
export const setDefaultDecimalDigit = (digits: number):void => {
  defaultDecimalGidits = digits
}


/* ARITHMETIC UTILS */

/*
 * Round a number how much you want
 *
 * @param {number} number
 * @param {number} [decimals]
 * @return {number}
 */
export const roundNumber = (number: number, decimals: number = defaultDecimalGidits): number => {
  const factor = MATH.pow(10, decimals)
  return MATH.round(number * factor) / factor
}

/*
 * Force a number to be between a min and a max value, and then rounds it
 *
 * @example
 * // returns 5
 * const currentValue = 12
 * const minAcceptableValue = 2
 * const maxAcceptableValue = 5
 * getNumberInBetween(currentValue, minAcceptableValue, maxAcceptableValue)
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} [decimals]
 * @return {number}
 */
export const getNumberInBetween = (a:number, b:number, c:number, decimals: number = defaultDecimalGidits): number => {
  return roundNumber([a, b, c].sort(arrayOrderNumberIncreasing)[1], decimals)
}

/*
 * Get a random number, between min and max included, and then rounds it
 *
 * @example
 * // returns a random number between 0 and 10 included
 * getRandomNumber(10)
 * @example
 * // returns a random number between 5 and 10 included
 * getRandomNumber(5, 10)
 * @example
 * // returns a random integer number between 5 and 10 included
 * getRandomNumber(5, 10, 0)
 *
 * @param {number} n1
 * @param {number} [n2]
 * @param {number} [decimals]
 * @return {number}
 */
export const getRandomNumber = (n1: number, n2?: number, decimals: number = defaultDecimalGidits): number => {
  let min, max
  if (typeof n2 === 'undefined') {
    min = 0
    max = n1
  } else {
    min = n1
    max = n2
  }
  return roundNumber((MATH.random() * (max - min)) + min, decimals)
}

/*
 * Get the percentage of a value out of the total, and then rounds it
 *
 *
 * @example
 * // returns 50 because 10 is 50% of 20
 * getPercentageOfValue(10, 20)
 * @example
 * // returns 5.4187 because 11 is 5.4187% of 203
 * getPercentageOfValue(11, 203, 4)
 *
 * @param {number} value
 * @param {number} total
 * @param {number} [decimals]
 * @return {number}
 */
export const getPercentageOfValue = (value: number, total: number, decimals: number = defaultDecimalGidits): number => {
  return roundNumber(value * 100 / total, decimals)
}

/*
 * Get the value of a percentage out of the total, and then rounds it
 *
 * @example
 * // returns 10 because 50% of 20 = 10
 * getValueOfPercentage(50, 20)
 * @example
 * // returns 11 because 5.4187% of 203 = 11
 * getValueOfPercentage(5.4187, 203, 4)
 *
 * @param {number} percentage
 * @param {number} total
 * @param {number} [decimals]
 * @return {number}
 */
export const getValueOfPercentage = (percentage: number, total: number, decimals: number = defaultDecimalGidits): number => {
  return roundNumber(percentage * total / 100, decimals)
}

/*
 * Get the value of a percentage out of the total using a logarithmic scale, and then rounds it
 *
 * @example
 * // returns 10
 * getLogarithmicValueOfPercentage(50, 1, 100, 4)
 * @example
 * // returns 52.2396
 * getLogarithmicValueOfPercentage(85.9, 1, 100, 4)
 * @example
 * // returns 95.4993
 * getLogarithmicValueOfPercentage(99, 1, 100, 4)
 *
 * @param {number} percentage must be >= 0
 * @param {number} minValue must be > 0
 * @param {number} maxValue must be > 0
 * @param {number} [decimals]
 * @return {number}
 */
export const getLogarithmicValueOfPercentage = (
  percentage: number,
  minValue: number,
  maxValue: number,
  decimals: number = defaultDecimalGidits,
): number => {
  if (percentage < 0 || minValue <= 0 || maxValue <= 0) {
    return NaN
  }
  minValue = Math.log(minValue)
  maxValue = Math.log(maxValue)
  const scale = ((maxValue - minValue) / 100)
  return roundNumber(Math.exp(minValue + (scale * percentage)), decimals)
}

/*
 * Get the value of a percentage out of the total using a logarithmic scale, and then rounds it
 *
 * @example
 * // returns 50
 * getLogarithmicPercentageOfValue(10, 1, 100, 4)
 * @example
 * // returns 85.9
 * getLogarithmicPercentageOfValue(52.2396, 1, 100, 4)
 * @example
 * // returns 99
 * getLogarithmicPercentageOfValue(95.4993, 1, 100, 4)
 *
 * @param {number} percentage must be >= 0
 * @param {number} minValue must be > 0
 * @param {number} maxValue must be > 0
 * @param {number} [decimals]
 * @return {number}
 */
export const getLogarithmicPercentageOfValue = (
  value: number,
  minValue: number,
  maxValue: number,
  decimals: number = defaultDecimalGidits,
): number => {
  minValue = Math.log(minValue)
  maxValue = Math.log(maxValue)
  const scale = ((maxValue - minValue) / 100)
  if (scale > 0) {
    return roundNumber((Math.log(value) - minValue) / scale, decimals)
  } else {
    return 100
  }
}

/*
 * Get the average of all given numbers
 *
 * @example
 * // returns 5.3333
 * getAverage([2, 4, 10], 4)
 *
 * @param {array} values
 * @param {number} [decimals]
 * @return {number}
 */
export const getAverage = (values: Array<number>, decimals: number = defaultDecimalGidits): number => {
  return roundNumber(values.reduce((t, v) => t + v, 0) / values.length, decimals)
}

const _getGreatCommonDivisorBetweenTwoNumbers = (x: number, y: number): number => {
  x = MATH.abs(x)
  y = MATH.abs(y)
  while (y) {
    const t = y
    y = x % y
    x = t
  }
  return x
}

/*
 * Get the great common divisor between all given numbers
 *
 * @example
 * // returns 6
 * getGreatCommonDivisor([12, 24, 6])
 *
 * @param {array} numbers
 * @return {Array} Array with [x, y] middle point's coords
 */
export const getGreatCommonDivisor = (numbers: Array<number>): number => {
  while (numbers.length > 2) {
    const x = numbers.pop() as number
    const y = numbers.pop() as number
    numbers.push(_getGreatCommonDivisorBetweenTwoNumbers(x, y))
  }
  return _getGreatCommonDivisorBetweenTwoNumbers(numbers[0], numbers[1])
}

/*
 * Checks if all elements in the array differ from each other by less than the given tolerance
 *
 * @example
 * // returns true
 * valuesAreSimilar([10.2, 10.3, 10.5], 0.5)
 * @example
 * // returns false
 * valuesAreSimilar([10, 13, 12], 1)
 *
 * @param {array} values
 * @param {number} tolerance
 * @return {boolean}
 */
export const valuesAreSimilar = (values: Array<number>, tolerance = 0): boolean => {
  const max = MATH.max(...values)
  const min = MATH.min(...values)
  return Math.abs(max - min) <= tolerance
}


/* BEZIER CURVE */

/*
 * Get the length of a quadratic bezier curve passing through 3 points, and then rounds it
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} x3
 * @param {number} y3
 * @param {number} [decimals]
 * @return {number}
 */
export const getQuadraticBezierCurveLength = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  decimals: number = defaultDecimalGidits,
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
  const Sabc = 2 * MATH.sqrt(A + B + C)
  const A_2 = MATH.sqrt(A)
  const A_32 = 2 * A * A_2
  const C_2 = 2 * MATH.sqrt(C)
  let BA = B / A_2
  if (BA === -C_2 && a.x !== 0 && a.y !== 0 && b.x !== 0 && b.y !== 0) {
    BA += 1
  }
  const length = (A_32 * Sabc + A_2 * B * (Sabc - C_2) + (4 * C * A - B * B) * MATH.log((2 * A_2 + BA + Sabc) / (BA + C_2))) / (4 * A_32)
  return roundNumber(length, decimals)
}

/*
 * Get the quadratic bezier value at the given time t
 *
 * @param {number} t
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @return {number}
 */
export const getQuadraticBezierValue = (t: number, p1: number, p2: number, p3: number): number => {
  return ((1 - t) * (1 - t) * p1 + 2 * (1 - t) * t * p2 + t * t * p3)
}

/*
 * Get the length of a quadratic bezier curve passing through 3 points, and then rounds it
 *
 * @param {number} t
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} x3
 * @param {number} y3
 * @param {number} [decimals]
 * @return {Array} Array of [x, y] coords
 */
export const getQuadraticBezierCurvePointAtTime = (
  t: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  decimals: number = defaultDecimalGidits,
): Array<number> => {
  return [
    roundNumber((1 - t) * (1 - t) * x1 + 2 * (1 - t) * t * x2 + t * t * x3, decimals), // curve x at time t
    roundNumber((1 - t) * (1 - t) * y1 + 2 * (1 - t) * t * y2 + t * t * y3, decimals), // curve y at time t
  ]
}


/* CARTESIAN PLANE UTILS */

/*
 * Converts radians to degrees
 *
 * @example
 * // returns 180
 * convertAngleRadiansToDegrees(Math.PI)
 *
 * @param {number} rad
 */
export const convertAngleRadiansToDegrees = (radians: number): number => {
  return radians * 180 / PI
}

/*
 * Converts degrees to radians
 *
 * @example
 * // returns 3.141592653589793
 * convertAngleDegreesToRadians(180)
 *
 * @param {number} deg
 */
export const convertAngleDegreesToRadians = (degrees: number): number => {
  return degrees * PI / 180
}

/*
 * Get the distance between two points' coords (on a Cartesian plane px system), and then rounds it
 *
 * @example
 * // returns 5.6569
 * getDistanceBetweenTwoPoints(1, 1, 5, 5, 4)
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} [decimals]
 * @return {number}
 */
export const getDistanceBetweenTwoPoints = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  decimals: number = defaultDecimalGidits,
): number => {
  return roundNumber(MATH.sqrt(MATH.pow(x2 - x1, 2) + MATH.pow(y2 - y1, 2)), decimals)
}

/*
 * Get the distance between three points' coords (on a Cartesian plane px system), and then rounds it
 *
 * @example
 * // returns 8.8192
 * getDistanceBetweenThreePoints(1, 1, 5, 5, 8, 6, 4)
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} x3
 * @param {number} y3
 * @param {number} [decimals]
 * @return {number}
 */
export const getDistanceBetweenThreePoints = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  decimals: number = defaultDecimalGidits,
): number => {
  const firstDistance = getDistanceBetweenTwoPoints(x1, y1, x2, y2, decimals) || 0
  const secondDistance = getDistanceBetweenTwoPoints(x2, y2, x3, y3, decimals) || 0
  return roundNumber(firstDistance + secondDistance, decimals)
}

/*
 * Tells if the distance between two points is greater than a certain amount (on a Cartesian plane px system)
 *
 * @example
 * // returns true because distance between [1, 1] and [5, 5] is 5.6569
 * distanceBetweenTwoPointsGreaterThan(1, 1, 5, 5, 5)
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} distance
 * @return {boolean}
 */
export const distanceBetweenTwoPointsGreaterThan = (x1: number, y1: number, x2: number, y2: number, distance: number): boolean => {
  return MATH.pow(x2 - x1, 2) + MATH.pow(y2 - y1, 2) >= MATH.pow(distance, 2)
}

/*
 * Get the angle (in degree) of the line passing through two points (on a Cartesian plane px system)
 *
 * @example
 * // returns 45
 * getAngleDegreesBetweenTwoPoints(1, 1, 2, 2)
 * @example
 * // returns 315
 * getAngleDegreesBetweenTwoPoints(1, 1, 3, -1)
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 */
export const getAngleDegreesBetweenTwoPoints = (x1: number, y1: number, x2: number, y2: number): number => {
  return convertAngleRadiansToDegrees(getAngleRadiansBetweenTwoPoints(x1, y1, x2, y2))
}

/*
 * Get the angle (in radians) of the line passing through two points (on a Cartesian plane px system)
 *
 * @example
 * // returns 0.7853981633974483
 * getAngleRadiansBetweenTwoPoints(1, 1, 2, 2)
 * @example
 * // returns 5.497787143782138
 * getAngleRadiansBetweenTwoPoints(1, 1, 3, -1)
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 */
export const getAngleRadiansBetweenTwoPoints = (x1: number, y1: number, x2: number, y2: number): number => {
  const m1 = x2 - x1
  const m2 = y2 - y1
  if (m1 > 0 && m2 > 0) { // first quadrant
    return (MATH.atan(m2 / m1))
  } else if (m1 < 0 && m2 > 0) { // second quadrant
    return (MATH.atan(m2 / m1) + PI)
  } else if (m1 < 0 && m2 < 0) { // third quadrant
    return (MATH.atan(m2 / m1) + PI)
  } else if (m1 > 0 && m2 < 0) { // fourth quadrant
    return (MATH.atan(m2 / m1) + PI * 2)
  } else {
    // multiples of 90
    if (m1 === 0) {
      if (m2 > 0) {
        return PI / 2
      } else {
        return PI * 1.5
      }
    } else {
      if (m1 > 0) {
        return 0
      } else {
        return PI
      }
    }
  }
}

/*
 * Rotate a point's coords by a specific radians angle (on a Cartesian plane px system)
 *
 * @example
 * // returns [ -1, -1 ]
 * rotateCoords(1, 1, Math.PI)
 * @example
 * // returns [ 1, -1 ]
 * rotateCoords(1, 1, Math.PI / 2)
 *
 * @param {number} x
 * @param {number} y
 * @param {number} angleRadians
 * @param {number} [decimals]
 * @return {Array} Array with [x, y] rotated coords
 */
export const rotateCoords = (x: number, y: number, angleRadians: number, decimals: number = defaultDecimalGidits): Array<number> => {
  return [
    roundNumber(x * MATH.cos(angleRadians) + y * MATH.sin(angleRadians), decimals),
    roundNumber(-x * MATH.sin(angleRadians) + y * MATH.cos(angleRadians), decimals),
  ]
}

/*
 * Translate a point's coords by a specific amount (on a Cartesian plane px system)
 *
 * @example
 * // returns [ 4, -3]
 * translateCoords(1, 1, 3, -4)
 *
 * @param {number} x
 * @param {number} y
 * @param {number} dx
 * @param {number} dy
 * @return {Array} Array with [x, y] translated coords
 */
export const translateCoords = (x: number, y: number, dx: number, dy: number): Array<number> => {
  return [
    x + dx,
    y + dy,
  ]
}

/*
 * Get the middle point's coords between the two given points (on a Cartesian plane px system)
 *
 * @example
 * // returns [ 2, 2 ]
 * getMiddlePointCoords(1, 1, 3, 3)
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} [decimals]
 * @return {Array} Array with [x, y] middle point's coords
 */
export const getMiddlePointCoords = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  decimals: number = defaultDecimalGidits,
): Array<number> => {
  return [
    roundNumber((x1 + x2) / 2, decimals),
    roundNumber((y1 + y2) / 2, decimals),
  ]
}

/*
 * Get the slope coefficient of the line passing through two given points (on a Cartesian plane px system)
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 */
export const getSlopeCoefficientBetweenTwoPoints = (x1: number, y1: number, x2: number, y2: number): number => {
  return (y2 - y1) / (x2 - x1)
}

/*
 * Get the cartesian function of the line passing through two given points (on a Cartesian plane px system)
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {Function}
 */
export const getLineFunctionBetweenTwoPoints = (x1: number, y1: number, x2: number, y2: number) => {
  return (x: number) => (((x - x1) * (y2 - y1)) / (x2 - x1)) + y1
}

/*
 * Get the cartesian function of the perpendicular line passing through one given point (on a Cartesian plane px system)
 *
 * @param {number} slope
 * @param {number} x1
 * @param {number} y1
 * @return {Function}
 */
export const getPerpendicularLineFunctionPassingByPoint = (slope: number, x1: number, y1: number) => {
  return (x: number) => (-1 / slope) * (x - x1) + y1
}

/*
 * Get the coords of the intersection point between two lines (on a Cartesian plane px system)
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} x3
 * @param {number} y3
 * @param {number} x4
 * @param {number} y4
 * @param {number} [decimals]
 * @return {Array} Array with [x, y] coords
 */
export const getIntersectionBetween4Points = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  x4: number,
  y4: number,
  decimals: number = defaultDecimalGidits,
): Array<number> => {
  // points {x1, y1} and {x2, y2} define the first line
  // points {x3, y3} and {x4, y4} define the second line
  const denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1)
  if (denom === 0) {
    return [NaN, NaN]
  }
  const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denom
  return [
    roundNumber(x1 + ua * (x2 - x1), decimals),
    roundNumber(y1 + ua * (y2 - y1), decimals),
  ]
}

/*
 * Get the coords of the perpendicular projection of the given point on the given live (on a Cartesian plane px system)
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} x3
 * @param {number} y3
 * @return {Array} Array with [x, y] coords
 */
export const getPointProjectionOnLine = (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): Array<number> => {
  // points {x1, y1} and {x2, y2} define the line
  // point {x3, y3} is the point to project on the line
  let x4, y4
  const slopeLine1 = getSlopeCoefficientBetweenTwoPoints(x1, y1, x2, y2)
  if (slopeLine1 === 0) {
    x4 = x3
    y4 = y1
  } else if (isFinite(slopeLine1)) {
    const line2 = getPerpendicularLineFunctionPassingByPoint(slopeLine1, x3, y3)
    if (x3 === x1) {
      x4 = x2
    } else {
      x4 = x1
    }
    y4 = line2(x4)
  } else {
    x4 = x1
    y4 = y3
  }
  return getIntersectionBetween4Points(x1, y1, x2, y2, x3, y3, x4, y4)
}

/*
 * Get the factorial of the given number
 * (Recursive function)
 *
 * @param {number} n
 * @return {number}
 */
export const factorial = (n: number): number => {
  return n === 1 ? 1 : n * factorial(n - 1)
}

/*
 * Get the summation of the first N natural numbers
 * Thanks to Carl Friedrich Gauss we don't need to use a recursive function
 *
 * @param {number} n
 * @return {number}
 */
export const naturalNumbersSummation = (n: number): number => {
  // return n === 1 ? 1 : n + naturalNumbersSummation(n - 1)
  return (n * (n + 1)) / 2
}
