
/**
 * @function deepCopy
 * Utils to make a deep copy of a variable
 * Json alternative to structuredClone()
 *
 * @param {any} value
 * @return {any}
 */
const deepCopy = (
  value: Record<string, any> | number | string,
): Record<string, any> | number | string => {
  
  return JSON.parse(JSON.stringify(value))
}


export default deepCopy
