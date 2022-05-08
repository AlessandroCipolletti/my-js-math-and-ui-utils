import { v4 as uuidv4 } from 'uuid'

import {
  roundNumber,
  getRandomNumber,
  getQuadraticBezierCurveLength,
  getDistanceBetweenThreePoints,
  getPercentageOfValue,
  distanceBetweenTwoPointsGreaterThan,
  getQuadraticBezierValueAtTime,
} from './mathUtils'
import { waitWorkerMessage } from './jsUtils'
import { colorStringToRgb, compareRgbColorsWithTolerance } from './colorsUtils'


const bucketWorker: Worker = new Worker('./workers/bucket.ts')


/**
 * @const MATH
 * Local alias for Math object
 */
const MATH = Math

/**
 * @const PI
 * Local alias for Math.PI number
 * @type {number}
 */
const PI = MATH.PI


/* INTERFACES */


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
 * @typeof ParticlesListItem
 * @prop {number} length
 * @prop {Array} numbers
 */
interface ParticlesListItem {
  length: number,
  numbers: Array<number>,
}

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
 * @return {void}
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


/* FRAMES FUNCTIONS */

/**
 * I created a standardized way to interact with a html canvas context.
 * All the single frame primitives (circle, particles, etc) take the same input parameters
 * in order to be able to easily exchange between them.
 * Rotation is in radians.
 */

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
 * @return {void}
 */
export const drawCircle = (
  destinationContext: MyCanvasRenderingContext2D,
  x: number,
  y: number,
  color: string,
  size: number,
  alpha: number,
  _ = 0,
  blur = 0,
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

  destinationContext.arc(x, y, size / 2, 0, 2 * PI, true)
  destinationContext.fill()
  destinationContext.closePath()
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
 * @return {ParticlesListItem}
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
 * @return {void}
 */
export const drawSprayCircle = (
  destinationContext: MyCanvasRenderingContext2D,
  x: number,
  y: number,
  color: string,
  size: number,
  alpha: number,
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
    const angle = getRandomNumber(2 * PI, 0, 12)
    const radius = sizeList[getRandomNumber(sizeListL, 0, 0)] + 2
    alpha = Math.max(alpha * (1 - radius / size), 0)
    x = roundNumber(x + radius * MATH.cos(angle), 1)
    y = roundNumber(y + radius * MATH.sin(angle), 1)
    const width = getRandomNumber(variability, 1, 0) + 1
    const height = getRandomNumber(variability, 1, 0) + 1

    destinationContext.globalAlpha = alpha
    destinationContext.fillRect(x, y, width, height)
  }
}

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
export const drawParticlesRect = (
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
 * @return {void}
 */
export const drawParticlesCircle = (
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
  for (let i = 0, l = size * size; i < l; i++) {
    const angle = getRandomNumber(2 * PI)
    const radius = getRandomNumber(size) + 1
    x = roundNumber(x + radius * MATH.cos(angle), 1)
    y = roundNumber(y + radius * MATH.sin(angle), 1)
    const width = getRandomNumber(2) + 1
    const height = (width === 2 ? 1 : getRandomNumber(2) + 1)

    destinationContext.fillRect(x, y, width, height)
  }
}


/* DRAW A CURVED FRAME LINE */

/**
 * @function drawFramesAlongBezierCurveLine
 * Draws a curved line filled with the given frame
 * (bezier curve line defined by three points {x, y})
 * (size, alpha and rotation, change lineraly)
 * (sizeToFramesRatio indicates how many frame should be contained in a `${size}` amount of pixels)
 * (if frameSize === 10 and sizeToFramesRatio === 1/2, frame distance will be 5 px
 *
 * @example
 * drawFramesAlongBezierCurveLine(myContext, drawCircle, '#123456', 10, 20, 0.5, 0.9, PI, PI/2, 3, 1/10, { x: 10, y: 10 }, { x: 30, y: 50 }, { x: 20, y: 40 })
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
 * @return {boolean} if it drew something
 */
export const drawFramesAlongBezierCurveLine = (
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


/* PURE CANVAS UTILS */


/**
 * @function fillCanvasWithImage
 * Fill a canvas with the given image.
 * It clears the canvas first, and it takes care of x, y, desired width, desired height, and rotation.
 *
 * @example
 * fillCanvasWithImage(myContext, myImage) // ==> from 0,0, using image width and height
 * fillCanvasWithImage(myContext, myImage, 100, 100, 350, 200) // ==> from 100,100, width 350 height 200
 * fillCanvasWithImage(myContext, myImage, 100, 100, 350, 200, PI/2) // ==> image rotated ba 90 degrees
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
export const fillCanvasWithImage = (
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

/**
 * @function canvasIsEvenlyColored
 * Checks if the whole canvas is filled with the same rgba color
 * (or if it's all transparent)
 *
 * @example
 * canvasIsEvenlyColored(mycontext) // ==> true | false
 *
 * @param {MyCanvasRenderingContext2D} destinationContext
 * @return {boolean}
 */
export const canvasIsEvenlyColored = (destinationContext: MyCanvasRenderingContext2D): boolean => {
  const data = destinationContext.getImageData(0, 0, destinationContext.canvas.width, destinationContext.canvas.height).data
  let ok = true
  let i = data.length
  const r = data[0], g = data[1], b = data[2], a = data[3]

  while (i--) {
    if (!(data[i] === a && data[--i] === b && data[--i] === g && data[--i] === r)) {
      ok = false
      break
    }
  }

  // ok = data.every((e, i, arr) => e === arr[i % 4])
  return ok
}

/**
 * @function getCanvasRgbaColorAtPx
 * Get rgba values at the selected canvas coords
 *
 * @example
 * getCanvasRgbaColorAtPx(myContext, 100, 200)
 *
 * @param {MyCanvasRenderingContext2D} destinationContext
 * @param {number} x
 * @param {number} y
 * @return {RgbaColorObject}
 */
export const getCanvasRgbaColorAtPx = (destinationContext: MyCanvasRenderingContext2D, x: number, y: number): RgbaColorObject => {
  const canvasData = destinationContext.getImageData(0, 0, destinationContext.canvas.width, destinationContext.canvas.height)
  const pxIndex = (MATH.floor(x) + MATH.floor(y) * destinationContext.canvas.width) * 4
  return {
    r: canvasData.data[pxIndex + 0],
    g: canvasData.data[pxIndex + 1],
    b: canvasData.data[pxIndex + 2],
    a: canvasData.data[pxIndex + 3],
  }
}

/**
 * @function fillCompletely
 * Fill the whole canvas with the given color
 *
 * @param {MyCanvasRenderingContext2D} destinationContext
 * @param {string} color
 * @param {number} [alpha = 1] from 0 to 1
 * @return {void}
 */
export const fillCompletely = (
  destinationContext: MyCanvasRenderingContext2D,
  color: string,
  alpha = 1,
): void => {
  destinationContext.fillStyle = color
  destinationContext.globalAlpha = alpha
  destinationContext.globalCompositeOperation = 'source-over'
  destinationContext.fillRect(0, 0, destinationContext.canvas.width, destinationContext.canvas.height)
}


/* BUCKET UTILS */


const _bucketConfig = {
  _bucketColorsHistorySize: 150,
  bucketColorsToleranceWithTransparency: 24,
  bucketColorsToleranceWithoutTransparency: 4,
}
const _bucketColorsHistory:Array<RgbaColorObject> = []

/**
 * @function fillWithBucket
 * Bucket fill a canvas, at { x, y } coord, with the given color.
 * This will fill the selected shape inside the canvas, starting from the given coords.
 * `boundariesWeekMode` defines if or not fill the border px line at the boundaries of the shape.
 *
 * This is a little tricky. If no fill is required, it returns false synchronously.
 * Otherwise it returns a promise that fill the canvas asynchronously.
 * This allow the caller to know immediately if the bucket is working,
 * and at the same time it can await the fill, or attach something else with .then()
 *
 * @example
 * await fillWithBucket(myContext, 100, 200, '#12345')
 *
 * @param {MyCanvasRenderingContext2D} destinationContext
 * @param {number} x
 * @param {number} y
 * @param {string} color
 * @return {false|Promise<void>}
 */
export const fillWithBucket = (
  destinationContext: MyCanvasRenderingContext2D,
  x: number,
  y: number,
  color: string,
): false|Promise<void> => {
  const image: ImageData = destinationContext.getImageData(0, 0, destinationContext.canvas.width, destinationContext.canvas.height)
  const i: number = (MATH.floor(x) + MATH.floor(y) * destinationContext.canvas.width) * 4
  const onePxLineArrayLength: number = destinationContext.canvas.width * 4

  const targetColor: RgbaColorObject = {
    r: image.data[i + 0],
    g: image.data[i + 1],
    b: image.data[i + 2],
    a: image.data[i + 3],
  }
  const tolerance: number = (
    targetColor.a < 255 && targetColor.r + targetColor.g + targetColor.b > 0 ?
      _bucketConfig.bucketColorsToleranceWithTransparency :
      _bucketConfig.bucketColorsToleranceWithoutTransparency
  )

  const fillColor = colorStringToRgb(color) as RgbaColorObject
  fillColor.a = roundNumber(fillColor.a * 255, 0)

  // if target color and fill color are the same (within tolerance) I do nothing
  if (image.data[i + 3] > 0 && compareRgbColorsWithTolerance(targetColor, fillColor, tolerance)) {
    return false
  }

  // if target color has a transparency, every pixel to fill will be filled keeping its current transparency
  fillColor.a = targetColor.a === 0 ? 255 : 0
  const boundariesWeekMode = _getBucketBoundariesWeakMode(targetColor, fillColor)

  const id = uuidv4()
  bucketWorker.postMessage({ id, bucketData: image.data, i, onePxLineArrayLength, targetColor, fillColor, boundariesWeekMode, tolerance })
  return waitWorkerMessage(bucketWorker, id).then((data: any) => {
    const bucketData: Uint8ClampedArray = data.bucketData
    destinationContext.putImageData(new ImageData(bucketData, image.width, image.height), 0, 0)
  })
}

const _bucketHistoryContainsColor = (color: RgbaColorObject, tolerance = 1): boolean => {
  return !!_bucketColorsHistory.find(
    (c: RgbaColorObject) => !(
      Math.abs(c.r - color.r) > tolerance ||
      Math.abs(c.g - color.g) > tolerance ||
      Math.abs(c.b - color.b) > tolerance
    )
  )
}

const _getBucketBoundariesWeakMode = (targetColor: RgbaColorObject, fillColor: RgbaColorObject) => {
  if (targetColor.a === 0) {
    // if (!_bucketHistoryContainsColor(fill)) {
    //   _bucketColorsHistory.push(fill)
    //   _bucketColorsHistory.splice(0, _bucketColorsHistory.length - _bucketConfig._bucketColorsHistorySize)
    // }
    return true
  }

  const target = { ...targetColor }
  const fill = { ...fillColor }
  const boundariesWeekMode = (!_bucketHistoryContainsColor(target))

  if (!_bucketHistoryContainsColor(fill)) {
    _bucketColorsHistory.push(fill)
    _bucketColorsHistory.splice(0, _bucketColorsHistory.length - _bucketConfig._bucketColorsHistorySize)
  }

  return boundariesWeekMode
}
