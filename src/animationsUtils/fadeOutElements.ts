import iterateFn from '../jsUtils/iterateFn'
import animateElement, { DEFAULT_FADE_TRANSITION_DURATION } from './animateElement'
import cancelElementAnimationIfExists from './cancelElementAnimationIfExists'
import elementHasAnimation from './elementHasAnimation'


/**
 * This animation needs a css class 'displayNone' ==> display: none;
 */

/**
 * @typeof FadeOutOptions
 * @prop {number} [duration]
 * @prop {number} [maxFadeIn]
 * @prop {boolean} [commitResult]
 */
interface FadeOutOptions {
  duration?: number,
  maxFadeIn?: number,
  commitResult?: boolean,
}


/**
 * @function fadeOutElements
 * Performs a fadeOut animation on one or multiple Dom elements at the same time.
 *
 * @example
 * fadeOutElements(myDom, { duration: 400 })
 * await fadeOutElements([myDom1, myDom2])
 * await fadeOutElements([myDom1, myDom2], { maxFadeIn: 0.75 })
 * fadeOutElements(myDom, { duration: 400, commitResult: false })
 *
 * @param {HTMLElementWithAnimations|Array<HTMLElementWithAnimations>} elements
 * @param {FadeOutOptions} options
 * @returns {Promise<void>}
 */
const fadeOutElements = async(
  elements: HTMLElementWithAnimations|Array<HTMLElementWithAnimations>,
  options: FadeOutOptions = {}
): Promise<void> => {

  const duration = options.duration || DEFAULT_FADE_TRANSITION_DURATION
  const maxFadeIn = options.maxFadeIn || 1
  const commitResult = options.commitResult || true

  await iterateFn(elements, _fadeOutEl, [duration, maxFadeIn, commitResult])
}


/**
 * @function _fadeOutEl
 * Local util to perform a fadeOut animation on an element
 *
 * @param {HTMLElementWithAnimations} element
 * @param {number} duration
 * @param {number} maxFadeIn
 * @param {boolean} commitResult
 * @returns {Promise<void>}
 */
export const _fadeOutEl = async(
  element: HTMLElementWithAnimations,
  duration: number,
  maxFadeIn: number,
  commitResult: boolean
): Promise<void> => {

  if (element instanceof HTMLElement) {
    cancelElementAnimationIfExists(element, 'fadeIn')

    if (!elementHasAnimation(element, 'fadeOut') && !element.classList.contains('displayNone')) {
      const keyframes = [
        { opacity: maxFadeIn, offset: 0 },
        { opacity: 0, offset: 1 },
      ]
      const options = {}

      const res = await animateElement(element, 'fadeOut', keyframes, duration, options, commitResult)

      if (res) {
        element.classList.add('displayNone')
      }
    }
  }
}


export default fadeOutElements
