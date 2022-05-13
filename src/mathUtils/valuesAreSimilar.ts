
/**
 * @function valuesAreSimilar
 * Checks if all elements in the array differ from each other by less than the given tolerance
 *
 * @example
 * valuesAreSimilar([10.2, 10.3, 10.5], 0.5) // ==> true
 * @example
 * valuesAreSimilar([10, 13, 12], 1) // ==> false
 *
 * @param {Array<number>} values
 * @param {number} [tolerance] Default = 0
 * @return {boolean}
 */
export const valuesAreSimilar = (values: Array<number>, tolerance = 0): boolean => {
  const max = Math.max(...values)
  const min = Math.min(...values)
  return Math.abs(max - min) <= tolerance
}
