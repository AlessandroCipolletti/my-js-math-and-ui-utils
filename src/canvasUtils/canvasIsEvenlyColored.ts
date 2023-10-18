
/**
 * @function canvasIsEvenlyColored
 * Checks if the whole canvas is filled with the same rgba color
 * (or if it's all transparent)
 *
 * @example
 * canvasIsEvenlyColored(mycontext) // ==> true | false
 *
 * @param {MyCanvasRenderingContext2D} destinationContext
 * @returns {boolean}
 */
const canvasIsEvenlyColored = (destinationContext: MyCanvasRenderingContext2D): boolean => {
  const imageData = destinationContext.getImageData(
    0,
    0,
    destinationContext.canvas.width,
    destinationContext.canvas.height
  ).data

  return !imageData.some((color, i, data) => color !== data[i % 4])
}


export default canvasIsEvenlyColored
