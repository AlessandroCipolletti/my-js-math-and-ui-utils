import loadImageOffThread from './loadImageOffThread'


const tempImage = new Image()
tempImage.crossOrigin = 'Anonymous'


/**
 * @function getImageFromUrlAsync
 * Loads the given url and return the corrisponding image asynchronously.
 * if useTempImg === true, use a temp image imageDom (not to be trusted externally).
 *
 * @param {string} url
 * @param {boolean} [useTempImg = false]
 * @returns {Promise<HTMLImageElement>}
 */
const getImageFromUrlAsync = (url: string, useTempImg = false): Promise<HTMLImageElement> => {
  if (useTempImg) {
    return loadImageOffThread(tempImage, url).then(() => tempImage)
  } else {
    const img = new Image()
    img.crossOrigin = 'Anonymous'

    return loadImageOffThread(img, url).then(() => img)
  }
}


export default getImageFromUrlAsync
