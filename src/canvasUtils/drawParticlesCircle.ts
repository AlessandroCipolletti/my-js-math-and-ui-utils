import roundNumber from '../mathUtils/roundNumber'
import getRandomNumber from '../mathUtils/getRandomNumber'


/**
 * @function drawParticlesCircle
 * Draw a circle made of particles
 * Takes care of position {x, y}, size, alpha and color.
 *
 * @example
 * drawParticlesCircle(myContext, 100, 100, '#123456', 20, 0.5)
 *
 * @param {MyCanvasRenderingContext2D} destinationContext
 * @param {number} x
 * @param {number} y
 * @param {string} color
 * @param {number} size
 * @param {number} alpha
 * @returns {void}
 */
const drawParticlesCircle = (
  destinationContext: MyCanvasRenderingContext2D,
  x: number,
  y: number,
  color: string,
  size: number,
  alpha: number
): void => {

  destinationContext.lastDrawCoordX = x
  destinationContext.lastDrawCoordY = y
  size = roundNumber(size)
  destinationContext.globalAlpha = alpha
  destinationContext.fillStyle = color

  for (let i = 0, l = size * size; i < l; i++) {
    const angle = getRandomNumber(2 * Math.PI)
    const radius = getRandomNumber(size) + 1
    x = roundNumber(x + radius * Math.cos(angle), 1)
    y = roundNumber(y + radius * Math.sin(angle), 1)
    const width = getRandomNumber(2) + 1
    const height = (width === 2 ? 1 : getRandomNumber(2) + 1)

    destinationContext.fillRect(x, y, width, height)
  }
}


export default drawParticlesCircle
