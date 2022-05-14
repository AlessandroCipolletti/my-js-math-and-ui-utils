import iterateFn from '../jsUtils/iterateFn'
import animateElement, { DEFAULT_FADE_TRANSITION_DURATION } from './animateElement'
import cancelElementAnimationIfExists from './cancelElementAnimationIfExists'
import elementHasAnimation from './elementHasAnimation'
import fadeOutElements from './fadeOutElements'


/**
 * This animation needs a css class 'displayNone' ==> display: none;
 */

/**
 * @typeof RemoveOutOptions
 * @prop {number} [duration]
 * @prop {number} [maxFadeIn]
 * @prop {boolean} [commitResult]
 */
interface RemoveOutOptions {
  duration?: number,
  maxFadeIn?: number,
  commitResult?: boolean,
}


/**
 * @function removeOutElements
 * Performs a removeOut animation on one or multiple Dom elements at the same time.
 *
 * @example
 * removeOutElements(myDom, { duration: 400 })
 * await removeOutElements([myDom1, myDom2])
 * await removeOutElements([myDom1, myDom2], { maxFadeIn: 0.75 })
 * removeOutElements(myDom, { duration: 400, commitResult: false })
 *
 * @param {HTMLElementWithAnimations|Array<HTMLElementWithAnimations>} elements
 * @params {RemoveOutOptions} options
 * @returns {Promise<void>}
 */
const removeOutElements = async(
  elements: HTMLElementWithAnimations|Array<HTMLElementWithAnimations>,
  options: RemoveOutOptions = {},
): Promise<void> => {

  const duration = options.duration || DEFAULT_FADE_TRANSITION_DURATION
  const maxFadeIn = options.maxFadeIn || 1
  const commitResult = options.commitResult || true

  await iterateFn(elements, _removeOutEl, [duration, maxFadeIn, commitResult])
}


/**
 * @function _removeOutEl
 * Local util to perform a removeOut animation on an element
 *
 * @param {HTMLElementWithAnimations} element
 * @param {number} duration
 * @param {number} maxFadeIn
 * @param {boolean} commitResult
 * @returns {Promise<void>}
 */
export const _removeOutEl = async(
  element: HTMLElementWithAnimations,
  duration: number,
  maxFadeIn: number,
  commitResult: boolean,
): Promise<void> => {

  if (element instanceof HTMLElement) {
    cancelElementAnimationIfExists(element, 'addIn')

    if (!elementHasAnimation(element, 'removeOut')) {
      const keyframes = [
        { width: '0px', height: '0px', marginTop: '0px', offset: 1 },
      ]
      const options = { easing: 'ease-in-out' }

      animateElement(element, 'removeOut', keyframes, duration, options, commitResult)
      await fadeOutElements(element, { duration, maxFadeIn, commitResult })

      cancelElementAnimationIfExists(element, 'removeOut')
      element.remove()
    }
  }
}


export default removeOutElements
