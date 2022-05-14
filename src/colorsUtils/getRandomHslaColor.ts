import getRandomNumber from '../mathUtils/getRandomNumber'


/**
 * @function getRandomHslaColor
 * Get a random hsla() css string
 *
 * @example
 * getRandomHslaColor() // ==> 'hsla(123, 23, 98, 1)'
 * getRandomHslaColor(0.34) // ==> 'hsla(349, 67, 9, 0.34)'
 * getRandomHslaColor(0.34, 50) // ==> 'hsla(111, 50, 28, 0.34)'
 * getRandomHslaColor(0.34, 50, 40) // ==> 'hsla(87, 50, 40, 0.34)'
 *
 * @param {boolean|number} [alpha = false]
 * @param {boolean|number} [defaultSat = true]
 * @param {boolean|number} [defaultLight = true]
 * @returns {string}
 */
const getRandomHslaColor = (
  alpha: boolean|number = false,
  defaultSat = true,
  defaultLight = true,
): string => {
  
  if (alpha === false) alpha = 1
  else if (alpha === true) alpha = 0.7
  else if (typeof(alpha) !== 'number') alpha = 1

  const hue = getRandomNumber(360, 0, 0)
  const sat = defaultSat ? 100 : getRandomNumber(100, 0, 0)
  const light = defaultLight ? 50 : getRandomNumber(100, 0, 0)

  return `hsla(${hue}, ${sat}%, ${light}%, ${alpha})`
}


export default getRandomHslaColor
