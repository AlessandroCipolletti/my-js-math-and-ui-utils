
/**
 * @function fillCanvasWithImage
 * Fill a canvas with the given image.
 * It clears the canvas first, and it takes care of x, y, desired width, desired height, and rotation.
 *
 * @example
 * fillCanvasWithImage(myContext, myImage) // ==> from 0,0, using image width and height
 * fillCanvasWithImage(myContext, myImage, 100, 100, 350, 200) // ==> from 100,100, width 350 height 200
 * fillCanvasWithImage(myContext, myImage, 100, 100, 350, 200, Math.PI/2) // ==> image rotated ba 90 degrees
 *
 * @param {MyCanvasRenderingContext2D} destinationContext
 * @param {HTMLImageElement} image
 * @param {number} [x = 0]
 * @param {number} [y = 0]
 * @param {number} [w = 0]
 * @param {number} [h = 0]
 * @param {number} [rotation = 0]
 * @return {void}
 */
const fillCanvasWithImage = (
  destinationContext: MyCanvasRenderingContext2D,
  image: HTMLImageElement,
  x = 0,
  y = 0,
  w = 0,
  h = 0,
  rotation = 0,
): void => {

  destinationContext.clearRect(0, 0, destinationContext.canvas.width, destinationContext.canvas.height)
  destinationContext.globalAlpha = 1
  destinationContext.globalCompositeOperation = 'source-over'
  w = w || image.width || image.naturalWidth
  h = h || image.height || image.naturalHeight

  if (rotation) {
    destinationContext.translate(x + w / 2, y + h / 2)
    destinationContext.rotate(rotation)
    destinationContext.drawImage(image, -w / 2, -h / 2, w, h)
    destinationContext.rotate(-rotation)
    destinationContext.translate(-x - w / 2, -y - h / 2)
  } else {
    destinationContext.drawImage(image, x, y, w, h)
  }
}


export default fillCanvasWithImage
