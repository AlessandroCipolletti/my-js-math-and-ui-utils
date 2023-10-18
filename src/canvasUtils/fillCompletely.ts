
/**
 * @function fillCompletely
 * Fill the whole canvas with the given color
 *
 * @param {MyCanvasRenderingContext2D} destinationContext
 * @param {string} color
 * @param {number} [alpha = 1] from 0 to 1
 * @returns {void}
 */
const fillCompletely = (
  destinationContext: MyCanvasRenderingContext2D,
  color: string,
  alpha = 1
): void => {

  destinationContext.fillStyle = color
  destinationContext.globalAlpha = alpha
  destinationContext.globalCompositeOperation = 'source-over'
  destinationContext.fillRect(0, 0, destinationContext.canvas.width, destinationContext.canvas.height)
}


export default fillCompletely
