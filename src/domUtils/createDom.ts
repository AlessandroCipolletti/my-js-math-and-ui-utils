
/**
 * @function createDom
 * Creates (and return) a dom element, and assigns some class names to it.
 *
 * @example
 * const div = createDom() // ==> <div></div>
 * const span = createDom('span') // ==> <span></span>
 * const headerWithClasses = createDom('header', 'hello', 'world') // ==> <header class="hello world"></header>
 *
 * @param {string} [tagName = 'div']
 * @param {...string} [classes]
 * @return {HTMLElement}
 */
const createDom = (tagName = 'div', ...classes: Array<string>): HTMLElement => {
  const dom = document.createElement(tagName)

  for (const i in classes) {
    dom.classList.add(classes[i])
  }

  return dom
}


export default createDom
