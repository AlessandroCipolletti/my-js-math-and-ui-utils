import { defaultDecimalDigits } from './setDefaultDecimalDigits'
import roundNumber from './roundNumber'


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
const getValueOfPercentage = (percentage: number, total: number, decimals: number = defaultDecimalDigits): number => {
  return roundNumber(percentage * total / 100, decimals)
}


export default getValueOfPercentage
