import nodeIsChildOf from './nodeIsChildOf'

/**
 * @function filterTouchesByTargets
 * Given a TouchEvent, it filters the e.touches that are fired on the given target(s)
 *
 * @example
 * function onTouchStart(e) {
 *   const touches = filterTouchesByTargets(e, myDesidedTarget)
 * }
 *
 * @param {AnyPointerEvent} event
 * @param {HTMLElement|Array<HTMLElement>} targets
 * @returns {Array<OnePointerEvent>}
 */
const filterTouchesByTargets = (
  event: AnyPointerEvent,
  targets: HTMLElement|Array<HTMLElement>
): Array<OnePointerEvent> => {

  let events: Array<OnePointerEvent> = []

  if (event instanceof TouchEvent) {
    events = Array.from(event.touches)
  } else {
    events = [event]
  }

  if (!targets) {
    return events
  }

  if (targets instanceof Array && targets.length === 0) {
    return events
  }

  if (targets instanceof Array) {
    return events.filter((event: Touch|Event) =>
      targets.includes(event.target as HTMLElement) ||
      targets.some((target: HTMLElement) => nodeIsChildOf(event.target as HTMLElement, target))
    )
  } else {
    return events.filter((event: Touch|Event) =>
      event.target === targets ||
      nodeIsChildOf(event.target as HTMLElement, targets)
    )
  }
}


export default filterTouchesByTargets
