import { defaultMaxImageSideSize } from './setDefaultMaxImageSideSize'


const tempCanvas = document.createElement('canvas')
const tempContext = tempCanvas.getContext('2d') as CanvasRenderingContext2D


/**
 * @function resizeImageAndGetBase64
 * Resize an image and returns the corrisponding base64
 *
 * @param {HTMLCanvasElement|HTMLImageElement} imageDom
 * @param {number} [maxSize] Default defaultMaxImageSideSize
 * @returns {string}
 */
const resizeImageAndGetBase64 = (
  imageDom: HTMLCanvasElement|HTMLImageElement,
  maxSize: number = defaultMaxImageSideSize,
): string => {
  
  let imgRatio: number
  if (imageDom instanceof HTMLCanvasElement) {
    imgRatio = imageDom.width / imageDom.height
  } else {
    imgRatio = (imageDom.naturalWidth || imageDom.width) / (imageDom.naturalHeight || imageDom.height)
  }

  if (imgRatio > 1) {
    tempCanvas.width = maxSize
    tempCanvas.height = maxSize / imgRatio
  } else {
    tempCanvas.height = maxSize
    tempCanvas.width = maxSize * imgRatio
  }

  tempContext.drawImage(imageDom, 0, 0, tempCanvas.width, tempCanvas.height)

  return tempCanvas.toDataURL('image/png')
}


export default resizeImageAndGetBase64
