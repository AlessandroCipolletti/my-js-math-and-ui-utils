import preventDefault from './preventDefault'


/**
 * @function preventAllDefault
 * Prevents and stops propagation for all pointer related events on the given HTMLElement
 *
 * @example
 * preventAllDefault(myDom)
 *
 * @param {HTMLElement} element
 * @return {void}
 */
const preventAllDefault = (element: HTMLElement): void => {
  element.addEventListener('pointerdown', preventDefault)
  element.addEventListener('pointermove', preventDefault)
  element.addEventListener('pointerup', preventDefault)
  element.addEventListener('mousedown', preventDefault)
  element.addEventListener('mousemove', preventDefault)
  element.addEventListener('mouseup', preventDefault)

  if ('ontouchstart' in window) {
    element.addEventListener('touchstart', preventDefault)
    element.addEventListener('touchmove', preventDefault)
    element.addEventListener('touchend', preventDefault)
  }
}


export default preventAllDefault
