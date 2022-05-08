import { roundNumber } from './mathUtils'
import { iterateFn } from './jsUtils'

/**
 * @function preventDefaultTouchOnEls
 * Prevents default behavior and stop propagation for all "pointer start" on multiple elements at the same time.
 * 'pointerdown', 'mousedown', and (if supported) 'touchstart'
 *
 * @example
 * preventDefaultTouchOnEls([myDom1, myDom2])
 *
 * @param {Array<HTMLElement>} els
 * @return {void}
 */
export const preventDefaultTouchOnEls = (...els: Array<HTMLElement>): void => {
  els = els.filter(e => e instanceof HTMLElement)

  els.forEach(e => e.addEventListener('pointerdown', preventDefault))
  els.forEach(e => e.addEventListener('mousedown', preventDefault))
  if ('ontouchstart' in window) {
    els.forEach(e => e.addEventListener('touchstart', preventDefault))
  }
}

/**
 * @function preventDefault
 * Prevents default event behavior and stop event propagation
 *
 * @example
 * function onTouchStart(e) {
 *   preventDefault(e)
 * }
 *
 * @param {Event} e
 * @return {void}
 */
export const preventDefault = (e: Event): void => {
  if (e) {
    e.preventDefault()
    e.stopPropagation()
  }
}

/**
 * @function preventMoveDefaultIfNeeded
 * This fixes an annoying iOS15+ behavior on apple devices.
 * Prevents 'pull down to refresh' if the element you are pulling down has a scroll.
 * I used a css class "scrollable" to identify the dom elements who needs to prevent 'pull to refresh'.
 * You can do it by using getComputedStyle(target).overflow === 'auto'|'scroll', but it's more demanding in terms of performance.
 *
 * @example
 * appContainer.addEventListener('touchstart', (e) => {
 *   preventMoveDefaultIfNeeded(e)
 * }, false)
 *
 * @param {AnyPointerEvent} event
 * @return {void}
 */
export const preventMoveDefaultIfNeeded = (event: AnyPointerEvent) => {
  const eventMove = 'ontouchstart' in window ? 'touchmove' : 'pointermove'
  const eventEnd = 'ontouchstart' in window ? 'touchend' : 'pointerup'
  let target = event.target as HTMLElement
  let startY = 0
  let scrollStartedFromTop = false
  let hasVerticalScroll = false
  let hasHorizontalScroll = false
  // const overflowScrollValues: Array<string> = ['scroll', 'auto']

  while (target && target !== document.body) {
    // if (overflowScrollValues.includes(getComputedStyle(target).overflow)) {
    if (target.classList.contains('scrollable')) {
      hasVerticalScroll = target.scrollHeight > target.clientHeight
      hasHorizontalScroll = target.scrollWidth > target.clientWidth
      break
    }
    target = target.parentNode as HTMLElement
  }

  if (hasVerticalScroll) {
    if (target.scrollTop === 0) {
      startY = getEventCoordY(event, 0)
      scrollStartedFromTop = true
      target.scrollTop = 1
    } else if (target.scrollTop === (target.scrollHeight - target.clientHeight)) {
      target.scrollTop = (target.scrollHeight - target.clientHeight) - 1
    }
  } else if (hasHorizontalScroll) {
    if (target.scrollLeft === 0) {
      target.scrollLeft = 1
    } else if (target.scrollLeft === (target.scrollWidth - target.clientWidth)) {
      target.scrollLeft = (target.scrollWidth - target.clientWidth) - 1
    }
  }

  const onTouchMove = (e: AnyPointerEvent) => {
    if (!hasVerticalScroll && !hasHorizontalScroll) {
      preventDefault(e)
      if (document.activeElement && document.activeElement instanceof HTMLElement) {
        const elementTag: string = document.activeElement.tagName.toLowerCase()
        const elementType: string = (document.activeElement.getAttribute('type') || '').toLowerCase()

        if (elementTag === 'input' && (elementType === 'text' || elementType === 'password')) {
          document.activeElement.blur()
        }
      }
    } else if (hasVerticalScroll && scrollStartedFromTop) {
      const moveY = getEventCoordY(e, 0)
      if (moveY > startY) {
        preventDefault(e)
      }
    }
  }

  const onTouchEnd = () => {
    document.body.removeEventListener(eventMove, onTouchMove)
    document.body.removeEventListener(eventEnd, onTouchEnd)
  }

  document.body.addEventListener(eventMove, onTouchMove)
  document.body.addEventListener(eventEnd, onTouchEnd, true)
}

/**
 * @function preventAllDefault
 * Prevents and stops propagation for all pointer related events on the given HTMLElement
 *
 * @example
 * preventAllDefault(myDom)
 *
 * @param {HTMLElement} element
 * @return {void}
 */
export const preventAllDefault = (element: HTMLElement): void => {
  element.addEventListener('pointerdown', preventDefault)
  element.addEventListener('pointermove', preventDefault)
  element.addEventListener('pointerup', preventDefault)
  element.addEventListener('mousedown', preventDefault)
  element.addEventListener('mousemove', preventDefault)
  element.addEventListener('mouseup', preventDefault)

  if ('ontouchstart' in window) {
    element.addEventListener('touchstart', preventDefault)
    element.addEventListener('touchmove', preventDefault)
    element.addEventListener('touchend', preventDefault)
  }
}

/**
 * @function createDom
 * Creates (and return) a dom element, and assigns some class names to it.
 *
 * @example
 * const div = createDom() // ==> <div></div>
 * const span = createDom('span') // ==> <span></span>
 * const headerWithClasses = createDom('header', 'hello', 'world') // ==> <header class="hello world"></header>
 *
 * @param {string} [tagName]
 * @param {...string} [classes]
 * @return {HTMLElement}
 */
export const createDom = (tagName = 'div', ...classes: Array<string>): HTMLElement => {
  const dom = document.createElement(tagName)

  for (const i in classes) {
    dom.classList.add(classes[i])
  }

  return dom
}

/**
 * @function getEventCoordX
 * Gets the coordX of any type of pointer input
 *
 * @example
 * function onMouseMove(e) {
 *   const mouseX = getEventCoordX(e)
 * }
 *
 * @param {AnyPointerEventOrArray} event
 * @param {number} [offset = 0]
 * @return {number}
 */
export const getEventCoordX = (
  event: AnyPointerEventOrArray,
  offset = 0,
): number => {
  let selectedEvent: OnePointerEvent

  if (event instanceof Array || event instanceof TouchList) {
    selectedEvent = event[0]
  } else if (event instanceof TouchEvent) {
    selectedEvent = event.touches[0]
  } else {
    selectedEvent = event
  }

  const coordX = (typeof selectedEvent.clientX !== undefined) ? selectedEvent.clientX : selectedEvent.pageX

  return roundNumber(coordX - offset, 1)
}

/**
 * @function getEventCoordY
 * Gets the coordY of any type of pointer input
 *
 * @example
 * function onMouseMove(e) {
 *   const mouseY = getEventCoordY(e)
 * }
 *
 * @param {AnyPointerEventOrArray} event
 * @param {number} [offset = 0]
 * @return {number}
 */
export const getEventCoordY = (
  event: AnyPointerEventOrArray,
  offset = 0,
): number => {
  let selectedEvent: OnePointerEvent

  if (event instanceof Array || event instanceof TouchList) {
    selectedEvent = event[0]
  } else if (event instanceof TouchEvent) {
    selectedEvent = event.touches[0]
  } else {
    selectedEvent = event
  }

  const coordY = (typeof selectedEvent.clientY !== undefined) ? selectedEvent.clientY : selectedEvent.pageY

  return roundNumber(coordY - offset, 1)
}

const _attachEvents = (el: HTMLElement, events: Record<string, () => any>): void => {
  for (const eventName of Object.keys(events)) {
    el.addEventListener(eventName, events[eventName])
  }
}

/**
 * @function attachDomEvents
 * Attaches multiple event handlers to multiple dom elements at the same time.
 *
 * @example
 * attachDomEvents([mydom1, myDom2], {
 *   'mousedown': (e) => {},
 *   'mouseup': (e) => {},
 * })
 *
 * @param {Array<HTMLElement>} elements
 * @param {Record<string, () => any>} events
 * @return {void}
 */
export const attachDomEvents = (elements: Array<HTMLElement>, events: Record<string, () => any>): void => {
  iterateFn(elements, _attachEvents, events)
}

/**
 * @function getDomRect
 * Gets a detailed positioning information about the given dom element (in px, rounded a 1 decimal digit)
 * If you want to get coords related to its container, you can specify container's 'offsetX' and 'offsetY' position.
 * Otherwise it returns coords relative to the page.
 *
 * @example
 * const myDomRect = getDomRect(myDom)
 *
 * @param {HTMLElement} element
 * @param {number} [offsetX]
 * @param {number} [offsetY]
 * @return {DomRect}
 */
export const getDomRect = (element: HTMLElement, offsetX = 0, offsetY = 0): DomRect => {
  const rect = JSON.parse(JSON.stringify(element.getBoundingClientRect()))

  return {
    width: roundNumber(rect.width, 1),
    height: roundNumber(rect.height, 1),
    x: roundNumber(rect.left - offsetX, 1),
    y: roundNumber(rect.top - offsetY, 1),
    left: roundNumber(rect.left - offsetX, 1),
    top: roundNumber(rect.top - offsetY, 1),
    right: roundNumber(rect.right - offsetX, 1),
    bottom: roundNumber(rect.bottom - offsetY, 1),
    centerX: roundNumber(rect.left + (rect.width / 2), 1),
    centerY: roundNumber(rect.top + (rect.height / 2), 1),
  }
}

/**
 * @function nodeIsChildOf
 * Checks if 'node' is child (at any level) of 'container'
 *
 * @example
 * const isContained = nodeIsChildOf(someChildDom, containerDom)
 *
 * @param {HTMLElement} node
 * @param {HTMLElement} container
 * @return {boolean}
 */
export const nodeIsChildOf = (node: HTMLElement, container: HTMLElement): boolean => {
  let result = false
  let currentNode: HTMLElement = node

  while (!result && currentNode.tagName.toUpperCase() !== 'BODY') {
    result = (currentNode === container)
    currentNode = currentNode.parentNode as HTMLElement
  }

  return result
}

/**
 * @function redrawDomElement
 * Forces an update for the given element.
 * Sometime this is useful to force a dom element to take care of a css or scroll change.
 *
 * @example
 * redrawDomElement(myDom)
 *
 * @param {HTMLElement} element
 * @return {void}
 */
export const redrawDomElement = (element: HTMLElement): void => {
  if (element instanceof HTMLElement) {
    const initialScrollTop = element.scrollTop
    const initialScrollLeft = element.scrollLeft
    if (element.parentNode) {
      element.parentNode.appendChild(element)
    }
    element.scrollTop = initialScrollTop
    element.scrollLeft = initialScrollLeft
  }
}

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
 * @return {Array<OnePointerEvent>}
 */
export const filterTouchesByTargets = (
  event: AnyPointerEvent,
  targets: HTMLElement|Array<HTMLElement>,
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
    return events.filter((event: Touch|Event) => targets.includes(event.target as HTMLElement))
  } else {
    return events.filter((event: Touch|Event) => event.target === targets)
  }
}

/**
 * @function appendChilds
 * Append multiple childs with one line.
 *
 * @example
 * appendChilds(containerDom, [myDom1, myDom2])
 * 
 * @param {HTMLElement} container
 * @param {Array<HTMLElement>} childs
 * @return {void}
 */
export const appendChilds = (container: HTMLElement, childs: Array<HTMLElement>): void => {
  Array.prototype.forEach.call(childs, Node.prototype.appendChild.bind(container))
}
