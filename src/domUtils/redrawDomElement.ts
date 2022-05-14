
/**
 * @function redrawDomElement
 * Forces an update for the given element.
 * Sometime this is useful to force a dom element to take care of a css or scroll change.
 *
 * @example
 * redrawDomElement(myDom)
 *
 * @param {HTMLElement} element
 * @returns {void}
 */
const redrawDomElement = (element: HTMLElement): void => {
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


export default redrawDomElement
