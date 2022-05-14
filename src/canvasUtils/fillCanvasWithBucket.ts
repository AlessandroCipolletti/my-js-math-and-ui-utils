import { v4 as uuidv4 } from 'uuid'

import waitWorkerMessage from '../jsUtils/waitWorkerMessage'
import colorStringToRgb from '../colorsUtils/colorStringToRgb'
import compareRgbColorsWithTolerance from '../colorsUtils/compareRgbColorsWithTolerance'
import roundNumber from '../mathUtils/roundNumber'


const bucketWorker: Worker = new Worker('../workers/bucket.js')

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
const fillCanvasWithBucket = (
  destinationContext: MyCanvasRenderingContext2D,
  x: number,
  y: number,
  color: string,
): false|Promise<void> => {

  const i: number = (Math.floor(x) + Math.floor(y) * destinationContext.canvas.width) * 4
  const onePxLineArrayLength: number = destinationContext.canvas.width * 4
  const image: ImageData = destinationContext.getImageData(
    0,
    0,
    destinationContext.canvas.width,
    destinationContext.canvas.height,
  )
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
  bucketWorker.postMessage({
    id,
    bucketData: image.data,
    i,
    onePxLineArrayLength,
    targetColor,
    fillColor,
    boundariesWeekMode,
    tolerance,
  })

  return waitWorkerMessage(bucketWorker, id).then((data: any) => {
    const bucketData: Uint8ClampedArray = data.bucketData
    destinationContext.putImageData(new ImageData(bucketData, image.width, image.height), 0, 0)
  })
}


/**
 * @function _bucketHistoryContainsColor
 * Checks if the current color has been used recently.
 * This is used to choose between normal and week boundaries mode.
 *
 * @param {RgbaColorObject} color
 * @param {number} [tolerance = 1]
 * @return {boolean}
 */
const _bucketHistoryContainsColor = (color: RgbaColorObject, tolerance = 1): boolean => {
  return !!_bucketColorsHistory.find(
    (c: RgbaColorObject) => !(
      Math.abs(c.r - color.r) > tolerance ||
      Math.abs(c.g - color.g) > tolerance ||
      Math.abs(c.b - color.b) > tolerance
    )
  )
}


/**
 * This choose when to user week boundaries mode, looking at target and fill colors.
 * Week boundaires mode means than one last px is coloured when the algoritm touches the boundaries
 * of the clicked zone.
 *
 * @param {RgbaColorObject} targetColor The clicled color
 * @param {RgbaColorObject} fillColor The desider color
 * @return {boolean}
 */
const _getBucketBoundariesWeakMode = (
  targetColor: RgbaColorObject,
  fillColor: RgbaColorObject,
): boolean => {

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


export default fillCanvasWithBucket
