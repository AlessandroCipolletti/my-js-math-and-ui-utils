import iterateFn from '../jsUtils/iterateFn'
import animateElement from './animateElement'
import elementHasAnimation from './elementHasAnimation'


/**
 * @function moveToElements
 * Performs a bouncing animation on one or multiple Dom elements at the same time.
 *
 * @example
 * moveToElements(myDom, 500, 800, 800, 400, 400, 1.5)
 *
 * @param {HTMLElementWithAnimations|Array<HTMLElementWithAnimations>} elements
 * @param {number} duration
 * @param {number} fromX
 * @param {number} fromY
 * @param {number} toX
 * @param {number} toY
 * @param {number} [fromScale = 1]
 * @returns {Promise<void>}
 */
const moveToElements = async(
  elements: HTMLElementWithAnimations|Array<HTMLElementWithAnimations>,
  duration: number,
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  fromScale = 1,
): Promise<void> => {
  await iterateFn(elements, _moveToEl, [duration, fromX, fromY, toX, toY, fromScale])
}


/**
 * @function _moveToEl
 * Local util to perform a addIn animation on an element
 *
 * @param {HTMLElementWithAnimations} element
 * @param {number} duration
 * @param {number} fromX
 * @param {number} fromY
 * @param {number} toX
 * @param {number} toY
 * @param {number} fromScale
 * @returns {Promise<void>}
 */
const _moveToEl = async(
  element: HTMLElementWithAnimations,
  duration: number,
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  fromScale: number,
): Promise<void> => {

  if (element instanceof HTMLElement) {
    if (!elementHasAnimation(element, 'moveTo')) {
      const keyframes = [
        { top: `${fromY}px`, left: `${fromX}px`, transform: `translate3d(-50%, -50%, 0px) scale(${fromScale})`, offset: 0 },
        { top: `${toY}px`, left: `${toX}px`, transform: `translate3d(-50%, -50%, 0px) scale(${1})`, offset: 1 }
      ]
      const options = { easing: 'ease-in-out' }

      await animateElement(element, 'moveTo', keyframes, duration, options)
    }
  }
}


export default moveToElements
