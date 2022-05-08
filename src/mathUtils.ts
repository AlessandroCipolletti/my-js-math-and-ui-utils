import { arrayOrderNumberIncreasing } from './jsUtils'

/**
 * Specify how many decimal digits you want in all results
 * @type {number}
 */
let defaultDecimalDigits = 4

/**
 * Local alias for Math object
 */
const MATH = Math

/**
 * Local alias for Math.PI number
 * @type {number}
 */
const PI = MATH.PI

/**
 * @function setDefaultDecimalDigits
 * Set a different default decimal digit amount
 *
 * @param {number} digits
 * @return {void}
 */
export const setDefaultDecimalDigits = (digits: number):  void => {
  defaultDecimalDigits = digits
}


/* ARITHMETIC UTILS */

/**
 * @function roundNumber
 * Round a number how much you want
 *
 * @example
 * roundNumber(8.45456223) // ==> 8.4546 // default 4 decimal digits
 * @example
 * roundNumber(8.45456223, 2) // ==> 8.45
 *
 * @param {number} number
 * @param {number} [decimals] Default defaultDecimalDigits
 * @return {number}
 */
export const roundNumber = (number: number, decimals: number = defaultDecimalDigits): number => {
  const factor = MATH.pow(10, decimals)
  return MATH.round(number * factor) / factor
}

/**
 * @function getNumberInBetween
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
 * @param {number} [decimals] Default defaultDecimalDigits
 * @return {number}
 */
export const getNumberInBetween = (a:number, b:number, c:number, decimals: number = defaultDecimalDigits): number => {
  return roundNumber([a, b, c].sort(arrayOrderNumberIncreasing)[1], decimals)
}

/**
 * @function getRandomNumber
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
 * @param {number} [decimals] Default defaultDecimalDigits
 * @return {number}
 */
export const getRandomNumber = (n1: number, n2?: number, decimals: number = defaultDecimalDigits): number => {
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

/**
 * @function getPercentageOfValue
 * Get the percentage of a value out of the total, and then rounds it
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
 * @param {number} [decimals] Default defaultDecimalDigits
 * @return {number}
 */
export const getPercentageOfValue = (value: number, total: number, decimals: number = defaultDecimalDigits): number => {
  return roundNumber(value * 100 / total, decimals)
}

/**
 * @function getValueOfPercentage
 * Get the value of a percentage out of the total, and then rounds it
 *
 * @example
 * getValueOfPercentage(50, 20) // ==> 10 because 50% of 20 = 10
 * @example
 * getValueOfPercentage(5.4187, 203, 4) // 11 because 5.4187% of 203 = 11
 *
 * @param {number} percentage
 * @param {number} total
 * @param {number} [decimals] Default defaultDecimalDigits
 * @return {number}
 */
export const getValueOfPercentage = (percentage: number, total: number, decimals: number = defaultDecimalDigits): number => {
  return roundNumber(percentage * total / 100, decimals)
}

/**
 * @function getLogarithmicValueOfPercentage
 * Get the value of a percentage out of the total using a logarithmic scale, and then rounds it
 *
 * @example
 * getLogarithmicValueOfPercentage(50, 1, 100, 4) // ==> 10
 * @example
 * getLogarithmicValueOfPercentage(85.9, 1, 100, 4) // ==> 52.2396
 * @example
 * getLogarithmicValueOfPercentage(99, 1, 100, 4) // ==> 95.4993
 *
 * @param {number} percentage must be >= 0
 * @param {number} minValue must be > 0
 * @param {number} maxValue must be > 0
 * @param {number} [decimals] Default defaultDecimalDigits
 * @return {number}
 */
export const getLogarithmicValueOfPercentage = (
  percentage: number,
  minValue: number,
  maxValue: number,
  decimals: number = defaultDecimalDigits,
): number => {
  if (percentage < 0 || minValue <= 0 || maxValue <= 0) {
    return NaN
  }
  minValue = Math.log(minValue)
  maxValue = Math.log(maxValue)
  const scale = ((maxValue - minValue) / 100)
  return roundNumber(Math.exp(minValue + (scale * percentage)), decimals)
}

/**
 * @function getLogarithmicPercentageOfValue
 * Get the value of a percentage out of the total using a logarithmic scale, and then rounds it
 *
 * @example
 * getLogarithmicPercentageOfValue(10, 1, 100, 4) // ==> 50
 * @example
 * getLogarithmicPercentageOfValue(52.2396, 1, 100, 4) // ==> 85.9
 * @example
 * getLogarithmicPercentageOfValue(95.4993, 1, 100, 4) // ==> 99
 *
 * @param {number} value must be >= 0
 * @param {number} minValue must be > 0
 * @param {number} maxValue must be > 0
 * @param {number} [decimals] Default defaultDecimalDigits
 * @return {number}
 */
export const getLogarithmicPercentageOfValue = (
  value: number,
  minValue: number,
  maxValue: number,
  decimals: number = defaultDecimalDigits,
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

/**
 * @function getAverage
 * Get the average of all given numbers
 *
 * @example
 * getAverage([2, 4, 10], 4) // ==> 5.3333
 *
 * @param {array} values
 * @param {number} [decimals] Default defaultDecimalDigits
 * @return {number}
 */
export const getAverage = (values: Array<number>, decimals: number = defaultDecimalDigits): number => {
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

/**
 * @function getGreatCommonDivisor
 * Get the great common divisor between all given numbers
 *
 * @example
 * getGreatCommonDivisor([12, 24, 6]) // ==> 6
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

/**
 * @function valuesAreSimilar
 * Checks if all elements in the array differ from each other by less than the given tolerance
 *
 * @example
 * valuesAreSimilar([10.2, 10.3, 10.5], 0.5) // ==> true
 * @example
 * valuesAreSimilar([10, 13, 12], 1) // ==> false
 *
 * @param {Array<number>} values
 * @param {number} [tolerance] Default = 0
 * @return {boolean}
 */
export const valuesAreSimilar = (values: Array<number>, tolerance = 0): boolean => {
  const max = MATH.max(...values)
  const min = MATH.min(...values)
  return Math.abs(max - min) <= tolerance
}

/**
 * @function factorial
 * Get the factorial of the given number
 * (Recursive function)
 *
 * @example
 * factorial(5) // ==> 120 = 5! = 5 * 4 * 3 * 2 * 1
 *
 * @param {number} n
 * @return {number}
 */
export const factorial = (n: number): number => {
  return n === 1 ? 1 : n * factorial(n - 1)
}

/**
 * @function naturalNumbersSummation
 * Get the summation of the first N natural numbers
 * Thanks to Carl Friedrich Gauss we don't need to use a recursive function
 *
 * @example
 * naturalNumbersSummation(5) // ==> 15 = 5 + 4 + 3 + 2 + 1
 *
 * @param {number} n
 * @return {number}
 */
export const naturalNumbersSummation = (n: number): number => {
  // return n === 1 ? 1 : n + naturalNumbersSummation(n - 1)
  return (n * (n + 1)) / 2
}


/* BEZIER CURVE */

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
export const getQuadraticBezierCurveLength = (
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

/**
 * @function getQuadraticBezierValueAtTime
 * Get the quadratic bezier value at the given time t
 *
 * @param {number} t
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @return {number}
 */
export const getQuadraticBezierValueAtTime = (t: number, p1: number, p2: number, p3: number): number => {
  return ((1 - t) * (1 - t) * p1 + 2 * (1 - t) * t * p2 + t * t * p3)
}

/**
 * @function getQuadraticBezierCurvePointAtTime
 * Get the length of a quadratic bezier curve passing through 3 points, and then rounds it
 *
 * @param {number} t
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} x3
 * @param {number} y3
 * @param {number} [decimals] Default defaultDecimalDigits
 * @return {Array<number>} Array of [x, y] coords
 */
export const getQuadraticBezierCurvePointAtTime = (
  t: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  decimals: number = defaultDecimalDigits,
): Array<number> => {
  return [
    roundNumber((1 - t) * (1 - t) * x1 + 2 * (1 - t) * t * x2 + t * t * x3, decimals), // curve x at time t
    roundNumber((1 - t) * (1 - t) * y1 + 2 * (1 - t) * t * y2 + t * t * y3, decimals), // curve y at time t
  ]
}


/* CARTESIAN PLANE UTILS */

/**
 * @function convertAngleRadiansToDegrees
 * Converts radians to degrees
 *
 * @example
 * convertAngleRadiansToDegrees(Math.PI) // ==> 180
 *
 * @param {number} radians
 * @return {number}
 */
export const convertAngleRadiansToDegrees = (radians: number): number => {
  return radians * 180 / PI
}

/**
 * @function convertAngleDegreesToRadians
 * Converts degrees to radians
 *
 * @example
 * convertAngleDegreesToRadians(180) // ==> 3.141592653589793
 *
 * @param {number} degrees
 */
export const convertAngleDegreesToRadians = (degrees: number): number => {
  return degrees * PI / 180
}

/**
 * @function getDistanceBetweenTwoPoints
 * Get the distance between two points' coords (on a Cartesian plane px system), and then rounds it
 *
 * @example
 * getDistanceBetweenTwoPoints(1, 1, 5, 5, 4) // ==> 5.6569
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} [decimals] Default defaultDecimalDigits
 * @return {number}
 */
export const getDistanceBetweenTwoPoints = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  decimals: number = defaultDecimalDigits,
): number => {
  return roundNumber(MATH.sqrt(MATH.pow(x2 - x1, 2) + MATH.pow(y2 - y1, 2)), decimals)
}

/**
 * @function getDistanceBetweenThreePoints
 * Get the distance between three points' coords (on a Cartesian plane px system), and then rounds it
 *
 * @example
 * getDistanceBetweenThreePoints(1, 1, 5, 5, 8, 6, 4) // ==> 8.8192
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} x3
 * @param {number} y3
 * @param {number} [decimals] Defalut defaultDecimalDigits
 * @return {number}
 */
export const getDistanceBetweenThreePoints = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  decimals: number = defaultDecimalDigits,
): number => {
  const firstDistance = getDistanceBetweenTwoPoints(x1, y1, x2, y2, decimals) || 0
  const secondDistance = getDistanceBetweenTwoPoints(x2, y2, x3, y3, decimals) || 0
  return roundNumber(firstDistance + secondDistance, decimals)
}

/**
 * @function distanceBetweenTwoPointsGreaterThan
 * Tells if the distance between two points is greater than a certain amount (on a Cartesian plane px system)
 *
 * @example
 * distanceBetweenTwoPointsGreaterThan(1, 1, 5, 5, 5) // ==> true because distance between [1, 1] and [5, 5] is 5.6569
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

/**
 * @function getAngleDegreesBetweenTwoPoints
 * Get the angle (in degree) of the line passing through two points (on a Cartesian plane px system)
 *
 * @example
 * getAngleDegreesBetweenTwoPoints(1, 1, 2, 2) // ==> 45
 * @example
 * getAngleDegreesBetweenTwoPoints(1, 1, 3, -1) // ==> 315
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

/**
 * @function getAngleRadiansBetweenTwoPoints
 * Get the angle (in radians) of the line passing through two points (on a Cartesian plane px system)
 *
 * @example
 * getAngleRadiansBetweenTwoPoints(1, 1, 2, 2) // ==> 0.7853981633974483
 * @example
 * getAngleRadiansBetweenTwoPoints(1, 1, 3, -1) // ==> 5.497787143782138
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

/**
 * @function rotateCoords
 * Rotate a point's coords by a specific radians angle (on a Cartesian plane px system)
 *
 * @example
 * rotateCoords(1, 1, Math.PI) // ==> [ -1, -1 ]
 * @example
 * rotateCoords(1, 1, Math.PI / 2) // ==> [ 1, -1 ]
 *
 * @param {number} x
 * @param {number} y
 * @param {number} angleRadians
 * @param {number} [decimals] Default defaultDecimalDigits
 * @return {Array<number>} Array with [x, y] rotated coords
 */
export const rotateCoords = (x: number, y: number, angleRadians: number, decimals: number = defaultDecimalDigits): Array<number> => {
  return [
    roundNumber(x * MATH.cos(angleRadians) + y * MATH.sin(angleRadians), decimals),
    roundNumber(-x * MATH.sin(angleRadians) + y * MATH.cos(angleRadians), decimals),
  ]
}

/**
 * @function translateCoords
 * Translate a point's coords by a specific amount (on a Cartesian plane px system)
 *
 * @example
 * translateCoords(1, 1, 3, -4) // ==> [ 4, -3]
 *
 * @param {number} x
 * @param {number} y
 * @param {number} dx
 * @param {number} dy
 * @return {Array<number>} Array with [x, y] translated coords
 */
export const translateCoords = (x: number, y: number, dx: number, dy: number): Array<number> => {
  return [
    x + dx,
    y + dy,
  ]
}

/**
 * @function getMiddlePointCoords
 * Get the middle point's coords between the two given points (on a Cartesian plane px system)
 *
 * @example
 * getMiddlePointCoords(1, 1, 3, 3) // ==> [ 2, 2 ]
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} [decimals] Default defaultDecimalDigits
 * @return {Array<number>} Array with [x, y] middle point's coords
 */
export const getMiddlePointCoords = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  decimals: number = defaultDecimalDigits,
): Array<number> => {
  return [
    roundNumber((x1 + x2) / 2, decimals),
    roundNumber((y1 + y2) / 2, decimals),
  ]
}

/**
 * @function getSlopeCoefficientBetweenTwoPoints
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

/**
 * @function getLineFunctionBetweenTwoPoints
 * Get the cartesian function of the line passing through two given points (on a Cartesian plane px system)
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {(n: number) => number}
 */
export const getLineFunctionBetweenTwoPoints = (x1: number, y1: number, x2: number, y2: number): (n: number) => number => {
  return (x: number) => (((x - x1) * (y2 - y1)) / (x2 - x1)) + y1
}

/**
 * @function getPerpendicularLineFunctionPassingByPoint
 * Get the cartesian function of the perpendicular line passing through one given point (on a Cartesian plane px system)
 *
 * @param {number} slope
 * @param {number} x1
 * @param {number} y1
 * @return {(n: number) => number}
 */
export const getPerpendicularLineFunctionPassingByPoint = (slope: number, x1: number, y1: number): (n: number) => number => {
  return (x: number) => (-1 / slope) * (x - x1) + y1
}

/**
 * @function getIntersectionBetween4Points
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
 * @param {number} [decimals] Default defaultDecimalDigits
 * @return {Array<number>} Array with [x, y] coords
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
  decimals: number = defaultDecimalDigits,
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

/**
 * @function getPointProjectionOnLine
 * Get the coords of the perpendicular projection of the given point on the given live (on a Cartesian plane px system)
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} x3
 * @param {number} y3
 * @return {Array<number>} Array with [x, y] coords
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
