import getRandomNumber from '../mathUtils/getRandomNumber'


/**
 * @function getRandomRgbaColor
 * Get a random rgba() css string color.
 * With a specific alpha, a default alpha, or without alpha.
 *
 * @example
 * getRandomRgbaColor(false) // ==> 'rgba(12, 43, 146, 1)'
 * getRandomRgbaColor(true) // ==> 'rgba(212, 143, 246, 0.7)'
 * getRandomRgbaColor(0.356) // ==> 'rgba(22, 13, 26, 0.356)'
 *
 * @param {boolean|number} [alpha = false]
 * @return {string}
 */
const getRandomRgbaColor = (alpha: boolean|number = false): string => {
  if (alpha === false) alpha = 1
  else if (alpha === true) alpha = 0.7
  else if (typeof(alpha) !== 'number') alpha = 1

  return `rgba(${getRandomNumber(255, 0, 0)}, ${getRandomNumber(255, 0, 0)}, ${getRandomNumber(255, 0, 0)}, ${alpha})`
}


export default getRandomRgbaColor
