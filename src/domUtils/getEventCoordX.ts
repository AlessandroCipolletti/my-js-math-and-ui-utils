import roundNumber from '../mathUtils/roundNumber'


/**
 * @function getEventCoordX
 * Gets the coordX of any type of pointer input
 *
 * @example
 * function onMouseMove(event) {
 *   const mouseX = getEventCoordX(event)
 * }
 *
 * @param {AnyPointerEventOrArray} event
 * @param {number} [offset = 0]
 * @param {boolean} [absoluteByPage = false]
 * @return {number}
 */
const getEventCoordX = (
  event: AnyPointerEventOrArray,
  offset = 0,
  absoluteByPage = false,
): number => {
  let selectedEvent: OnePointerEvent

  if (event instanceof Array || event instanceof TouchList) {
    selectedEvent = event[0]
  } else if (event instanceof TouchEvent) {
    selectedEvent = event.touches[0]
  } else {
    selectedEvent = event
  }

  const coordX: number = (
    absoluteByPage || typeof selectedEvent.clientX === undefined
    ? selectedEvent.pageX
    : selectedEvent.clientX
  )

  return roundNumber(coordX - offset, 1)
}


export default getEventCoordX
