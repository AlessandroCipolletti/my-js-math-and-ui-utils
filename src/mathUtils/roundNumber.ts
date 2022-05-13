import { defaultDecimalDigits } from './setDefaultDecimalDigits'


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
const roundNumber = (number: number, decimals: number = defaultDecimalDigits): number => {
  const factor = Math.pow(10, decimals)

  return Math.round(number * factor) / factor
}


export default roundNumber
