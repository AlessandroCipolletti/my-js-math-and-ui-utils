import roundNumber from '../mathUtils/roundNumber'
import cropImage from './cropImage'


/**
 * @function cropImageWithMargin
 * Crops an image and return the corrisponding canvas, adding a % empty margin to each side.
 * 'margin' === 0.1 means 10% of width and 10% of height.
 *
 * @param {HTMLCanvasElement|HTMLImageElement} imageDom
 * @param {number} l left coord x
 * @param {number} t top coord y
 * @param {number} r right coord x
 * @param {number} b bottom coord y
 * @param {number} [margin = 0.1]
 * @returns {Array<HTMLCanvasElement|number>}
 */
const cropImageWithMargin = (
  imageDom: HTMLCanvasElement|HTMLImageElement,
  l: number,
  t: number,
  r: number,
  b: number,
  margin = 0.1,
): Array<HTMLCanvasElement|number> => {
  
  let imageWidth: number, imageHeight: number

  if (imageDom instanceof HTMLCanvasElement) {
    imageWidth = imageDom.width
    imageHeight = imageDom.height
  } else {
    imageWidth = (imageDom.naturalWidth || imageDom.width)
    imageHeight = (imageDom.naturalHeight || imageDom.height)
  }

  let w = roundNumber(r - l, 0)
  let h = roundNumber(b - t, 0)
  const x = roundNumber(Math.max(l - w * (margin / 2), 0), 0)
  const y = roundNumber(Math.max(t - h * (margin / 2), 0), 0)
  w = roundNumber(Math.min(w * (1 + margin), imageWidth - x), 0)
  h = roundNumber(Math.min(h * (1 + margin), imageHeight - y), 0)

  return [cropImage(imageDom, x, y, w, h), x, y, w, h]
}


export default cropImageWithMargin
