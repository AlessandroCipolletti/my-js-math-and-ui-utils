
/**
 * @function elementHasAnimation
 * Checks if the given Dom element has a certain animation in progress.
 * This allows to prevent the same animation to be played multiple times at the same time.
 *
 * @example
 * elementHasAnimation(myDom, 'fadeIn') // ==> true | false
 *
 * @param {HTMLElementWithAnimations} element
 * @param {string} animName
 * @returns {boolean}
 */
const elementHasAnimation = (
  element: HTMLElementWithAnimations,
  animName: string
): boolean => {

  if (element.animationsInProgress) {
    return !!Object.prototype.hasOwnProperty.call(element.animationsInProgress, animName)
  }

  return false
}


export default elementHasAnimation
