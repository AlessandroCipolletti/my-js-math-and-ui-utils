import iterateFn from '../jsUtils/iterateFn'


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
const attachDomEvents = (elements: Array<HTMLElement>, events: Record<string, () => any>): void => {
  iterateFn(elements, _attachEvents, events)
}


const _attachEvents = (el: HTMLElement, events: Record<string, () => any>): void => {
  for (const eventName of Object.keys(events)) {
    el.addEventListener(eventName, events[eventName])
  }
}


export default attachDomEvents
