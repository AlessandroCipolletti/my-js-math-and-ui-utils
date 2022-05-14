
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
const nodeIsChildOf = (node: HTMLElement, container: HTMLElement): boolean => {
  let result = false
  let currentNode: HTMLElement = node

  while (!result && currentNode.tagName.toUpperCase() !== 'BODY') {
    result = (currentNode === container)
    currentNode = currentNode.parentNode as HTMLElement
  }

  return result
}


export default nodeIsChildOf
