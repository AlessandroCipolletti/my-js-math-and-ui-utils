
const tempCanvas = document.createElement('canvas')
const tempContext = tempCanvas.getContext('2d') as CanvasRenderingContext2D

const tempImage = new Image()
tempImage.crossOrigin = 'Anonymous'
const _detachTempImageEvents = () => {
  tempImage.onload = () => {}
  tempImage.onerror = () => {}
}


/**
 * @function getBlobFromBase64
 * Takes a base64, loads it, and returns an image Blob and a local url pointing it
 *
 * @param {string} base64
 * @returns {Promise<Array<Blob | string>>} [blob, url]
 */
const getBlobFromBase64 = (base64: string): Promise<Array<Blob | string>> => {
  return new Promise((resolve, reject) => {
    tempImage.onload = async () => {
      tempCanvas.width = tempImage.naturalWidth
      tempCanvas.height = tempImage.naturalHeight
      tempContext.drawImage(tempImage, 0, 0)
      tempCanvas.toBlob((blob) => {
        _detachTempImageEvents()
        resolve([blob as Blob, URL.createObjectURL(blob as Blob)])
      })
    }
    tempImage.onerror = () => {
      _detachTempImageEvents()
      reject()
    }
    tempImage.src = base64
  })
}


export default getBlobFromBase64
