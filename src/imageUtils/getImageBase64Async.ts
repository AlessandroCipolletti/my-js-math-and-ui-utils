import convertImgToCanvas from './convertImgToCanvas'
import blobToBase64Async from './blobToBase64Async'
import getCanvasBlobAsync from './getCanvasBlobAsync'


/**
 * @function getImageBase64Async
 * Takes an image (or a canvas) and returns its base64, asynchronously
 *
 * @params {HTMLCanvasElement|HTMLImageElement} imageDom
 * @return {Promise<string>}
 */
const getImageBase64Async = async(
  imageDom: HTMLCanvasElement|HTMLImageElement,
): Promise<string> => {
  if (imageDom instanceof HTMLImageElement) {
    imageDom = convertImgToCanvas(imageDom)
  }
  return blobToBase64Async(await getCanvasBlobAsync(imageDom))
  // the sync way to do it:
  // imageDom.toDataURL('image/png')
}


export default getImageBase64Async
