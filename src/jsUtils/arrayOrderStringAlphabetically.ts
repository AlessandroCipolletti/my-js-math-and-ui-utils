
/**
 * @function arrayOrderStringAlphabetically
 * Utils to sort an array of string alphabetically
 *
 * @example
 * const myArray = ['hello', 'world', 'bonjour']
 * myArray.sort(arrayOrderStringAlphabetically) // ==> ['bonjour', 'hello', 'world']
 *
 * @param {string} a
 * @param {string} b
 * @returns {number}
 */
const arrayOrderStringAlphabetically = (a: string, b: string): number => {
  if (a > b) return +1
  if (a < b) return -1
  return 0
}


export default arrayOrderStringAlphabetically
