
/**
 * @function flipImage
 * Takes an image (or a canvas) and flip it vertically or horizontally.
 * Returns a canvas with the same size of the original image.
 *
 * @param {HTMLCanvasElement|HTMLImageElement} imageDom
 * @param {boolean} [horizontally = true]
 * @return {HTMLCanvasElement}
 */
const flipImage = (
  imageDom: HTMLCanvasElement|HTMLImageElement,
  horizontally = true,
): HTMLCanvasElement => {

  const canvas: HTMLCanvasElement = document.createElement('canvas')
  const context = canvas.getContext('2d') as CanvasRenderingContext2D

  if (imageDom instanceof HTMLCanvasElement) {
    canvas.width = imageDom.width
    canvas.height = imageDom.height
  } else {
    canvas.width = imageDom.naturalWidth || imageDom.width
    canvas.height = imageDom.naturalHeight || imageDom.height
  }

  if (horizontally) {
    context.scale(-1, 1)
    context.drawImage(imageDom, canvas.width * -1, 0, canvas.width, canvas.height)
  } else {
    context.scale(1, -1)
    context.drawImage(imageDom, 0, canvas.height * -1, canvas.width, canvas.height)
  }

  return canvas
}


export default flipImage
