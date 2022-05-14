import { defaultDecimalDigits } from './setDefaultDecimalDigits'
import roundNumber from './roundNumber'


/**
 * @function getAverage
 * Get the average of all given numbers
 *
 * @example
 * getAverage([2, 4, 10], 4) // ==> 5.3333
 *
 * @param {array} values
 * @param {number} [decimals] Default defaultDecimalDigits
 * @returns {number}
 */
const getAverage = (values: Array<number>, decimals: number = defaultDecimalDigits): number => {
  return roundNumber(values.reduce((t, v) => t + v, 0) / values.length, decimals)
}


export default getAverage
