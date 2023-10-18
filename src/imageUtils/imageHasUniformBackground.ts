import valuesAreSimilar from '../mathUtils/valuesAreSimilar'


const tempCanvas = document.createElement('canvas')
const tempContext = tempCanvas.getContext('2d') as CanvasRenderingContext2D


/**
 * @function imageHasUniformBackground
 * Checks if the given image (or canvas) has a uniform background.
 * It compares the 4 coorners, and you can specify the tolerance level [0...255]
 *
 * @param {HTMLCanvasElement|HTMLImageElement} imageDom
 * @param {number} [tolerance = 3] [0...255]
 * @returns {boolean}
 */
const imageHasUniformBackground = (
  imageDom: HTMLCanvasElement|HTMLImageElement,
  tolerance = 3
): boolean => {

  if (imageDom instanceof HTMLCanvasElement) {
    tempCanvas.width = imageDom.width
    tempCanvas.height = imageDom.height
  } else {
    tempCanvas.width = (imageDom.naturalWidth || imageDom.width)
    tempCanvas.height = (imageDom.naturalHeight || imageDom.height)
  }

  tempContext.drawImage(imageDom, 0, 0, tempCanvas.width, tempCanvas.height)
  const imageData: Uint8ClampedArray = tempContext.getImageData(0, 0, tempCanvas.width, tempCanvas.height).data

  const pxTL = {
    r: imageData[0],
    g: imageData[1],
    b: imageData[2],
    a: imageData[3],
  }
  const pxTR = {
    r: imageData[((tempCanvas.width - 1) * 4) + 0],
    g: imageData[((tempCanvas.width - 1) * 4) + 1],
    b: imageData[((tempCanvas.width - 1) * 4) + 2],
    a: imageData[((tempCanvas.width - 1) * 4) + 3],
  }
  const pxBL = {
    r: imageData[((tempCanvas.width * (tempCanvas.height - 1)) * 4) + 0],
    g: imageData[((tempCanvas.width * (tempCanvas.height - 1)) * 4) + 1],
    b: imageData[((tempCanvas.width * (tempCanvas.height - 1)) * 4) + 2],
    a: imageData[((tempCanvas.width * (tempCanvas.height - 1)) * 4) + 3],
  }
  const pxBR = {
    r: imageData[imageData.length - 4],
    g: imageData[imageData.length - 3],
    b: imageData[imageData.length - 2],
    a: imageData[imageData.length - 1],
  }

  return (
    valuesAreSimilar([pxTL.r, pxTR.r, pxBL.r, pxBR.r], tolerance) &&
    valuesAreSimilar([pxTL.g, pxTR.g, pxBL.g, pxBR.g], tolerance) &&
    valuesAreSimilar([pxTL.b, pxTR.b, pxBL.b, pxBR.b], tolerance) &&
    valuesAreSimilar([pxTL.a, pxTR.a, pxBL.a, pxBR.a], tolerance)
  )
}


export default imageHasUniformBackground
