import elementHasAnimation from './elementHasAnimation'


/**
 * @function cancelElementAnimationIfExists
 * Cancel an animation, if it's still in progress
 *
 * @example
 * cancelElementAnimationIfExists(myDom, 'fadeIn')
 *
 * @param {HTMLElementWithAnimations} element
 * @param {string} animName
 * @returns {void}
 */
const cancelElementAnimationIfExists = (
  element: HTMLElementWithAnimations,
  animName: string
): void => {

  element.animationsInProgress = element.animationsInProgress || {}

  if (elementHasAnimation(element, animName)) {
    element.animationsInProgress[animName].onfinish = () => {}
    element.animationsInProgress[animName].cancel()
    delete element.animationsInProgress[animName]
  }
}


export default cancelElementAnimationIfExists
