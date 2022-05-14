
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
 * @returns {RgbaColorObject}
 */
const getCanvasRgbaColorAtPx = (
  destinationContext: MyCanvasRenderingContext2D,
  x: number,
  y: number,
): RgbaColorObject => {

  const pxIndex = (Math.floor(x) + Math.floor(y) * destinationContext.canvas.width) * 4
  const canvasData = destinationContext.getImageData(
    0,
    0,
    destinationContext.canvas.width,
    destinationContext.canvas.height,
  )

  return {
    r: canvasData.data[pxIndex + 0],
    g: canvasData.data[pxIndex + 1],
    b: canvasData.data[pxIndex + 2],
    a: canvasData.data[pxIndex + 3],
  }
}


export default getCanvasRgbaColorAtPx
