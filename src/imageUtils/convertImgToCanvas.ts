
/**
 * @function convertImgToCanvas
 * Takes an image, returns an equivalent canvas
 *
 * @param {HTMLImageElement} img
 * @return {HTMLCanvasElement}
 */
const convertImgToCanvas = (img: HTMLImageElement): HTMLCanvasElement => {
  const canvas: HTMLCanvasElement = document.createElement('canvas')
  canvas.width = img.naturalWidth || img.width
  canvas.height = img.naturalHeight || img.height
  const context = canvas.getContext('2d') as CanvasRenderingContext2D
  context.drawImage(img, 0, 0)

  return canvas
}


export default convertImgToCanvas
