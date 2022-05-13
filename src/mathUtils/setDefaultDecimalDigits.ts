/**
 * Specify how many decimal digits you want in all results
 * @type {number}
 */
export let defaultDecimalDigits = 4

/**
 * @function setDefaultDecimalDigits
 * Set a different default decimal digit amount
 *
 * @param {number} digits
 * @return {void}
 */
export const setDefaultDecimalDigits = (digits: number):  void => {
  defaultDecimalDigits = digits
}
