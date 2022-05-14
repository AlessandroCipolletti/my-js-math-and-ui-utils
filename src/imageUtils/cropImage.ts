
/**
 * @function cropImage
 * Crops an image (or a canvas) and returns a canvas.
 * Crop starts from { x, y }, and takes width * height pixels.
 * Final canvas has a width * height size.
 *
 * @param {HTMLCanvasElement|HTMLImageElement} imageDom
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @return {HTMLCanvasElement}
 */
const cropImage = (
  imageDom: HTMLCanvasElement|HTMLImageElement,
  x: number,
  y: number,
  width: number,
  height: number,
): HTMLCanvasElement => {
  
  const canvas: HTMLCanvasElement = document.createElement('canvas')
  const context = canvas.getContext('2d') as CanvasRenderingContext2D

  canvas.width = width
  canvas.height = height
  context.drawImage(imageDom, x, y, width, height, 0, 0, width, height)

  return canvas
}


export default cropImage
