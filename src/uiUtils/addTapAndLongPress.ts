
import { getEventCoordX, getEventCoordY, preventDefault } from '../domUtils'
import { getDistanceBetweenTwoPoints } from '../mathUtils'
import { getPointerEventForThisDevice } from './utils'


const LONG_PRESS_DURATION = 250


type Handler = (event: AnyPointerEvent) => void

/**
 * @function addTapAndLongPressHandlers
 * Given a element, it handles (and distinguishes) Tap and LongPress event.
 * It's optimised for lists, and fixes an annoying ios bug about scrolling a list of elements;
 * but it can be used on any type of html element.
 * Callbacks are called with the native pointer event as the only param.
 * You can specify how many px are needed to handle the 'scroll' event, and how many ms should pass to call the LongPress handler.
 * 
 * @example
 * addTapAndLongPressHandlers(myListDom, onTapHandler, onLongPressHandler)
 * 
 * @param {HTMLElement} listElement
 * @param {Handler} onTap 
 * @param {Handler} onLongPress 
 * @param {number} [maxPxToMove = 20]
 * @param {number} [minMsToLongPress = 250]
 */
export const addTapAndLongPressHandlers = (
  listElement: HTMLElement,
  onTap: Handler,
  onLongPress: Handler,
  maxPxToMove = 20,
  minMsToLongPress = LONG_PRESS_DURATION,
) => {

  const [eventStart, eventMove, eventEnd] = getPointerEventForThisDevice()

  let touchStartX = -1
  let touchStartY = -1
  let contentMaxScrollY = -1
  let contentMaxScrollX = -1
  let longPressTimeout = 0
  let isLongPressed = false
  let isBugged = false
  let startedFromTop = false

  const doLongPress = (event: AnyPointerEvent): void => {
    isLongPressed = true
    clearTimeout(longPressTimeout)
    onEventEnd()
    onLongPress(event)
  }

  const onEventEnd = (): void => {
    touchStartX = -1
    touchStartY = -1
    isBugged = false
    isLongPressed = false
    startedFromTop = false
    listElement.removeEventListener('scroll', fixDragIosBug)
    // @ts-expect-error it doesn't like a variable event name
    listElement.removeEventListener(eventMove, onTouchMove)
    // @ts-expect-error it doesn't like a variable event name
    listElement.removeEventListener(eventEnd, onTouchEnd)
    clearTimeout(longPressTimeout)
  }

  const fixScrollIosBug = (): void => {
    startedFromTop = (listElement.scrollTop === 0)

    if (listElement.scrollTop === 0) {
      listElement.scrollTop = 1
    } else if (listElement.scrollTop === contentMaxScrollY) {
      listElement.scrollTop = contentMaxScrollY - 1
    }

    if (listElement.scrollLeft === 0) {
      listElement.scrollLeft = 1
    } else if (listElement.scrollLeft === contentMaxScrollX) {
      listElement.scrollLeft = contentMaxScrollX - 1
    }
  }

  const fixDragIosBug = (event: Event): void => {
    event.stopPropagation()
    if (isLongPressed) {
      preventDefault(event)
    }
  }

  const onTouchStart = async(event: AnyPointerEvent): Promise<void> => {
    event.stopPropagation()

    if (!(event instanceof TouchEvent) || event.touches.length === 1) {
      isLongPressed = false

      touchStartX = getEventCoordX(event, 0)
      touchStartY = getEventCoordY(event, 0)
      const timeoutId = setTimeout(() => {
        preventDefault(event)
        doLongPress(event)
      }, minMsToLongPress)
      longPressTimeout = parseInt(`${timeoutId}`)

      contentMaxScrollY = listElement.scrollHeight - listElement.clientHeight
      contentMaxScrollX = listElement.scrollWidth - listElement.clientWidth

      if (contentMaxScrollY === 0 && contentMaxScrollX === 0) {
        preventDefault(event)
      } else {
        fixScrollIosBug()
      }

      listElement.addEventListener('scroll', fixDragIosBug)
      // @ts-expect-error it doesn't like a variable event name
      listElement.addEventListener(eventMove, onTouchMove)
      // @ts-expect-error it doesn't like a variable event name
      listElement.addEventListener(eventEnd, onTouchEnd)
    } else {
      preventDefault(event)
    }
  }

  const onTouchMove = (event: AnyPointerEvent): void => {
    if (isLongPressed) {
      event.preventDefault()
    }

    event.stopPropagation()
    const touchMoveX = getEventCoordX(event, 0)
    const touchMoveY = getEventCoordY(event, 0)
    const touchDistance = getDistanceBetweenTwoPoints(touchStartX, touchStartY, touchMoveX, touchMoveY)

    if (isBugged || (startedFromTop && touchMoveY > touchStartY)) {
      isBugged = true
      preventDefault(event)
    }

    if ((Math.abs(touchDistance) > maxPxToMove) || (event instanceof TouchEvent && event.touches.length > 1)) {
      clearTimeout(longPressTimeout)
    }
  }

  const onTouchEnd = (event: AnyPointerEvent): void => {
    preventDefault(event)

    if (!isLongPressed && (!(event instanceof TouchEvent) || event.touches.length === 0)) {
      const touchEndX = getEventCoordX(event, 0)
      const touchEndY = getEventCoordY(event, 0)
      const touchDistance = getDistanceBetweenTwoPoints(touchStartX, touchStartY, touchEndX, touchEndY)

      if (Math.abs(touchDistance) < maxPxToMove) {
        onTap(event)
      }
    }

    onEventEnd()
  }

  // @ts-expect-error it doesn't like a variable event name
  listElement.addEventListener(eventStart, onTouchStart)
}
