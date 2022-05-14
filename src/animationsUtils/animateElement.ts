
export const DEFAULT_FADE_TRANSITION_DURATION = 250 // ms


/**
 * @function animateElement
 * Animates the given element with the given keyframes.
 * It needs also an animationNane; with this you will be able to check which animation is running,
 * and stop them one by one.
 *
 * @param {HTMLElementWithAnimations} element
 * @param {string} animationName
 * @param {Keyframes} keyframes
 * @param {number} duration Default = 200 ms
 * @param {Record<string, any>} otherNativeOptions
 * @param {boolean} commitResult Default = true
 * @return {Promise<boolean>}
 */
const animateElement = async(
  element: HTMLElementWithAnimations,
  animationName: string,
  keyframes: Keyframes = [],
  duration = 200,
  otherNativeOptions: Record<string, any> = {},
  commitResult = true,
): Promise<boolean>  => {
  if (
    !(element instanceof HTMLElement) ||
    typeof animationName !== 'string' ||
    animationName.length === 0 ||
    keyframes.length === 0 ||
    duration === 0
  ) {
    return false
  }

  otherNativeOptions = {
    duration,
    fill: 'both',
    ...otherNativeOptions,
  }

  return await new Promise((resolve) => {
    const animation = element.animate(keyframes, otherNativeOptions)
    element.animationsInProgress = element.animationsInProgress || {}
    element.animationsInProgress[animationName] = animation

    animation.onfinish = () => {
      element.animationsInProgress = element.animationsInProgress || {}
      delete element?.animationsInProgress[animationName]
      if (commitResult) {
        try {
          animation.commitStyles()
        } catch(e) {
          console.error(e)
        }
      }
      animation.cancel()
      resolve(true)
    }
  })
}


export default animateElement
