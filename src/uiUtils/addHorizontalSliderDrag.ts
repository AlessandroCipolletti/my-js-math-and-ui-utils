import roundNumber from '../mathUtils/roundNumber'
import getNumberInBetween from '../mathUtils/getNumberInBetween'
import getEventCoordX from '../domUtils/getEventCoordX'
import preventDefault from '../domUtils/preventDefault'
import getDomRect from '../domUtils/getDomRect'
import { getPointerEventForThisDevice } from './utils'


/**
 * @function addHorizontalSliderDrag
 * Attach a drag handler to any type of horizontal slider input.
 * if returnRelativeDiff === true: it returns the difference between every mouseMove and the original mouseDown.
      So it goes negative if you drag to the left, and positive to the right.
  if returnRelativeDiff === false: it return the value corresponding at che current mouse event coordinates.
      So it's always a number between 0 and valueMax.
 *
 * @param {HTMLElement} draggableDom
 * @param {HTMLElement} sliderDom
 * @param {DragHandler} onDrag
 * @param {number} valueMax
 * @param {number} valueMin
 * @param {boolean} [returnRelativeDiff = false]
 * @param {number} [decimals = 4]
 * @param {number} [waitingTime = 0]
 * @returns {void}
 */
const addHorizontalSliderDrag = (
  draggableDom: HTMLElement,
  sliderDom: HTMLElement,
  onDrag: DragHandler,
  valueMax: number,
  valueMin: number,
  returnRelativeDiff = false,
  decimals = 4,
  waitingTime = 0
): void => {

  const [eventStart, eventMove, eventEnd] = getPointerEventForThisDevice()

  let dragEnabled = true
  let lastValue = -Infinity
  let dragged = false
  let valueAtTouchStart = 0
  let coordAtTouchStart = 0
  let sliderDomLeft = 0
  let sliderDomWidth = 0
  const deltaValue: number = valueMax - valueMin

  const enable = (): void => {
    dragEnabled = true
  }

  const getValueFromCoord = (coord: number): number => {
    return roundNumber((coord * deltaValue / sliderDomWidth) + valueMin, decimals)
  }

  const saveValue = (newValue: number): void => {
    dragEnabled = (waitingTime === 0)

    if (newValue !== lastValue) {
      lastValue = newValue
      onDrag(newValue, true, dragged)
    }

    if (dragEnabled === false) {
      setTimeout(enable, waitingTime)
    }
  }

  const onTouchStart = (event: AnyPointerEvent): void => {
    preventDefault(event)
    dragged = false
    // @ts-expect-error it doesn't like a variable event name
    document.addEventListener(eventMove, onTouchMove)
    document.addEventListener(eventEnd, onTouchEnd)
    const sliderDomRect = sliderDom.getBoundingClientRect()
    sliderDomLeft = roundNumber(sliderDomRect.left, 0)
    sliderDomWidth = roundNumber(sliderDomRect.width, 0)
    if (returnRelativeDiff) {
      coordAtTouchStart = getEventCoordX(event)
      valueAtTouchStart = getValueFromCoord(getDomRect(draggableDom).centerX - sliderDomLeft)
    } else {
      valueAtTouchStart = coordAtTouchStart = 0
    }
    updateSlider(getEventCoordX(event))
  }

  const updateSlider = (coordX: number): void => {
    let newValue

    if (returnRelativeDiff) {
      newValue = getValueFromCoord(coordX - coordAtTouchStart)
      newValue = getNumberInBetween(newValue, valueMin - valueAtTouchStart, valueMax - valueAtTouchStart, decimals)
    } else {
      newValue = getValueFromCoord(coordX - sliderDomLeft)
      newValue = getNumberInBetween(newValue, valueMin, valueMax, decimals)
    }

    saveValue(newValue)
  }

  const onTouchMove = (event: AnyPointerEvent): void => {
    preventDefault(event)
    if (dragEnabled) {
      updateSlider(getEventCoordX(event))
      dragged = true
    }
  }

  const onTouchEnd = () => {
    onDrag(lastValue, false, dragged)
    // @ts-expect-error it doesn't like a variable event name
    document.removeEventListener(eventMove, onTouchMove)
    document.removeEventListener(eventEnd, onTouchEnd)
  }

  // @ts-expect-error it doesn't like a variable event name
  draggableDom.addEventListener(eventStart, onTouchStart)
  // @ts-expect-error it doesn't like a variable event name
  sliderDom.addEventListener(eventStart, onTouchStart)
}


export default addHorizontalSliderDrag
