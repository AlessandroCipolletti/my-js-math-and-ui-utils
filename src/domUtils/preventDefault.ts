
/**
 * @function preventDefault
 * Prevents default event behavior and stop event propagation
 *
 * @example
 * function onTouchStart(e) {
 *   preventDefault(e)
 * }
 *
 * @param {Event} e
 * @returns {void}
 */
const preventDefault = (e: Event): void => {
  if (e) {
    e.preventDefault()
    e.stopPropagation()
  }
}


export default preventDefault
