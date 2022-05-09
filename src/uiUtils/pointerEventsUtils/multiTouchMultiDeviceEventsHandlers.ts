import { isTablet, isMobile, isBrowser } from 'mobile-device-detect'

import { multiTouchEventsHandlers } from './multiTouchEventsHandlers'
import { handleTrackpadPinchGesture } from './trackpadGestureHandlers'
import { preventDefault } from '../../domUtils'
import { delayFn } from '../../jsUtils'


/**
 * @function multiDeviceEventsHandlers
 * Allows to attach multiple multitouch handlers to multiple targets, on multiple kinds of devices, at the same time.
 * If you pass gestures handlers, they will be treated as needed for both touch devices and desktop (with trackpads).
 * NB. Mobile first: handlers are named like onSingleTouchStart, onSingleTouchMove and onSingleTouchEnd,
 * but they work on desktop too, mapping mousedown mousevove and mouseup events.
 *
 * @example
 * // on any type of device:
 * multiDeviceEventsHandlers([myDom1, myDom2], {
 *   onSingleTouchStart,
 *   onSingleTouchMove,
 *   onSingleTouchEnd,
 *   onGestureStart,
 *   onGestureChange,
 *   onGestureEnd,
 * })
 *
 */
export const multiDeviceEventsHandlers = (
  targets: HTMLElement|Array<HTMLElement>,
  handlers: MultiTouchHandlers,
): void => {

  const delayedHandlers: MultiTouchHandlers = {}

  let handlerName: keyof typeof handlers
  for (handlerName in handlers) {
    const handler = handlers[handlerName]
    if (typeof handler !== 'undefined') {
      delayedHandlers[handlerName] = delayFn(handler)
    }
  }

  if (!Array.isArray(targets)) {
    targets = [targets]
  }

  const isDesktop: boolean = !isTablet && !isMobile && isBrowser

  targets.forEach((el: HTMLElement) => {
    if (el instanceof HTMLElement === false) return
    // Mobile first. All base events drawing a line are handled only in one place, in multiTouchEventsHandlers.
    // Even if we are on desktop with just a mouse input.
    multiTouchEventsHandlers(el, delayedHandlers)

    // But zoom gestures can not be handled with multi touch on a desktop.
    // So on desktop we need to handle trackpad gesture events to handle zoom.
    if (isDesktop) {
      if (delayedHandlers.onGestureStart || delayedHandlers.onGestureChange || delayedHandlers.onGestureEnd) {
        const onGestureStart = delayedHandlers.onGestureStart || (() => {})
        const onGestureChange = delayedHandlers.onGestureChange || (() => {})
        const onGestureEnd = delayedHandlers.onGestureEnd || (() => {})

        handleTrackpadPinchGesture(el, {
          onGestureStart,
          onGestureChange,
          onGestureEnd,
        })
      }
    } else {
      el.addEventListener('gesturestart', preventDefault)
      el.addEventListener('gesturechange', preventDefault)
      el.addEventListener('gestureend', preventDefault)
    }
  })
}
