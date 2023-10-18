import { defaultDecimalDigits } from './setDefaultDecimalDigits'
import roundNumber from './roundNumber'


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
 * @returns {number}
 */
const getLogarithmicPercentageOfValue = (
  value: number,
  minValue: number,
  maxValue: number,
  decimals: number = defaultDecimalDigits
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


export default getLogarithmicPercentageOfValue
