
/**
 * @typedef MyCanvasRenderingContext2D
 * Extends a CanvasRenderingContext2D to save the last used coords
 * @prop {number} lastDrawCoordX
 * @prop {number} lastDrawCoordY
 */
declare interface MyCanvasRenderingContext2D extends CanvasRenderingContext2D {
  lastDrawCoordX: number,
  lastDrawCoordY: number,
}

/**
 * @typedef HTMLElementWithAnimations
 * Extends a HTMLElement to add animationsInProgress
 * @prop {Record<string, Animation>} animationsInProgress
 */
declare interface HTMLElementWithAnimations extends HTMLElement {
  animationsInProgress?: Record<string, Animation>,
}

/**
 * @typedef IosTouch
 * Extends a Touch to add the ios prop touchType for 'direct' vs 'stylus'
 * @prop {string} touchType
 */
declare interface IosTouch extends Touch {
  touchType: string,
}

/**
 * @typedef PointerEventWithTouchType
 * Extends a PointerEvent to add the ios prop touchType for 'direct' vs 'stylus'
 * @prop {string} touchType
 */
declare interface PointerEventWithTouchType extends PointerEvent {
  touchType: 'direct',
}

/**
 * @typedef MouseEventWithTouchType
 * Extends a MouseEvent to add the ios prop touchType for 'direct' vs 'stylus'
 * @prop {string} touchType
 */
declare interface MouseEventWithTouchType extends MouseEvent {
  touchType: 'direct',
}

/**
 * @typedef RgbaColorObject
 * @prop {number} r int [0...255]
 * @prop {number} g int [0...255]
 * @prop {number} b int [0...255]
 * @prop {number} a float [0...1]
 */
declare interface RgbaColorObject {
  r: number,
  g: number,
  b: number,
  a: number,
}

/**
 * @typedef RgbColorObject
 * @prop {number} r int [0...255]
 * @prop {number} g int [0...255]
 * @prop {number} b int [0...255]
 */
declare interface RgbColorObject {
  r: number,
  g: number,
  b: number,
}

/**
 * @typedef HslaColorObject
 * @prop {number} h int [0...360]
 * @prop {number} s int [0...100]
 * @prop {number} l int [0...100]
 * @prop {number} a float [0...1]
 */
declare interface HslaColorObject {
  h: number,
  s: number,
  l: number,
  a: number,
}

/**
 * @typeof DomRect
 * @prop {number} width
 * @prop {number} height
 * @prop {number} x
 * @prop {number} y
 * @prop {number} left
 * @prop {number} top
 * @prop {number} right
 * @prop {number} bottom
 * @prop {number} centerX
 * @prop {number} centerY
 */
declare interface DomRect {
  width: number,
  height: number,
  x: number,
  y: number,
  left: number,
  top: number,
  right: number,
  bottom: number,
  centerX: number,
  centerY: number,
}

/**
 * Any type of pointer input event
 * @typedef {MouseEvent | PointerEvent | TouchEvent} AnyPointerEvent
 */
declare type AnyPointerEvent = MouseEvent | PointerEvent | TouchEvent

/**
 * Any type of pointer / touch input variable who indentify one or more pointers / fingers
 * @typedef {MouseEvent | PointerEvent | Touch | TouchEvent | TouchList} AnyPointerEventOrArray
 */
declare type AnyPointerEventOrArray = MouseEvent | PointerEvent | Touch | TouchEvent | TouchList

/**
 * Any type of pointer / touch input variable who identify only one pointer / finger
 * @typedef {MouseEvent | PointerEvent | Touch} OnePointerEvent
 */
declare type OnePointerEvent = MouseEvent | PointerEvent | Touch

/**
 * Custom handler for touchstart/pointerdown and touchmove/pointermove events
 * @typedef {(e: TouchEvent, touch: IosTouch) => void} TouchHandler
 */
declare type TouchHandler = (
  e: AnyPointerEvent,
  touch: IosTouch | PointerEventWithTouchType | MouseEventWithTouchType,
) => void

/**
 * Custom handler for touchend event
 * @typedef {(e: TouchEvent|IosTouch) => void} TouchEndHandler
 */
declare type TouchEndHandler = (
  e: AnyPointerEvent|IosTouch,
) => void

/**
 * Custom handler for onOneFingerSingleTap event
 * @typedef {(e: TouchEvent, touche:IosTouch) => void} TapHandler
 */
declare type TapHandler = (
  e: AnyPointerEvent,
  touch: IosTouch | PointerEventWithTouchType | MouseEventWithTouchType,
) => void

/**
 * Custom handler for onOneFingerSingleTap onTwoFingersSingleTap onThreeFingersSingleTap onFourFingersSingleTap events
 * @typedef {(e: TouchEvent, touches: Array<IosTouch>) => void} TapsHandler
 */
declare type TapsHandler = (
  e: AnyPointerEvent,
  touches: Array<IosTouch | PointerEventWithTouchType | MouseEventWithTouchType>,
) => void

/**
 * Custom handler for gesturestart gesturechange gestureend events
 * @typedef {(x: number, y: number, scale: number, rotation: number) => void} GestureHandler
 */
declare type GestureHandler = (
  x: number,
  y: number,
  scale: number,
  rotation: number,
) => void

/**
 * @typeof MultiTouchHandlers
 * An object with all the touch handlers needed
 *
 * @prop {TouchHandler} onSingleTouchStart
 * @prop {TouchHandler} onSingleTouchMove
 * @prop {TouchHandler} onSingleTouchEnd
 * @prop {GestureHandler} onGestureStart
 * @prop {GestureHandler} onGestureChange
 * @prop {GestureHandler} onGestureEnd
 * @prop {TapHandler} onOneFingerLongPress
 * @prop {TapHandler} onOneFingerSingleTap
 * @prop {TapHandler} onTwoFingersSingleTap
 * @prop {TapHandler} onThreeFingersSingleTap
 * @prop {TapHandler} onFourFingersSingleTap
 */
declare interface MultiTouchHandlers {
  onSingleTouchStart?: TouchHandler,
  onSingleTouchMove?: TouchHandler,
  onSingleTouchEnd?: TouchEndHandler,
  onGestureStart?: GestureHandler,
  onGestureChange?: GestureHandler,
  onGestureEnd?: GestureHandler,
  onOneFingerLongPress?: TapHandler,
  onOneFingerSingleTap?: TapHandler,
  onTwoFingersSingleTap?: TapsHandler,
  onThreeFingersSingleTap?: TapsHandler,
  onFourFingersSingleTap?: TapsHandler,
}

/**
 * Custom handler for sliders drag callbacks
 * @typedef {(value: number, inProgress: boolean, dragged: boolean) => void} DragHandler
 */
declare type DragHandler = (
  value: number,
  inProgress: boolean,
  dragged: boolean,
) => void

/**
 * Array of keyframe key-value objects
 * @typedef {Array<Record<string, any>>} Keyframes
 */
declare type Keyframes = Array<Record<string, any>>
