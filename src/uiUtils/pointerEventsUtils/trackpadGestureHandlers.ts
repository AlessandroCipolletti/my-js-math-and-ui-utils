import { debounce } from 'debounce'
import { preventDefault, getEventCoordX, getEventCoordY } from '../../domUtils'

/**
 * WheelEvent debounce time
 * @type {number}
 */
const TIME_TO_END_SCROLL_GESTURE = 50


/**
 * @typeof GestureHandlers
 * An object with all the gesture handlers needed
 *
 * @prop {GestureHandler} onGestureStart
 * @prop {GestureHandler} onGestureChange
 * @prop {GestureHandler} onGestureEnd
 */
interface GestureHandlers {
  onGestureStart?: GestureHandler,
  onGestureChange?: GestureHandler,
  onGestureEnd?: GestureHandler,
}


/**
 * Handles pinch-to-zoom gesture on laptop trackpad.
 * It can handle onGestureStart onGestureChange onGestureEnd with three params: (x, y, scale)
 *
 * @param {HTMLElement} target
 * @param {GestureHandlers} handlers
 * @return {void}
 */
export const handleTrackpadPinchGesture = (target: HTMLElement, handlers: GestureHandlers): void => {
  const onGestureStart = handlers.onGestureStart
  const onGestureChange = handlers.onGestureChange
  const onGestureEnd = handlers.onGestureEnd

  let isScrolling = false
  let currentGestureScale = 1
  let currentGestureX = 0
  let currentGestureY = 0

  const debouncedStopScrolling = debounce(() => {
    onGestureEnd && onGestureEnd(currentGestureX, currentGestureY, currentGestureScale, 0)
    isScrolling = false
    currentGestureScale = 1
    currentGestureX = 0
    currentGestureY = 0
  }, TIME_TO_END_SCROLL_GESTURE)

  target.addEventListener('wheel', (e: WheelEvent) => {
    preventDefault(e)

    // if scrolling just started, the gesture is initialized at current coordinates
    currentGestureX = currentGestureX || getEventCoordX(e, 0)
    currentGestureY = currentGestureY || getEventCoordY(e, 0)

    // e.ctrlKey it's a safari hack to identify pinch to zoom gesture on mac's trackpad
    // if (it's pinch to zoom gesture)
    if (e.ctrlKey) {
      currentGestureScale -= e.deltaY * 0.01
    } else { // normal X Y scroll
      currentGestureX -= e.deltaX
      currentGestureY -= e.deltaY
    }

    // scroll event hasn't a scrollStart, scrollChange and scrollEnd events,
    // so I need to figure it out
    if (!isScrolling) {
      onGestureStart && onGestureStart(currentGestureX, currentGestureY, currentGestureScale, 0)
      isScrolling = true
    } else {
      onGestureChange && onGestureChange(currentGestureX, currentGestureY, currentGestureScale, 0)
    }
    debouncedStopScrolling()
  })
}
