import { defaultMaxImageSideSize } from './setDefaultMaxImageSideSize'
import resizeImageAndGetBase64 from './resizeImageAndGetBase64'


const tempImage = new Image()
tempImage.crossOrigin = 'Anonymous'
const _detachTempImageEvents = () => {
  tempImage.onload = () => {}
  tempImage.onerror = () => {}
}


/**
 * @function resizeBase64AndGetBase64
 * Takes a base64 string, resize the corrisponding image, and returns a new base64
 *
 * @param {string} base64
 * @param {number} [maxSize] Default defaultMaxImageSideSize
 * @return {Promise<string>}
 */
const resizeBase64AndGetBase64 = (
  base64: string,
  maxSize: number = defaultMaxImageSideSize,
): Promise<string> => {
  
  return new Promise<string>((resolve, reject) => {
    tempImage.onload = () => {
      _detachTempImageEvents()
      resolve(resizeImageAndGetBase64(tempImage, maxSize))
    }
    tempImage.onerror = () => {
      _detachTempImageEvents()
      reject()
    }
    tempImage.src = base64
  })
}


export default resizeBase64AndGetBase64
