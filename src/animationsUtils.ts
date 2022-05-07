import { iterateFn } from './jsUtils'

const FADE_TRANSITION_DEFAULT_DURATION = 250 // ms

/**
 * A small animation api to uniform things like fadeIn / fadeOut animations.
 * It needs a css class 'displayNone' ==> display: none;
 */

/**
 * Array of keyframe key-value objects
 * @typedef {Array<Record<string, any>>} Keyframes
 */
type Keyframes = Array<Record<string, any>>

/**
 * A function that returns an array of keyframes for one animation
 * @typedef {(...args: Array<any>) => Keyframes} OneAnimationKeyframes
 */
type OneAnimationKeyframes = (...args: Array<any>) => Keyframes

/**
 * Object like { animationName: functionToKeyframes }
 * @typedef {Record<string, OneAnimationKeyframes>} KeyframesAnimations
 */
type KeyframesAnimations = Record<string, OneAnimationKeyframes>

/**
 * @typeof AnimationsOptions
 * @prop {number} [duration]
 * @prop {number} [maxFadeIn]
 * @prop {boolean} [commitResult]
 */
interface AnimationsOptions {
  duration?: number,
  maxFadeIn?: number,
  commitResult?: boolean
}

/**
 * Keyframes for some default animations: fadeIn and fadeOut
 */
const animationsKeyframes: KeyframesAnimations = {
  fadeIn: (maxFadeIn = 1) => ([
    { opacity: 0, offset: 0 },
    { opacity: maxFadeIn, offset: 1 },
  ]),
  fadeOut: (maxFadeIn = 1) => ([
    { opacity: maxFadeIn, offset: 0 },
    { opacity: 0, offset: 1 },
  ]),
}

/**
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
export const animateElement = async(
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

/**
 * Checks if the given Dom element has a certain animation in progress.
 * This allows to prevent the same animation to be played multiple times at the same time.
 *
 * @param {HTMLElementWithAnimations} element
 * @param {string} animName
 * @return {boolean}
 */
const elementHasAnimation = (
  element: HTMLElementWithAnimations,
  animName: string,
): boolean => {
  if (element.animationsInProgress) {
    return !!Object.prototype.hasOwnProperty.call(element.animationsInProgress, animName)
  }
  return false
}

/**
 * Cancel an animation, if it's still in progress
 *
 * @param {HTMLElementWithAnimations} element
 * @param {string} animName
 * @return {void}
 */
export const cancelElementAnimationIfExists = (
  element: HTMLElementWithAnimations,
  animName: string,
): void => {
  element.animationsInProgress = element.animationsInProgress || {}
  if (elementHasAnimation(element, animName)) {
    element.animationsInProgress[animName].onfinish = () => {}
    element.animationsInProgress[animName].cancel()
    delete element.animationsInProgress[animName]
  }
}

/**
 * Local util to perform a fadeId animation on an element
 *
 * @param {HTMLElementWithAnimations} element
 * @param {number} duration
 * @param {number} maxFadeIn
 * @param {boolean} commitResult
 * @return {Promise<void>}
 */
const _fadeInEl = async(
  element: HTMLElementWithAnimations,
  duration: number,
  maxFadeIn: number,
  commitResult: boolean,
): Promise<void> => {
  if (element instanceof HTMLElement) {
    cancelElementAnimationIfExists(element, 'fadeOut')
    if (!elementHasAnimation(element, 'fadeIn') && element.classList.contains('displayNone')) {
      element.classList.remove('displayNone')
      const keyrames = animationsKeyframes.fadeIn(maxFadeIn)
      await animateElement(element, 'fadeIn', keyrames, duration, {}, commitResult)
    }
  }
}

/**
 * Local util to perform a fadeOut animation on an element
 *
 * @param {HTMLElementWithAnimations} element
 * @param {number} duration
 * @param {number} maxFadeIn
 * @param {boolean} commitResult
 * @return {Promise<void>}
 */
const _fadeOutEl = async(
  element: HTMLElementWithAnimations,
  duration: number,
  maxFadeIn: number,
  commitResult: boolean,
): Promise<void> => {
  if (element instanceof HTMLElement) {
    cancelElementAnimationIfExists(element, 'fadeIn')
    if (!elementHasAnimation(element, 'fadeOut') && !element.classList.contains('displayNone')) {
      const keyframes = animationsKeyframes.fadeOut(maxFadeIn)
      const res = await animateElement(element, 'fadeOut', keyframes, duration, {}, commitResult)
      if (res) {
        element.classList.add('displayNone')
      }
    }
  }
}

/**
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

/**
 * Performs a fadeIn animation on one or multiple Dom elements at the same time.
 *
 * @param {HTMLElementWithAnimations|Array<HTMLElementWithAnimations>} elements
 * @params {AnimationsOptions} options
 * @return {void}
 */
export const fadeInElements = async(
  elements: HTMLElementWithAnimations|Array<HTMLElementWithAnimations>,
  options: AnimationsOptions = {},
): Promise<void> => {
  const duration = options.duration || FADE_TRANSITION_DEFAULT_DURATION
  const maxFadeIn = options.maxFadeIn || 1
  const commitResult = options.commitResult || true

  await iterateFn(elements, _fadeInEl, [duration, maxFadeIn, commitResult])
}

/**
 * Performs a fadeOut animation on one or multiple Dom elements at the same time.
 *
 * @param {HTMLElementWithAnimations|Array<HTMLElementWithAnimations>} elements
 * @params {AnimationsOptions} options
 * @return {void}
 */
export const fadeOutElements = async(
  elements: HTMLElementWithAnimations|Array<HTMLElementWithAnimations>,
  options: AnimationsOptions = {},
): Promise<void> => {
  const duration = options.duration || FADE_TRANSITION_DEFAULT_DURATION
  const maxFadeIn = options.maxFadeIn || 1
  const commitResult = options.commitResult || true

  await iterateFn(elements, _fadeOutEl, [duration, maxFadeIn, commitResult])
}

/**
 * Performs a toggle-fade animation on one or multiple Dom elements at the same time.
 *
 * @param {HTMLElementWithAnimations|Array<HTMLElementWithAnimations>} elements
 * @params {AnimationsOptions} options
 * @return {void}
 */
export const toggleFadeElements = async(
  elements: HTMLElementWithAnimations|Array<HTMLElementWithAnimations>,
  options: AnimationsOptions = {},
): Promise<void> => {
  const duration = options.duration || FADE_TRANSITION_DEFAULT_DURATION
  const maxFadeIn = options.maxFadeIn || 1
  const commitResult = options.commitResult || true

  await iterateFn(elements, _toggleFadeEl, [duration, maxFadeIn, commitResult])
}

/**
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
  element.classList.add('displayNone')
  animateElement(element, 'addIn', [
    { width: '0px', height: '0px', marginTop: '0px', offset: 0 },
  ], duration, {
    easing: 'ease-in-out',
  }, commitResult)
  await fadeInElements(element, { duration, maxFadeIn, commitResult })
  cancelElementAnimationIfExists(element, 'addIn')
}

/**
* Local util to perform a removeOut animation on an element
*
* @param {HTMLElementWithAnimations} element
* @param {number} duration
* @param {number} maxFadeIn
* @param {boolean} commitResult
* @return {Promise<void>}
 */
export const _removeOutEl = async(
  element: HTMLElementWithAnimations,
  duration: number,
  maxFadeIn: number,
  commitResult: boolean,
): Promise<void> => {
  animateElement(element, 'removeOut', [
    { width: '0px', height: '0px', marginTop: '0px', offset: 1 },
  ], duration, {
    easing: 'ease-in-out',
  }, commitResult)
  await fadeOutElements(element, { duration, maxFadeIn, commitResult })
  cancelElementAnimationIfExists(element, 'removeOut')
  element.remove()
}

/**
 * Performs a addIn animation on one or multiple Dom elements at the same time.
 *
 * @param {HTMLElementWithAnimations|Array<HTMLElementWithAnimations>} elements
 * @params {AnimationsOptions} options
 * @return {void}
 */
export const addInElements = async(
  elements: HTMLElementWithAnimations|Array<HTMLElementWithAnimations>,
  options: AnimationsOptions = {},
): Promise<void> => {
  const duration = options.duration || FADE_TRANSITION_DEFAULT_DURATION
  const maxFadeIn = options.maxFadeIn || 1
  const commitResult = options.commitResult || true

  await iterateFn(elements, _addInEl, [duration, maxFadeIn, commitResult])
}

/**
 * Performs a removeOut animation on one or multiple Dom elements at the same time.
 *
 * @param {HTMLElementWithAnimations|Array<HTMLElementWithAnimations>} elements
 * @params {AnimationsOptions} options
 * @return {void}
 */
export const removeOutElements = async(
  elements: HTMLElementWithAnimations|Array<HTMLElementWithAnimations>,
  options: AnimationsOptions = {},
): Promise<void> => {
  const duration = options.duration || FADE_TRANSITION_DEFAULT_DURATION
  const maxFadeIn = options.maxFadeIn || 1
  const commitResult = options.commitResult || true

  await iterateFn(elements, _removeOutEl, [duration, maxFadeIn, commitResult])
}
