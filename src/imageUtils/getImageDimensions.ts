
interface Dimensions {
  width: number
  height: number
  ratio: number
}

/**
 * @function getImageDimensions
 * @description Returns image width, height and ratio.
 *
 * @param {HTMLImageElement} img
 * @returns {Dimensions}
 */
const getImageDimensions = (img: HTMLImageElement): Dimensions => {
  return {
    width: img.naturalWidth || img.width,
    height: img.naturalHeight || img.height,
    ratio: (img.naturalWidth || img.width) / (img.naturalHeight || img.height),
  }
}

export default getImageDimensions
