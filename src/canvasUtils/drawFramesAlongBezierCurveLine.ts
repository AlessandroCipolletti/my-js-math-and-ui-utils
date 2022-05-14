import getQuadraticBezierCurveLength from '../mathUtils/getQuadraticBezierCurveLength'
import getPercentageOfValue from '../mathUtils/getPercentageOfValue'
import roundNumber from '../mathUtils/roundNumber'
import getQuadraticBezierValueAtTime from '../mathUtils/getQuadraticBezierValueAtTime'
import getDistanceBetweenThreePoints from '../mathUtils/getDistanceBetweenThreePoints'
import distanceBetweenTwoPointsGreaterThan from '../mathUtils/distanceBetweenTwoPointsGreaterThan'


/**
 * @typeof FrameFunction
 * @prop {MyCanvasRenderingContext2D} destinationContext
 * @prop {number} x
 * @prop {number} y
 * @prop {string} color
 * @prop {number} size
 * @prop {number} alpha
 * @prop {number} [rotation]
 * @prop {number} [blur]
 * @returns {void}
 */
interface FrameFunction {
  (
    destinationContext: MyCanvasRenderingContext2D,
    x: number,
    y: number,
    color: string,
    size: number,
    alpha: number,
    rotation?: number,
    blur?: number,
  ): void
}

/**
 * @typeof PointCoords
 * @prop {number} x
 * @prop {number} y
 */
interface PointCoords {
  x: number,
  y: number,
}


/**
 * @function drawFramesAlongBezierCurveLine
 * Draws a curved line filled with the given frame
 * (bezier curve line defined by three points {x, y})
 * (size, alpha and rotation, change lineraly)
 * (sizeToFramesRatio indicates how many frame should be contained in a `${size}` amount of pixels)
 * (if frameSize === 10 and sizeToFramesRatio === 1/2, frame distance will be 5 px
 *
 * @example
 * drawFramesAlongBezierCurveLine(myContext, drawCircle, '#123456', 10, 20, 0.5, 0.9, Math.PI, Math.PI/2, 3, 1/10, { x: 10, y: 10 }, { x: 30, y: 50 }, { x: 20, y: 40 })
 *
 * @param {MyCanvasRenderingContext2D} destinationContext
 * @param {FrameFunction} frameFunction
 * @param {string} frameColor
 * @param {number} initialSize
 * @param {number} finalSize
 * @param {number} initialAlpha
 * @param {number} finalAlpha
 * @param {number} initialRotation
 * @param {number} finalRotation
 * @param {number} minPxDistanceBetweenFrames
 * @param {number} sizeToFramesRatio
 * @param {PointCoords} p1
 * @param {PointCoords} p2
 * @param {PointCoords} p3
 * @returns {boolean} if it drew something
 */
const drawFramesAlongBezierCurveLine = (
  destinationContext: MyCanvasRenderingContext2D,
  frameFunction: FrameFunction,
  frameColor: string,
  initialSize: number,
  finalSize: number,
  initialAlpha: number,
  finalAlpha: number,
  initialRotation: number,
  finalRotation: number,
  minPxDistanceBetweenFrames: number,
  sizeToFramesRatio: number,
  p1: PointCoords,
  p2: PointCoords,
  p3: PointCoords,
): boolean => {

  let drewSomething = false
  let i = 0
  const deltaAlpha = finalAlpha - initialAlpha
  const deltaSize = finalSize - initialSize
  const deltaRotation = finalRotation - initialRotation
  const curveLength =
    getQuadraticBezierCurveLength(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, 1) ||
    getDistanceBetweenThreePoints(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, 1)

  while (i <= curveLength) {
    const t = getPercentageOfValue(i, curveLength) / 100
    const frameX = roundNumber(getQuadraticBezierValueAtTime(t, p1.x, p2.x, p3.x), 1)
    const frameY = roundNumber(getQuadraticBezierValueAtTime(t, p1.y, p2.y, p3.y), 1)
    const frameSize = roundNumber(initialSize + deltaSize * t, 1)
    const pxDistanceNeededFromLastFrame = roundNumber(Math.max(minPxDistanceBetweenFrames, frameSize * sizeToFramesRatio), 1)
    const farEnoughFromLastFrame = distanceBetweenTwoPointsGreaterThan(
      destinationContext.lastDrawCoordX,
      destinationContext.lastDrawCoordY,
      frameX,
      frameY,
      pxDistanceNeededFromLastFrame,
    )

    if (farEnoughFromLastFrame) {
      const frameAlpha = roundNumber(initialAlpha + deltaAlpha * t, 4)
      const frameRotation = initialRotation + deltaRotation * t
      frameFunction(destinationContext, frameX, frameY, frameColor, frameAlpha, frameSize, frameRotation)
      drewSomething = true
    }

    i += 0.5
  }

  return drewSomething
}


export default drawFramesAlongBezierCurveLine
