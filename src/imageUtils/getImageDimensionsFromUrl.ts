import getImageFromUrlAsync from './getImageFromUrlAsync'
import getImageDimensions, { ImageDimensions } from './getImageDimensions'

/**
 * @function getImageDimensionsFromUrl
 * @description Get image dimensions (width, height, ratio) from url
 *
 * @async
 * @param {string} url
 * @returns {Promise<ImageDimensions>}
 */
const getImageDimensionsFromUrl = async (url: string): Promise<ImageDimensions>  => {
  const img = await getImageFromUrlAsync(url, true)
  const dimensions = getImageDimensions(img)
  URL.revokeObjectURL(img.src)

  return dimensions
}

export default getImageDimensionsFromUrl
