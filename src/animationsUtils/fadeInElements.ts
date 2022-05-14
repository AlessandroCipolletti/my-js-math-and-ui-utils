import iterateFn from '../jsUtils/iterateFn'
import animateElement, { DEFAULT_FADE_TRANSITION_DURATION } from './animateElement'
import cancelElementAnimationIfExists from './cancelElementAnimationIfExists'
import elementHasAnimation from './elementHasAnimation'


/**
 * This animation needs a css class 'displayNone' ==> display: none;
 */

/**
 * @typeof FadeInOptions
 * @prop {number} [duration]
 * @prop {number} [maxFadeIn]
 * @prop {boolean} [commitResult]
 */
interface FadeInOptions {
  duration?: number,
  maxFadeIn?: number,
  commitResult?: boolean,
}


/**
 * @function fadeInElements
 * Performs a fadeIn animation on one or multiple Dom elements at the same time.
 *
 * @example
 * fadeInElements(myDom, { duration: 400 })
 * await fadeInElements([myDom1, myDom2])
 * await fadeInElements([myDom1, myDom2], { maxFadeIn: 0.75 })
 * fadeInElements(myDom, { duration: 400, commitResult: false })
 *
 * @param {HTMLElementWithAnimations|Array<HTMLElementWithAnimations>} elements
 * @params {FadeInOptions} options
 * @return {Promise<void>}
 */
const fadeInElements = async(
  elements: HTMLElementWithAnimations|Array<HTMLElementWithAnimations>,
  options: FadeInOptions = {},
): Promise<void> => {

  const duration = options.duration || DEFAULT_FADE_TRANSITION_DURATION
  const maxFadeIn = options.maxFadeIn || 1
  const commitResult = options.commitResult || true

  await iterateFn(elements, _fadeInEl, [duration, maxFadeIn, commitResult])
}


/**
 * @function _fadeInEl
 * Local util to perform a fadeId animation on an element
 *
 * @param {HTMLElementWithAnimations} element
 * @param {number} duration
 * @param {number} maxFadeIn
 * @param {boolean} commitResult
 * @return {Promise<void>}
 */
export const _fadeInEl = async(
  element: HTMLElementWithAnimations,
  duration: number,
  maxFadeIn: number,
  commitResult: boolean,
): Promise<void> => {

  if (element instanceof HTMLElement) {
    cancelElementAnimationIfExists(element, 'fadeOut')

    if (!elementHasAnimation(element, 'fadeIn') && element.classList.contains('displayNone')) {
      element.classList.remove('displayNone')
      const keyrames = [
        { opacity: 0, offset: 0 },
        { opacity: maxFadeIn, offset: 1 },
      ]
      const options = {}

      await animateElement(element, 'fadeIn', keyrames, duration, options, commitResult)
    }
  }
}


export default fadeInElements
