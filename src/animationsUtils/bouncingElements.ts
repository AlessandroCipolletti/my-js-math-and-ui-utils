import iterateFn from '../jsUtils/iterateFn'
import animateElement from './animateElement'
import elementHasAnimation from './elementHasAnimation'


/**
 * @typeof BouncingOptions
 * @prop {number} [duration]
 * @prop {number} [maxFadeIn]
 * @prop {boolean} [commitResult]
 */
interface BouncingOptions {
  duration?: number,
  animationScale?: number,
  rotationDegrees?: boolean,
}


/**
 * @function bouncingElements
 * Performs a bouncing animation on one or multiple Dom elements at the same time.
 *
 * @example
 * bouncingElements(myDom, { duration: 400 })
 * await bouncingElements([myDom1, myDom2])
 * await bouncingElements([myDom1, myDom2], { animationScale: 1.5 })
 * bouncingElements(myDom, { duration: 400, rotationDegrees: 10 })
 *
 * @param {HTMLElementWithAnimations|Array<HTMLElementWithAnimations>} elements
 * @params {BouncingOptions} options
 * @return {Promise<void>}
 */
const bouncingElements = async(
  elements: HTMLElementWithAnimations|Array<HTMLElementWithAnimations>,
  options: BouncingOptions = {},
): Promise<void> => {

  const duration = options.duration || 200
  const animationScale = options.animationScale || 1
  const rotationDegrees = options.rotationDegrees || 5

  await iterateFn(elements, _bouncingEl, [duration, animationScale, rotationDegrees])
}


/**
 * @function _bouncingEl
 * Local util to perform a addIn animation on an element
 *
 * @param {HTMLElementWithAnimations} element
 * @param {number} duration
 * @param {number} animationScale
 * @param {number} rotationDegrees
 * @return {Promise<void>}
 */
const _bouncingEl = async(
  element: HTMLElementWithAnimations,
  duration: number,
  animationScale: number,
  rotationDegrees: number,
): Promise<void> => {

  if (element instanceof HTMLElement) {
    if (!elementHasAnimation(element, 'bouncing')) {
      const keyframes = [
        { transform: `translate3d(-50%, -50%, 0px) scale(${animationScale}) rotate(+${rotationDegrees}deg)`, offset: 0 },
        { transform: `translate3d(-50%, -50%, 0px) scale(${animationScale}) rotate(-${rotationDegrees}deg)`, offset: 1 },
      ]
      const options = {
        iterations: Infinity,
        direction: 'alternate',
        easing: 'ease-in-out',
      }

      await animateElement(element, 'bouncing', keyframes, duration, options)
    }
  }
}


export default bouncingElements
