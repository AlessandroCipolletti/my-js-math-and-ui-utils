import roundNumber from '../mathUtils/roundNumber'


/**
 * @function getEventCoordY
 * Gets the coordY of any type of pointer input
 *
 * @example
 * function onMouseMove(event) {
 *   const mouseY = getEventCoordY(event)
 * }
 *
 * @param {AnyPointerEventOrArray} event
 * @param {number} [offset = 0]
 * @param {boolean} [absoluteByPage = false]
 * @returns {number}
 */
const getEventCoordY = (
  event: AnyPointerEventOrArray,
  offset = 0,
  absoluteByPage = false,
): number => {

  if (event) {
    let selectedEvent: OnePointerEvent

    if (event instanceof Array || event instanceof TouchList) {
      selectedEvent = event[0]
    } else if (event instanceof TouchEvent) {
      selectedEvent = event.touches[0]
    } else {
      selectedEvent = event
    }

    const coordY: number = (
      absoluteByPage || typeof selectedEvent.clientY === undefined
      ? selectedEvent.pageY
      : selectedEvent.clientY
    )

    return roundNumber(coordY - offset, 1)
  } else {
    return 0
  }
}


export default getEventCoordY
