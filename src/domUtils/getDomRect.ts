import roundNumber from '../mathUtils/roundNumber'


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
 * @returns {DomRect}
 */
const getDomRect = (element: HTMLElement, offsetX = 0, offsetY = 0): DomRect => {
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


export default getDomRect
