
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
const appendChilds = (container: HTMLElement, childs: Array<HTMLElement>): void => {
  Array.prototype.forEach.call(childs, Node.prototype.appendChild.bind(container))
}


export default appendChilds
