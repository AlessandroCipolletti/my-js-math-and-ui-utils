import preventDefault from './preventDefault'


/**
 * @function preventDefaultTouchOnEls
 * Prevents default behavior and stop propagation for all "pointer start" on multiple elements at the same time.
 * 'pointerdown', 'mousedown', and (if supported) 'touchstart'
 *
 * @example
 * preventDefaultTouchOnEls([myDom1, myDom2])
 *
 * @param {Array<HTMLElement>} els
 * @returns {void}
 */
const preventDefaultTouchOnEls = (...els: Array<HTMLElement>): void => {
  els = els.filter(e => e instanceof HTMLElement)

  els.forEach(e => e.addEventListener('pointerdown', preventDefault))
  els.forEach(e => e.addEventListener('mousedown', preventDefault))
  if ('ontouchstart' in window) {
    els.forEach(e => e.addEventListener('touchstart', preventDefault))
  }
}


export default preventDefaultTouchOnEls
