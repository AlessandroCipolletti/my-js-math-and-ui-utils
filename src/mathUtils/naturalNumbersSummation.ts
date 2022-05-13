import { defaultDecimalDigits } from './setDefaultDecimalDigits'
import { roundNumber } from './roundNumber'


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
  return roundNumber((n * (n + 1)) / 2, defaultDecimalDigits)
}
