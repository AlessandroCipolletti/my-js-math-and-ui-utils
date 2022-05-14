
/**
 * Specify here the default max size for image risizing
 * @type {number}
 */
export let defaultMaxImageSideSize = 400


/**
 * @function setDefaultMaxImageSideSize
 * Set a different default max image side size
 *
 * @param {number} maxSide
 * @returns {void}
 */
const setDefaultMaxImageSideSize = (maxSide: number): void => {
  defaultMaxImageSideSize = maxSide
}


export default setDefaultMaxImageSideSize
