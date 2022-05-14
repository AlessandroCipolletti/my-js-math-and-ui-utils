
const tempCanvas = document.createElement('canvas')
const tempContext = tempCanvas.getContext('2d') as CanvasRenderingContext2D

/**
 * @function addImageWhiteBgAndGetBase64
 * Takes a image (or a canvas), adds a white background, and returns the new base64.
 *
 * @param {HTMLCanvasElement|HTMLImageElement} imageDom
 * @returns {string}
 */
const addImageWhiteBgAndGetBase64 = (imageDom: HTMLCanvasElement|HTMLImageElement): string => {
  if (imageDom instanceof HTMLCanvasElement) {
    tempCanvas.width = imageDom.width
    tempCanvas.height = imageDom.height
  } else {
    tempCanvas.width = imageDom.naturalWidth || imageDom.width
    tempCanvas.height = imageDom.naturalHeight || imageDom.height
  }

  tempContext.fillStyle = '#FFFFFF'
  tempContext.fillRect(0, 0, tempCanvas.width, tempCanvas.height)
  tempContext.drawImage(imageDom, 0, 0, tempCanvas.width, tempCanvas.height)

  return tempCanvas.toDataURL('image/png')
}


export default addImageWhiteBgAndGetBase64
