
/**
 * @function delay
 * Utils to stop js execution inline with async/await syntax
 *
 * @example
 * await delay(500)
 *
 * @param {number} milliseconds
 * @returns {Promise<void>}
 */
const delay = (milliseconds: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}


export default delay
