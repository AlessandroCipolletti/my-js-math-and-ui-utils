
const tempCanvas = document.createElement('canvas')
const tempContext = tempCanvas.getContext('2d') as CanvasRenderingContext2D


/**
 * @function addImageOutlineAndGetBase64
 * Adds an outline around the filled part of the image.
 *
 * @param {HTMLCanvasElement|HTMLImageElement} imageDom
 * @param {string} outlineColor
 * @returns {string}
 */
const addImageOutlineAndGetBase64 = (
  imageDom: HTMLCanvasElement|HTMLImageElement,
  outlineColor: string,
): string => {

  if (imageDom instanceof HTMLCanvasElement) {
    tempCanvas.width = imageDom.width
    tempCanvas.height = imageDom.height
  } else {
    tempCanvas.width = (imageDom.naturalWidth || imageDom.width)
    tempCanvas.height = (imageDom.naturalHeight || imageDom.height)
  }

  const offets = [-1,-1, 0,-1, 1,-1, -1,0, 1,0, -1,1, 0,1, 1,1]
  const thickness = Math.max(tempCanvas.width, tempCanvas.height) * 0.0015

  for (let i = 0; i < offets.length; i += 2) {
    tempContext.drawImage(imageDom, offets[i] * thickness, offets[i+1] * thickness)
  }

  // fill with color
  tempContext.globalCompositeOperation = 'source-in'
  tempContext.fillStyle = outlineColor
  tempContext.fillRect(0, 0, tempCanvas.width, tempCanvas.height)

  // draw original image in normal mode
  tempContext.globalCompositeOperation = 'source-over'
  tempContext.drawImage(imageDom, 0, 0)

  return tempCanvas.toDataURL('image/png')
}


export default addImageOutlineAndGetBase64
