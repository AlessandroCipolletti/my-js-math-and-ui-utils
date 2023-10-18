import roundNumber from '../mathUtils/roundNumber'
import getRandomNumber from '../mathUtils/getRandomNumber'


/**
 * @typeof ParticlesListItem
 * @prop {number} length
 * @prop {Array} numbers
 */
interface ParticlesListItem {
  length: number,
  numbers: Array<number>,
}


/**
 * @function drawSprayCircle
 * Draw  a spray circle.
 * Takes care of position {x, y}, size, alpha and color.
 *
 * @example
 * drawSprayCircle(myContext, 100, 100, '#123456', 20, 0.5)
 *
 * @param {MyCanvasRenderingContext2D} destinationContext
 * @param {number} x
 * @param {number} y
 * @param {string} color
 * @param {number} size
 * @param {number} alpha
 * @returns {void}
 */
const drawSprayCircle = (
  destinationContext: MyCanvasRenderingContext2D,
  x: number,
  y: number,
  color: string,
  size: number,
  alpha: number
): void => {

  destinationContext.lastDrawCoordX = x
  destinationContext.lastDrawCoordY = y
  size = roundNumber(size, 0)
  destinationContext.fillStyle = color
  if (!_particlesLists[size]) {
    _initParticlesListFor(size)
  }
  const sizeList = _particlesLists[size].numbers
  const sizeListL = _particlesLists[size].length
  const variability = 2

  for (let i = 0, l = size * 4; i < l; i++) {
    const angle = getRandomNumber(2 * Math.PI, 0, 12)
    const radius = sizeList[getRandomNumber(sizeListL, 0, 0)] + 2
    alpha = Math.max(alpha * (1 - radius / size), 0)
    x = roundNumber(x + radius * Math.cos(angle), 1)
    y = roundNumber(y + radius * Math.sin(angle), 1)
    const width = getRandomNumber(variability, 1, 0) + 1
    const height = getRandomNumber(variability, 1, 0) + 1

    destinationContext.globalAlpha = alpha
    destinationContext.fillRect(x, y, width, height)
  }
}


/**
 * @function _particlesLists
 * Used to cache numbers and make _initParticlesListFor faster.
 */
const _particlesLists: Record<number, ParticlesListItem> = {}


/**
 * @function _initParticlesListFor
 * Return a ParticlesListItem to generate a homogeneous spray circle
 *
 * @param {numner} size
 * @returns {ParticlesListItem}
 */
const _initParticlesListFor = (size: number): void => {
  _particlesLists[size] = {
    numbers: [],
    length: 0,
  }

  for (let i = 1; i <= size; i++) {
    for (let j = 0, l = size + (10 * i) ; j < l; j++) {
      _particlesLists[size].numbers.push(i)
    }
  }

  _particlesLists[size].length = _particlesLists[size].numbers.length
}


export default drawSprayCircle
