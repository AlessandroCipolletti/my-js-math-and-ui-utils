import getRandomNumber from '../mathUtils/getRandomNumber'


/**
 * @function getRandomHexColor
 * Get a random hex css string #123456
 *
 * @example
 * getRandomHexColor() // ==> '#adc398'
 *
 * @returns {string}
 */
const getRandomHexColor = (): string => {
  const a = getRandomNumber(255, 0, 0)
  const b = getRandomNumber(255, 0, 0)
  const c = getRandomNumber(255, 0, 0)
  
  return `#${((256+a<<8|b)<<8|c).toString(16).slice(1)}`
}


export default getRandomHexColor
