import iterateFn from '../jsUtils/iterateFn'
import animateElement, { DEFAULT_FADE_TRANSITION_DURATION } from './animateElement'
import cancelElementAnimationIfExists from './cancelElementAnimationIfExists'
import elementHasAnimation from './elementHasAnimation'
import fadeInElements from './fadeInElements'


/**
 * This animation needs a css class 'displayNone' ==> display: none;
 */

/**
 * @typeof AddInOptions
 * @prop {number} [duration]
 * @prop {number} [maxFadeIn]
 * @prop {boolean} [commitResult]
 */
interface AddInOptions {
  duration?: number,
  maxFadeIn?: number,
  commitResult?: boolean,
}


/**
 * @function addInElements
 * Performs a addIn animation on one or multiple Dom elements at the same time.
 *
 * @example
 * addInElements(myDom, { duration: 400 })
 * await addInElements([myDom1, myDom2])
 * await addInElements([myDom1, myDom2], { maxFadeIn: 0.75 })
 * addInElements(myDom, { duration: 400, commitResult: false })
 *
 * @param {HTMLElementWithAnimations|Array<HTMLElementWithAnimations>} elements
 * @params {AddInOptions} options
 * @return {void}
 */
const addInElements = async(
  elements: HTMLElementWithAnimations|Array<HTMLElementWithAnimations>,
  options: AddInOptions = {},
): Promise<void> => {

  const duration = options.duration || DEFAULT_FADE_TRANSITION_DURATION
  const maxFadeIn = options.maxFadeIn || 1
  const commitResult = options.commitResult || true

  await iterateFn(elements, _addInEl, [duration, maxFadeIn, commitResult])
}


/**
 * @function _addInEl
 * Local util to perform a addIn animation on an element
 *
 * @param {HTMLElementWithAnimations} element
 * @param {number} duration
 * @param {number} maxFadeIn
 * @param {boolean} commitResult
 * @return {Promise<void>}
 */
const _addInEl = async(
  element: HTMLElementWithAnimations,
  duration: number,
  maxFadeIn: number,
  commitResult: boolean,
): Promise<void> => {

  if (element instanceof HTMLElement) {
    cancelElementAnimationIfExists(element, 'removeOut')
    if (!elementHasAnimation(element, 'addIn')) {
      element.classList.add('displayNone')
      const keyframes = [
        { width: '0px', height: '0px', marginTop: '0px', offset: 0 },
      ]
      const options = { easing: 'ease-in-out' }
      animateElement(element, 'addIn', keyframes, duration, options, commitResult)

      await fadeInElements(element, { duration, maxFadeIn, commitResult })

      cancelElementAnimationIfExists(element, 'addIn')
    }
  }
}


export default addInElements
