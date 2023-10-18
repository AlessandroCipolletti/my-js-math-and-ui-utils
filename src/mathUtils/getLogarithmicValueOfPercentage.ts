import { defaultDecimalDigits } from './setDefaultDecimalDigits'
import roundNumber from './roundNumber'


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
 * @returns {number}
 */
const getLogarithmicValueOfPercentage = (
  percentage: number,
  minValue: number,
  maxValue: number,
  decimals: number = defaultDecimalDigits
): number => {

  if (percentage < 0 || minValue <= 0 || maxValue <= 0) {
    return NaN
  }

  minValue = Math.log(minValue)
  maxValue = Math.log(maxValue)
  const scale = ((maxValue - minValue) / 100)

  return roundNumber(Math.exp(minValue + (scale * percentage)), decimals)
}


export default getLogarithmicValueOfPercentage
