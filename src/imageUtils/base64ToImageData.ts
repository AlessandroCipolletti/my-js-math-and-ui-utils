import getImageFromUrlAsync from './getImageFromUrlAsync'


const tempCanvas = document.createElement('canvas')
const tempContext = tempCanvas.getContext('2d') as CanvasRenderingContext2D


/**
 * @function base64ToImageData
 * Gets the canvas context imageData from a image base64.
 * if x / y / width / height params are given, it returns only the selected portion of the image.
 *
 * @param {string} base64
 * @param {number} [x = 0]
 * @param {number} [y = 0]
 * @param {number} [width = 0]
 * @param {number} [height = 0]
 * @return {Promise<Uint8ClampedArray>}
 */
const base64ToImageData = async(
  base64: string,
  x = 0,
  y = 0,
  width = 0,
  height = 0,
): Promise<Uint8ClampedArray> => {

  const img = await getImageFromUrlAsync(base64, true)

  tempCanvas.width = width || img.naturalWidth || img.width
  tempCanvas.height = height || img.naturalHeight || img.height
  tempContext.drawImage(img, x, y)

  return tempContext.getImageData(x, y, tempCanvas.width, tempCanvas.height).data
}


export default base64ToImageData
