import { defaultDecimalDigits } from './setDefaultDecimalDigits'
import { roundNumber } from './roundNumber'


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
  return roundNumber((Math.random() * (max - min)) + min, decimals)
}
