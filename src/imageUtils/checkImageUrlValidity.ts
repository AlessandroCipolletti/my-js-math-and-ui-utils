import setImageSrcAsync from './setImageSrcAsync'


/**
 * @function checkImageUrlValidity
 * Tries to load an url as an image, and return true / false.
 * If you are offline ==> returns false
 *
 * @param {string} url
 * @returns {Promise<boolean>}
 */
const checkImageUrlValidity = async(url: string): Promise<boolean> => {
  let res = false

  if (url && typeof url === 'string' && navigator.onLine) {
    try {
      res = await setImageSrcAsync(new Image(), url)
    } catch (e) {
      res = false
    }
  }

  return res
}


export default checkImageUrlValidity
