import getImageFromUrlAsync from './getImageFromUrlAsync'
import getImageBase64Async from './getImageBase64Async'


const tempCanvas = document.createElement('canvas')
const tempContext = tempCanvas.getContext('2d') as CanvasRenderingContext2D


/**
 * @function mergeBase64Images
 * Merges multiple base64 image strings into one base64,
 * merging all the conrrisponding images with transparency.
 *
 * @param {Array<string>} bases64
 * @returns {Promise<string>}
 */
const mergeBase64Images = async(bases64: Array<string>): Promise<string> => {
  const imgs: Array<HTMLImageElement> = await Promise.all(bases64.map((base64) => {
    return getImageFromUrlAsync(base64)
  }))

  tempCanvas.width = tempCanvas.height = 0

  for (const img of imgs) {
    if ((img.naturalWidth || img.width) > 1) {
      if (!tempCanvas.width) {
        tempCanvas.width = img.naturalWidth || img.width
        tempCanvas.height = img.naturalHeight || img.height
      }
      tempContext.drawImage(img, 0, 0)
    }
  }

  // return tempCanvas.toDataURL('image/png') // sync way
  return await getImageBase64Async(tempCanvas)
}


export default mergeBase64Images
