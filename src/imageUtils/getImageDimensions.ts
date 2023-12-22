
export interface ImageDimensions {
  width: number
  height: number
  ratio: number
}

/**
 * @function getImageDimensions
 * @description Returns image width, height and ratio.
 *
 * @param {HTMLImageElement} img
 * @returns {ImageDimensions}
 */
const getImageDimensions = (img: HTMLImageElement): ImageDimensions => {
  const width = img.naturalWidth || img.width || 0
  const height = img.naturalHeight || img.height || 0
  const ratio = width === 0 || height === 0 ? 0 : width / height

  return { width, height, ratio }
}

export default getImageDimensions
