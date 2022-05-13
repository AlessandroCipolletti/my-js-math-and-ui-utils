const _getGreatCommonDivisorBetweenTwoNumbers = (x: number, y: number): number => {
  x = Math.abs(x)
  y = Math.abs(y)

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
