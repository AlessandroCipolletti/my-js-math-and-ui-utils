
/**
 * @function copyTextToClipboard
 * Copy a string to device clipboard
 *
 * @param {string} str
 * @returns {void}
 */
const copyTextToClipboard = (str: string): void => {
  const el = document.createElement('textarea')
  el.value = str
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}


export default copyTextToClipboard
