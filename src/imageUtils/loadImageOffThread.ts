import fetchUrlFileOffThread from '../jsUtils/fetchUrlFileOffThread'
import setImageSrcAsync from './setImageSrcAsync'


/**
 * @function loadImageOffThread
 * Takes an image and the new url to load inside it, and does it asynchronously.
 * Returns true / false to reflect the loading result.
 *
 * @param {HTMLImageElement} img
 * @param {string} url
 * @returns {Promise<boolean>}
 */
const loadImageOffThread = async(img: HTMLImageElement, url: string): Promise<boolean> => {
  const blobUrl = await fetchUrlFileOffThread(url)
  // URL.revokeObjectURL(img.getAttribute('data-blobUrl') || '')
  // img.setAttribute('data-blobUrl', blobUrl)

  return setImageSrcAsync(img, blobUrl)
}


export default loadImageOffThread
