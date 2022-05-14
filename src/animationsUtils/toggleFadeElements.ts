import iterateFn from '../jsUtils/iterateFn'
import { DEFAULT_FADE_TRANSITION_DURATION } from './animateElement'
import { _fadeOutEl } from './fadeOutElements'
import { _fadeInEl } from './fadeInElements'


/**
 * This animation needs a css class 'displayNone' ==> display: none;
 */

 /**
  * @typeof ToggleFadeOptions
  * @prop {number} [duration]
  * @prop {number} [maxFadeIn]
  * @prop {boolean} [commitResult]
  */
 interface ToggleFadeOptions {
   duration?: number,
   maxFadeIn?: number,
   commitResult?: boolean,
 }


/**
 * @function toggleFadeElements
 * Performs a toggle-fade animation on one or multiple Dom elements at the same time.
 *
 * @example
 * toggleFadeElements(myDom, { duration: 400 })
 * await toggleFadeElements([myDom1, myDom2])
 * await toggleFadeElements([myDom1, myDom2], { maxFadeIn: 0.75 })
 * toggleFadeElements(myDom, { duration: 400, commitResult: false })
 *
 * @param {HTMLElementWithAnimations|Array<HTMLElementWithAnimations>} elements
 * @params {ToggleFadeOptions} options
 * @return {Promise<void>}
 */
const toggleFadeElements = async(
  elements: HTMLElementWithAnimations|Array<HTMLElementWithAnimations>,
  options: ToggleFadeOptions = {},
): Promise<void> => {

  const duration = options.duration || DEFAULT_FADE_TRANSITION_DURATION
  const maxFadeIn = options.maxFadeIn || 1
  const commitResult = options.commitResult || true

  await iterateFn(elements, _toggleFadeEl, [duration, maxFadeIn, commitResult])
}


/**
 * @function _toggleFadeEl
 * Local util to perform a toggle fade animation on an element
 *
 * @param {HTMLElementWithAnimations} element
 * @param {number} duration
 * @param {number} maxFadeIn
 * @param {boolean} commitResult
 * @return {Promise<void>}
 */
const _toggleFadeEl = async(
  element: HTMLElementWithAnimations,
  duration: number,
  maxFadeIn: number,
  commitResult: boolean,
): Promise<void> => {

  if (element) {
    if (element.classList.contains('displayNone')) {
      await _fadeInEl(element, duration, maxFadeIn, commitResult)
    } else {
      await _fadeOutEl(element, duration, maxFadeIn, commitResult)
    }
  }
}


export default toggleFadeElements
