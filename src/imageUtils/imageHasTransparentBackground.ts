
const tempCanvas = document.createElement('canvas')
const tempContext = tempCanvas.getContext('2d') as CanvasRenderingContext2D


/**
 * @function imageHasTransparentBackground
 * Checks if the given image has a transparent background
 *
 * @param {HTMLCanvasElement|HTMLImageElement} imageDom
 * @return {boolean}
 */
const imageHasTransparentBackground = (imageDom: HTMLCanvasElement|HTMLImageElement): boolean => {
  if (imageDom instanceof HTMLCanvasElement) {
    tempCanvas.width = imageDom.width
    tempCanvas.height = imageDom.height
  } else {
    tempCanvas.width = (imageDom.naturalWidth || imageDom.width)
    tempCanvas.height = (imageDom.naturalHeight || imageDom.height)
  }

  tempContext.drawImage(imageDom, 0, 0, tempCanvas.width, tempCanvas.height)
  const imageData: Uint8ClampedArray = tempContext.getImageData(0, 0, tempCanvas.width, tempCanvas.height).data

  const pxTLa = imageData[3]
  const pxTRa = imageData[((tempCanvas.width - 1) * 4) + 3]
  const pxBLa = imageData[((tempCanvas.width * (tempCanvas.height - 1)) * 4) + 3]
  const pxBRa = imageData[imageData.length - 1]

  return pxTLa === 0 && pxTRa === 0 && pxBLa === 0 && pxBRa === 0
}


export default imageHasTransparentBackground
