
/**
 * @function arrayOrderStringDown
 * Utils to sort an array of string counter alphabetically
 *
 * @example
 * const myArray = ['hello', 'world', 'bonjour']
 * myArray.sort(arrayOrderStringDown) // ==> ['world', 'hello', 'bonjour']
 *
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
const arrayOrderStringDown = (a: string, b: string): number => {
  if (a < b) return +1
  if (a > b) return -1
  return 0
}


export default arrayOrderStringDown
