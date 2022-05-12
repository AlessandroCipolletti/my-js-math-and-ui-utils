import { iterateFn } from './jsUtils'

const DEFAULT_FADE_TRANSITION_DURATION = 250 // ms

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
  commitResult?: boolean,
  animationScale?: number,
  rotationDegrees?: number,
}

/**
 * @const animationsKeyframes
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
  addIn: () => ([
    { width: '0px', height: '0px', marginTop: '0px', offset: 0 },
  ]),
  removeOut: () => ([
    { width: '0px', height: '0px', marginTop: '0px', offset: 1 },
  ]),
  bouncing: (scale = 1, rotationDegrees = 5) => ([
    { transform: `translate3d(-50%, -50%, 0px) scale(${scale}) rotate(+${rotationDegrees}deg)`, offset: 0 },
    { transform: `translate3d(-50%, -50%, 0px) scale(${scale}) rotate(-${rotationDegrees}deg)`, offset: 1 },
  ]),
  moveTo: (fromX: number, fromY: number, toX: number, toY: number, fromScale = 1, toScale = 1) => ([
    { top: `${fromY}px`, left: `${fromX}px`, transform: `translate3d(-50%, -50%, 0px) scale(${fromScale})`, offset: 0 },
    { top: `${toY}px`, left: `${toX}px`, transform: `translate3d(-50%, -50%, 0px) scale(${toScale})`, offset: 1 }
  ]),
}

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
 * @function elementHasAnimation
 * Checks if the given Dom element has a certain animation in progress.
 * This allows to prevent the same animation to be played multiple times at the same time.
 *
 * @example
 * elementHasAnimation(myDom, 'fadeIn') // ==> true | false
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
 * @function cancelElementAnimationIfExists
 * Cancel an animation, if it's still in progress
 *
 * @example
 * cancelElementAnimationIfExists(myDom, 'fadeIn')
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
 * @function _fadeInEl
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
      const options = {}
      await animateElement(element, 'fadeIn', keyrames, duration, options, commitResult)
    }
  }
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
 * @params {AnimationsOptions} options
 * @return {Promise<void>}
 */
export const fadeInElements = async(
  elements: HTMLElementWithAnimations|Array<HTMLElementWithAnimations>,
  options: AnimationsOptions = {},
): Promise<void> => {
  const duration = options.duration || DEFAULT_FADE_TRANSITION_DURATION
  const maxFadeIn = options.maxFadeIn || 1
  const commitResult = options.commitResult || true

  await iterateFn(elements, _fadeInEl, [duration, maxFadeIn, commitResult])
}


/**
 * @function _fadeOutEl
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
      const options = {}
      const res = await animateElement(element, 'fadeOut', keyframes, duration, options, commitResult)
      if (res) {
        element.classList.add('displayNone')
      }
    }
  }
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
 * @params {AnimationsOptions} options
 * @return {Promise<void>}
 */
export const fadeOutElements = async(
  elements: HTMLElementWithAnimations|Array<HTMLElementWithAnimations>,
  options: AnimationsOptions = {},
): Promise<void> => {
  const duration = options.duration || DEFAULT_FADE_TRANSITION_DURATION
  const maxFadeIn = options.maxFadeIn || 1
  const commitResult = options.commitResult || true

  await iterateFn(elements, _fadeOutEl, [duration, maxFadeIn, commitResult])
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
 * @params {AnimationsOptions} options
 * @return {Promise<void>}
 */
export const toggleFadeElements = async(
  elements: HTMLElementWithAnimations|Array<HTMLElementWithAnimations>,
  options: AnimationsOptions = {},
): Promise<void> => {
  const duration = options.duration || DEFAULT_FADE_TRANSITION_DURATION
  const maxFadeIn = options.maxFadeIn || 1
  const commitResult = options.commitResult || true

  await iterateFn(elements, _toggleFadeEl, [duration, maxFadeIn, commitResult])
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
      const keyframes = animationsKeyframes.addIn()
      const options = { easing: 'ease-in-out' }
      animateElement(element, 'addIn', keyframes, duration, options, commitResult)
      await fadeInElements(element, { duration, maxFadeIn, commitResult })
      cancelElementAnimationIfExists(element, 'addIn')
    }
  }
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
 * @params {AnimationsOptions} options
 * @return {void}
 */
export const addInElements = async(
  elements: HTMLElementWithAnimations|Array<HTMLElementWithAnimations>,
  options: AnimationsOptions = {},
): Promise<void> => {
  const duration = options.duration || DEFAULT_FADE_TRANSITION_DURATION
  const maxFadeIn = options.maxFadeIn || 1
  const commitResult = options.commitResult || true

  await iterateFn(elements, _addInEl, [duration, maxFadeIn, commitResult])
}


/**
 * @function _removeOutEl
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
  if (element instanceof HTMLElement) {
    cancelElementAnimationIfExists(element, 'addIn')
    if (!elementHasAnimation(element, 'removeOut')) {
      const keyframes = animationsKeyframes.removeOut()
      const options = { easing: 'ease-in-out' }
      animateElement(element, 'removeOut', keyframes, duration, options, commitResult)
      await fadeOutElements(element, { duration, maxFadeIn, commitResult })
      cancelElementAnimationIfExists(element, 'removeOut')
      element.remove()
    }
  }
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
 * @params {AnimationsOptions} options
 * @return {Promise<void>}
 */
export const removeOutElements = async(
  elements: HTMLElementWithAnimations|Array<HTMLElementWithAnimations>,
  options: AnimationsOptions = {},
): Promise<void> => {
  const duration = options.duration || DEFAULT_FADE_TRANSITION_DURATION
  const maxFadeIn = options.maxFadeIn || 1
  const commitResult = options.commitResult || true

  await iterateFn(elements, _removeOutEl, [duration, maxFadeIn, commitResult])
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
      const keyframes = animationsKeyframes.bouncing(animationScale, rotationDegrees)
      const options = {
        iterations: Infinity,
        direction: 'alternate',
        easing: 'ease-in-out',
      }
      await animateElement(element, 'bouncing', keyframes, duration, options)
    }
  }
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
 * @params {AnimationsOptions} options
 * @return {Promise<void>}
 */
export const bouncingElements = async(
  elements: HTMLElementWithAnimations|Array<HTMLElementWithAnimations>,
  options: AnimationsOptions = {},
): Promise<void> => {
  const duration = options.duration || 200
  const animationScale = options.animationScale || 1
  const rotationDegrees = options.rotationDegrees || 5

  await iterateFn(elements, _bouncingEl, [duration, animationScale, rotationDegrees])
}


/**
 * @function _moveToEl
 * Local util to perform a addIn animation on an element
 *
 * @param {HTMLElementWithAnimations} element
 * @param {number} duration
 * @param {number} fromX
 * @param {number} fromY
 * @param {number} toX
 * @param {number} toY
 * @param {number} fromScale
 * @return {Promise<void>}
 */
const _moveToEl = async(
  element: HTMLElementWithAnimations,
  duration: number,
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  fromScale: number,
): Promise<void> => {
  if (element instanceof HTMLElement) {
    if (!elementHasAnimation(element, 'moveTo')) {
      const keyframes = animationsKeyframes.moveTo(fromX, fromY, toX, toY, fromScale)
      const options = { easing: 'ease-in-out' }
      await animateElement(element, 'moveTo', keyframes, duration, options)
    }
  }
}

/**
 * @function moveToElements
 * Performs a bouncing animation on one or multiple Dom elements at the same time.
 *
 * @example
 * moveToElements(myDom, 500, 800, 800, 400, 400, 1.5)
 *
 * @param {HTMLElementWithAnimations|Array<HTMLElementWithAnimations>} elements
 * @param {number} duration
 * @param {number} fromX
 * @param {number} fromY
 * @param {number} toX
 * @param {number} toY
 * @param {number} [fromScale = 1]
 * @return {Promise<void>}
 */
export const moveToElements = async(
  elements: HTMLElementWithAnimations|Array<HTMLElementWithAnimations>,
  duration: number,
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  fromScale = 1,
): Promise<void> => {
  await iterateFn(elements, _moveToEl, [duration, fromX, fromY, toX, toY, fromScale])
}
