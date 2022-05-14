import { v4 as uuidv4 } from 'uuid'

import roundNumber from '../mathUtils/roundNumber'
import waitWorkerMessage from '../jsUtils/waitWorkerMessage'
import convertImgToCanvas from './convertImgToCanvas'


const canvasContentCoordsWorker = new Worker('./workers/canvasContentCoords.js')

/**
 * @typedef CanvasCoordsResponse
 * Interface returned from the canvasContentCoordsWorker
 *
 * @prop {string} [id]
 * @prop {number} minX
 * @prop {number} minY
 * @prop {number} maxX
 * @prop {number} maxY
 */
interface CanvasCoordsResponse {
  id?: string,
  minX: number,
  minY: number,
  maxX: number,
  maxY: number,
}


/**
 * @function findImageContentCoords
 * Checks the content of an image (or canvas) and returns coords of the non transparent zone.
 * Returns { minX, minY, maxX, maxY } of the content.
 * You can specify a pixel precision and alpha tolerance.
 *
 * @param {HTMLCanvasElement|HTMLImageElement} imageDom
 * @param {number} [pxPrecision = 1]
 * @param {number} [alphaTolerance = 0.01]
 * @return {Promise<CanvasCoordsResponse>}
 */
const findImageContentCoords = async(
  imageDom: HTMLCanvasElement|HTMLImageElement,
  pxPrecision = 1,
  alphaTolerance = 0.01,
): Promise<CanvasCoordsResponse> => {

  alphaTolerance = roundNumber(255 * alphaTolerance, 0)
  pxPrecision = roundNumber(pxPrecision, 0)

  if (imageDom instanceof HTMLImageElement) {
    imageDom = convertImgToCanvas(imageDom)
  }

  const width: number = imageDom.width
  const height: number = imageDom.height
  const context = imageDom.getContext('2d') as CanvasRenderingContext2D
  const imageData: Uint8ClampedArray = context.getImageData(0, 0, width, height).data

  const id: string = uuidv4()
  canvasContentCoordsWorker.postMessage({ id, imageData, width, height, pxPrecision, alphaTolerance })
  const res: CanvasCoordsResponse = await waitWorkerMessage(canvasContentCoordsWorker, id)
  delete res.id

  return res
}


export default findImageContentCoords
