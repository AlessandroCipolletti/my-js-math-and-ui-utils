import { isAndroid } from 'mobile-device-detect'

import roundNumber from '../mathUtils/roundNumber'
import getAngleDegreesBetweenTwoPoints from '../mathUtils/getAngleDegreesBetweenTwoPoints'
import getDistanceBetweenTwoPoints from '../mathUtils/getDistanceBetweenTwoPoints'
import getMiddlePointCoords from '../mathUtils/getMiddlePointCoords'
import preventDefault from '../domUtils/preventDefault'
import getEventCoordX from '../domUtils/getEventCoordX'
import getEventCoordY from '../domUtils/getEventCoordY'
import filterTouchesByTargets from '../domUtils/filterTouchesByTargets'
import delay from '../jsUtils/delay'
import { getPointerEventForThisDevice } from './utils'


const TIME_TO_WAIT_FOR_SECOND_FINGER = 40
const TIME_TO_WAIT_FOR_TAP_END = 50
const TIME_TO_WAIT_FOR_LONG_PRESS = 100
const MOVE_EVENTS_TO_FORCE_MOVE = 6
const TOUCH_TYPE_STYLUS = 'stylus'
const TOUCH_TYPE_FINGER = 'direct'


const _fixAndroidTouchEvent = (touchEvent: IosTouch): IosTouch => {
  if (isAndroid) {
    touchEvent.touchType = (touchEvent.touchType === TOUCH_TYPE_STYLUS) ? TOUCH_TYPE_STYLUS : TOUCH_TYPE_FINGER
  }
  return touchEvent
}


/**
 * @function multiTouchEventsHandlers
 * Takes care of all the annoying and strage behaviors related to touch events,
 * and allows you to simply attach one or more handlers ignoring how it works.
 * For example when you tap something you may accidentally fire some touchmove events who can break you external behavior.
 * NB. This is useful only if you need multiple handlers on the same element, and you don't want to confuse one event for another.
 * If you only need touchstart / touchmove / touchend handlers, I suggest to simply listen these 3 native events.
 *
 * @example
 * // for touch devices:
 * multiTouchEventsHandlers(myDom, { // one or more handlers
 *   onSingleTouchStart,
 *   onGestureChange,
 *   onOneFingerLongPress,
 * })
 *
 * @param {HTMLElement} target
 * @param {MultiTouchHandlers} handlers
 * @returns {void}
 */
const multiTouchEventsHandlers = (
  target: HTMLElement,
  handlers: MultiTouchHandlers,
): void => {

  const onSingleTouchStart = handlers.onSingleTouchStart
  const onSingleTouchMove = handlers.onSingleTouchMove
  const onSingleTouchEnd = handlers.onSingleTouchEnd
  const onGestureStart = handlers.onGestureStart
  const onGestureChange = handlers.onGestureChange
  const onGestureEnd = handlers.onGestureEnd
  const onOneFingerLongPress = handlers.onOneFingerLongPress
  const onOneFingerSingleTap = handlers.onOneFingerSingleTap
  const onTwoFingersSingleTap = handlers.onTwoFingersSingleTap
  const onThreeFingersSingleTap = handlers.onThreeFingersSingleTap
  const onFourFingersSingleTap = handlers.onFourFingersSingleTap

  const [eventStart, eventMove, eventEnd, eventCancel] = getPointerEventForThisDevice()

  let touches: Array<IosTouch> = []
  let ratedTouchEvents: Array<IosTouch> = []
  let waitedLongEnoughForSecondFinger = false
  let waitedLongEnoughForTapEnd = false
  let waitedLogEnoughForLongPress = false
  let movedBeforeGesture = false
  let gestureStarted = false
  let gestureInterrupted = false
  let touchCanceled = false
  let usedForSingleTouch = false
  let maxTouchesLength = 0
  let initialRotation = 0
  let initialGesturePointsDistance = 0
  let touchMoveLength = 0
  let currentGestureX = 0
  let currentGestureY = 0
  let currentGestureS = 0
  let currentGestureR = 0

  const reset = (): void => {
    touches = []
    ratedTouchEvents = []
    waitedLongEnoughForSecondFinger = false
    waitedLongEnoughForTapEnd = false
    waitedLogEnoughForLongPress = false
    movedBeforeGesture = false
    gestureInterrupted = false
    gestureStarted = false
    usedForSingleTouch = false
    initialRotation = 0
    initialGesturePointsDistance = 0
    maxTouchesLength = 0
    touchMoveLength = 0
    currentGestureX = 0
    currentGestureY = 0
    currentGestureS = 0
    currentGestureR = 0
  }

  const getCurrentGestureCoords = (): Array<number> => {
    const x1 = getEventCoordX(touches[0], 0)
    const y1 = getEventCoordY(touches[0], 0)
    const x2 = getEventCoordX(touches[1], 0)
    const y2 = getEventCoordY(touches[1], 0)

    return getMiddlePointCoords(x1, y1, x2, y2, 0)
  }

  const getCurrentGestureScale = (): number => {
    const x1 = getEventCoordX(touches[0], 0)
    const y1 = getEventCoordY(touches[0], 0)
    const x2 = getEventCoordX(touches[1], 0)
    const y2 = getEventCoordY(touches[1], 0)
    const currentGesturePointsDistance = getDistanceBetweenTwoPoints(x1, y1, x2, y2, 1)
    initialGesturePointsDistance = initialGesturePointsDistance || currentGesturePointsDistance

    return initialGesturePointsDistance ? (roundNumber(currentGesturePointsDistance / initialGesturePointsDistance, 10) || 1) : 1
  }

  const getCurrentGestureRotation = (): number => {
    const currentRotation = getAngleDegreesBetweenTwoPoints(touches[0].clientX, touches[0].clientY, touches[1].clientX, touches[1].clientY)
    initialRotation = initialRotation || currentRotation

    return initialRotation ? (currentRotation - initialRotation) : 0
  }

  const handleGestureChange = (): void => {
    if (
      maxTouchesLength === 2 &&
      touches.length === 2 &&
      (touchMoveLength > MOVE_EVENTS_TO_FORCE_MOVE || waitedLongEnoughForTapEnd) &&
      !movedBeforeGesture &&
      !gestureInterrupted &&
      !usedForSingleTouch
    ) {
      [currentGestureX, currentGestureY] = getCurrentGestureCoords()
      currentGestureS = getCurrentGestureScale()
      currentGestureR = getCurrentGestureRotation()
      if (gestureStarted) {
        onGestureChange && onGestureChange(currentGestureX, currentGestureY, currentGestureS, currentGestureR)
      } else {
        gestureStarted = true
        onGestureStart && onGestureStart(currentGestureX, currentGestureY, currentGestureS, currentGestureR)
      }
    }
  }

  const handleTouchStart = async(event: AnyPointerEvent): Promise<void> => {
    preventDefault(event)
    const isFirstTouch = (touches.length === 0)
    if (isFirstTouch) {
      touchCanceled = false
    }
    if (touchCanceled) return
    touches = filterTouchesByTargets(event, target) as Array<IosTouch>
    maxTouchesLength = Math.max(maxTouchesLength, touches.length)
    if (!touches.length) return

    if (isFirstTouch) {
      // @ts-expect-error it doesn't like a variable event name
      document.addEventListener(eventMove, handleTouchMove)
      // @ts-expect-error it doesn't like a variable event name
      document.addEventListener(eventEnd, handleTouchEnd)
      // @ts-expect-error it doesn't like a variable event name
      document.addEventListener(eventCancel, handleTouchCanceled)
      ratedTouchEvents.push(_fixAndroidTouchEvent(touches[0]))

      await delay(TIME_TO_WAIT_FOR_SECOND_FINGER)
      if (!touches.length) return // if touchEnd appened while waiting TIME_TO_WAIT_FOR_SECOND_FINGER, we already done onTouchStart and onTouchEnd

      waitedLongEnoughForSecondFinger = true

      if (maxTouchesLength === 1) {
        if (!usedForSingleTouch && ratedTouchEvents.length) {
          usedForSingleTouch = true
          onSingleTouchStart && onSingleTouchStart(event, ratedTouchEvents[0])
          ratedTouchEvents = []
        }
      }

      if (touches.length > 0) {
        await delay(TIME_TO_WAIT_FOR_TAP_END)
        waitedLongEnoughForTapEnd = true
        await delay(TIME_TO_WAIT_FOR_LONG_PRESS)
        waitedLogEnoughForLongPress = true
      }
    } else {
      if (touches.length > 1 && usedForSingleTouch) {
        onSingleTouchEnd && onSingleTouchEnd(touches[0])
        touchCanceled = true
        reset()
      }

      if (touches.length > 2) {
        gestureInterrupted = true
      }
    }
  }

  const handleTouchMove = (event: AnyPointerEvent): void => {
    preventDefault(event)
    if (!touches.length) return
    if (touchCanceled) return

    touches = filterTouchesByTargets(event, []) as Array<IosTouch>
    touchMoveLength++

    if (touches.length) {
      if (maxTouchesLength === 1) {
        if (!usedForSingleTouch) {
          ratedTouchEvents.push(_fixAndroidTouchEvent(touches[0]))
        }
        if (touchMoveLength > MOVE_EVENTS_TO_FORCE_MOVE || waitedLongEnoughForSecondFinger) {
          if (!usedForSingleTouch) {
            usedForSingleTouch = true
            onSingleTouchStart && onSingleTouchStart(event, ratedTouchEvents[0])

            for (let i = 1; i < ratedTouchEvents.length; i++) {
              onSingleTouchMove && onSingleTouchMove(event, ratedTouchEvents[i])
              ratedTouchEvents = []
            }
          }
          movedBeforeGesture = true
          onSingleTouchMove && onSingleTouchMove(event, _fixAndroidTouchEvent(touches[0]))
        }
      } else if (touchMoveLength > MOVE_EVENTS_TO_FORCE_MOVE) {
        handleGestureChange()
      }
    }
  }

  const handleTouchEnd = (event: AnyPointerEvent): void => {
    preventDefault(event)
    if (touchCanceled) return
    touches = filterTouchesByTargets(event, []) as Array<IosTouch>

    if (!touches.length) {
      // @ts-expect-error it doesn't like a variable event name
      document.removeEventListener(eventMove, handleTouchMove)
      // @ts-expect-error it doesn't like a variable event name
      document.removeEventListener(eventEnd, handleTouchEnd)
      // @ts-expect-error it doesn't like a variable event name
      document.removeEventListener(eventCancel, handleTouchCanceled)

      if (usedForSingleTouch) {
        onSingleTouchEnd && onSingleTouchEnd(event)
        if (touchMoveLength <= MOVE_EVENTS_TO_FORCE_MOVE) {
          if (waitedLogEnoughForLongPress) {
            onOneFingerLongPress && onOneFingerLongPress(event, ratedTouchEvents[0])
          } else {
            onOneFingerSingleTap && onOneFingerSingleTap(event, ratedTouchEvents[0])
          }
        }
      } else if (!usedForSingleTouch && touchMoveLength <= MOVE_EVENTS_TO_FORCE_MOVE && maxTouchesLength === 1) {
        usedForSingleTouch = true
        onSingleTouchStart && onSingleTouchStart(event, ratedTouchEvents[0])
        onSingleTouchEnd && onSingleTouchEnd(ratedTouchEvents[0])
        if (waitedLogEnoughForLongPress) {
          onOneFingerLongPress && onOneFingerLongPress(event, ratedTouchEvents[0])
        } else {
          onOneFingerSingleTap && onOneFingerSingleTap(event, ratedTouchEvents[0])
        }
      } else if (maxTouchesLength > 1) {
        if (gestureStarted) {
          onGestureEnd && onGestureEnd(currentGestureX, currentGestureY, currentGestureS, currentGestureR)
        } else if (!usedForSingleTouch && touchMoveLength < MOVE_EVENTS_TO_FORCE_MOVE) {
          if (maxTouchesLength === 2) {
            onTwoFingersSingleTap && onTwoFingersSingleTap(event, touches)
          } else if (maxTouchesLength === 3) {
            onThreeFingersSingleTap && onThreeFingersSingleTap(event, touches)
          } else if (maxTouchesLength === 4) {
            onFourFingersSingleTap && onFourFingersSingleTap(event, touches)
          }
        }
      }
      reset()
    } else if (gestureStarted && touches.length !== 2) {
      gestureInterrupted = true
    }
  }

  const handleTouchCanceled = (event: AnyPointerEvent): void => {
    preventDefault(event)
    touchCanceled = true

    if (maxTouchesLength === 2 && gestureStarted) {
      onGestureEnd && onGestureEnd(currentGestureX, currentGestureY, currentGestureS, currentGestureR)
    }

    reset()
    // @ts-expect-error it doesn't like a variable event name
    document.removeEventListener(eventMove, handleTouchMove)
    // @ts-expect-error it doesn't like a variable event name
    document.removeEventListener(eventEnd, handleTouchEnd)
    // @ts-expect-error it doesn't like a variable event name
    document.removeEventListener(eventCancel, handleTouchCanceled)
  }

  // @ts-expect-error it doesn't like a variable event name
  target.addEventListener(eventStart, handleTouchStart)
}


export default multiTouchEventsHandlers
