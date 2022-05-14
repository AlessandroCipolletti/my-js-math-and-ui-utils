
/**
 * @function getCanvasBlobAsync
 * Small utils to use canvas.toBlob with async/await
 *
 * @param {HTMLCanvasElement} canvas
 * @returns {Promise<Blob>}
 */
const getCanvasBlobAsync = (canvas: HTMLCanvasElement): Promise<Blob> => {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      resolve(blob as Blob)
    })
  })
}


export default getCanvasBlobAsync
