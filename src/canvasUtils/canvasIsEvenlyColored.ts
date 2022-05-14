
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
const canvasIsEvenlyColored = (destinationContext: MyCanvasRenderingContext2D): boolean => {
  const data = destinationContext.getImageData(
    0,
    0,
    destinationContext.canvas.width,
    destinationContext.canvas.height,
  ).data
  const r = data[0], g = data[1], b = data[2], a = data[3]
  let ok = true
  let i = data.length

  while (i--) {
    if (!(data[i] === a && data[--i] === b && data[--i] === g && data[--i] === r)) {
      ok = false
      break
    }
  }

  // ok = data.every((e, i, arr) => e === arr[i % 4])
  return ok
}


export default canvasIsEvenlyColored
