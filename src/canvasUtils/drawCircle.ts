
/**
 * @function drawCircle
 * Draw a circle on a canvas context, in a standardized way.
 * Takes care of position {x, y}, size, alpha, color and blur.
 *
 * @example
 * drawCircle(myContext, 100, 100, '#123456', 20, 0.5)
 *
 * @param {MyCanvasRenderingContext2D} destinationContext
 * @param {number} x
 * @param {number} y
 * @param {string} color
 * @param {number} size
 * @param {number} alpha
 * @param {number} [_ = 0]
 * @param {number} [blur = 0]
 * @returns {void}
 */
const drawCircle = (
  destinationContext: MyCanvasRenderingContext2D,
  x: number,
  y: number,
  color: string,
  size: number,
  alpha: number,
  _ = 0,
  blur = 0
): void => {

  destinationContext.beginPath()
  destinationContext.fillStyle = color
  destinationContext.globalAlpha = alpha
  destinationContext.lineJoin = 'round'
  destinationContext.lineCap = 'round'
  destinationContext.lastDrawCoordX = x
  destinationContext.lastDrawCoordY = y

  if (blur) {
    destinationContext.shadowColor = color
    destinationContext.shadowBlur = blur
  } else {
    destinationContext.shadowColor = ''
    destinationContext.shadowBlur = 0
  }

  destinationContext.arc(x, y, size / 2, 0, 2 * Math.PI, true)
  destinationContext.fill()
  destinationContext.closePath()
}


export default drawCircle
