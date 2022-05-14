import roundNumber from '../mathUtils/roundNumber'
import getRandomNumber from '../mathUtils/getRandomNumber'


/**
 * @function drawParticlesRect
 * Draw a rect made of particles
 * Takes care of position {x, y}, size, alpha and color.
 * TODO take care of rotation
 *
 * @example
 * drawParticlesRect(myContext, 100, 100, '#123456', 20, 0.5)
 *
 * @param {MyCanvasRenderingContext2D} destinationContext
 * @param {number} x
 * @param {number} y
 * @param {string} color
 * @param {number} size
 * @param {number} alpha
 * @return {void}
 */
const drawParticlesRect = (
  destinationContext: MyCanvasRenderingContext2D,
  x: number,
  y: number,
  color: string,
  size: number,
  alpha: number,
): void => {

  destinationContext.lastDrawCoordX = x
  destinationContext.lastDrawCoordY = y
  size = roundNumber(size)
  destinationContext.globalAlpha = alpha
  destinationContext.fillStyle = color
  const s2 = size / 2
  
  for (let i = 0, l = size * (size + 1); i < l; i++) {
    x = roundNumber(x + getRandomNumber(size) - s2, 1)
    y = roundNumber(y + getRandomNumber(size) - s2, 1)

    destinationContext.fillRect(x, y, 1, 1)
  }
}


export default drawParticlesRect
