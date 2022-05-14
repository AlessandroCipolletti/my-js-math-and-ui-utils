import { defaultMaxImageSideSize } from './setDefaultMaxImageSideSize'


const tempCanvas = document.createElement('canvas')
const tempContext = tempCanvas.getContext('2d') as CanvasRenderingContext2D


/**
 * @function resizeImageAndGetLocalUrl
 * Resize an image, get a Blob, and returns a localURL to load the new resized image
 *
 * @param {HTMLImageElement} image
 * @param {number} [maxSize] Default defaultMaxImageSideSize
 * @return {Promise<string>}
 */
const resizeImageAndGetLocalUrl = (
  image: HTMLImageElement,
  maxSize: number = defaultMaxImageSideSize,
): Promise<string> => {
  
  return new Promise<string>((resolve) => {
    const imgRatio: number = (image.naturalWidth || image.width) / (image.naturalHeight || image.height)

    if (imgRatio > 1) {
      tempCanvas.width = maxSize
      tempCanvas.height = maxSize / imgRatio
    } else {
      tempCanvas.height = maxSize
      tempCanvas.width = maxSize * imgRatio
    }

    tempContext.drawImage(image, 0, 0, tempCanvas.width, tempCanvas.height)
    tempCanvas.toBlob((blob) => {
      if (blob) {
        resolve(URL.createObjectURL(blob))
      } else {
        resolve('')
      }
    })
  })
}


export default resizeImageAndGetLocalUrl
