import { v4 as uuidv4 } from 'uuid'

import { fetchUrlFileOffThread, waitWorkerMessage } from './jsUtils'
import { roundNumber, valuesAreSimilar } from './mathUtils'


const tempImage = new Image()
tempImage.crossOrigin = 'Anonymous'
const tempCanvas = document.createElement('canvas')
const tempContext = tempCanvas.getContext('2d') as CanvasRenderingContext2D
const detachTempImageEvents = () => {
  // eslint-disable-next-line
  tempImage.onload = () => {}
  // eslint-disable-next-line
  tempImage.onerror = () => {}
}

const canvasContentCoordsWorker = new Worker('./workers/canvasContentCoords.ts')

/**
 * @typedef CanvasCoordsResponse
 * Interface returned from the canvasContentCoordsWorker
 *
 * @prop {string} [id]
 * @prop {number} minX
 * @prop {number} minY
 * @prop {number} maxX
 * @prop {number} maxY
 */
interface CanvasCoordsResponse {
  id?: string,
  minX: number,
  minY: number,
  maxX: number,
  maxY: number,
}


/**
 * Specify here the default max size for image risizing
 *
 * @type {number}
 */
let defaultMaxImageSideSize = 400

/**
 * Set a different default max image side size
 *
 * @param {number} maxSide
 * @return {void}
 */
export const setDefaultMaxImageSideSize = (maxSide: number): void => {
  defaultMaxImageSideSize = maxSide
}

/**
 * Takes a base64 string, resize the corrisponding image, and returns a new base64
 *
 * @param {string} base64
 * @param {number} [maxSize]
 * @return {Promise<string>}
 */
export const resizeBase64AndGetBase64 = (
  base64: string,
  maxSize: number = defaultMaxImageSideSize,
): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    tempImage.onload = () => {
      detachTempImageEvents()
      resolve(resizeImageAndGetBase64(tempImage, maxSize))
    }
    tempImage.onerror = () => {
      detachTempImageEvents()
      reject()
    }
    tempImage.src = base64
  })
}

/**
 * Resize an image, get a Blob, and returns a localURL to load the new resized image
 *
 * @param {HTMLImageElement} image
 * @param {number} [maxSize]
 * @return {Promise<string>}
 */
export const resizeImageAndGetLocalUrl = (
  image: HTMLImageElement,
  maxSize: number = defaultMaxImageSideSize,
): Promise<string> => {
  return new Promise<string>((resolve) => {
    const imgRatio: number = (image.naturalWidth || image.width) / (image.naturalHeight || image.height)

    if (imgRatio > 1) {
      tempCanvas.width = maxSize
      tempCanvas.height = maxSize / imgRatio
    } else {
      tempCanvas.height = maxSize
      tempCanvas.width = maxSize * imgRatio
    }

    tempContext.drawImage(image, 0, 0, tempCanvas.width, tempCanvas.height)
    tempCanvas.toBlob((blob) => {
      if (blob) {
        resolve(URL.createObjectURL(blob))
      } else {
        resolve('')
      }
    })
  })
}

/**
 * Resize an image and returns the corrisponding base64
 *
 * @param {HTMLCanvasElement|HTMLImageElement} imageDom
 * @param {number} [maxSize]
 * @return {string}
 */
export const resizeImageAndGetBase64 = (
  imageDom: HTMLCanvasElement|HTMLImageElement,
  maxSize: number = defaultMaxImageSideSize,
): string => {
  let imgRatio: number
  if (imageDom instanceof HTMLCanvasElement) {
    imgRatio = imageDom.width / imageDom.height
  } else {
    imgRatio = (imageDom.naturalWidth || imageDom.width) / (imageDom.naturalHeight || imageDom.height)
  }

  if (imgRatio > 1) {
    tempCanvas.width = maxSize
    tempCanvas.height = maxSize / imgRatio
  } else {
    tempCanvas.height = maxSize
    tempCanvas.width = maxSize * imgRatio
  }

  tempContext.drawImage(imageDom, 0, 0, tempCanvas.width, tempCanvas.height)

  return tempCanvas.toDataURL('image/png')
}

/**
 * Checks the content of an image (or canvas) and returns coords of the non transparent zone.
 * Returns { minX, minY, maxX, maxY } of the content.
 * You can specify a pixel precision and alpha tolerance.
 *
 * @param {HTMLCanvasElement|HTMLImageElement} imageDom
 * @param {number} pxPrecision
 * @param {number} alphaTolerance
 * @return {Promise<CanvasCoordsResponse>}
 */
export const findImageContentCoords = async(
  imageDom: HTMLCanvasElement|HTMLImageElement,
  pxPrecision = 1,
  alphaTolerance = 0.01,
): Promise<CanvasCoordsResponse> => {
  alphaTolerance = roundNumber(255 * alphaTolerance, 0)
  pxPrecision = roundNumber(pxPrecision, 0)

  if (imageDom instanceof HTMLImageElement) {
    imageDom = convertImgToCanvas(imageDom)
  }

  const width: number = imageDom.width
  const height: number = imageDom.height
  const context = imageDom.getContext('2d') as CanvasRenderingContext2D
  const imageData: Uint8ClampedArray = context.getImageData(0, 0, width, height).data

  const id: string = uuidv4()
  canvasContentCoordsWorker.postMessage({ id, imageData, width, height, pxPrecision, alphaTolerance })
  const res: CanvasCoordsResponse = await waitWorkerMessage(canvasContentCoordsWorker, id)
  delete res.id

  return res
}

/**
 * Crops an image (or a canvas) and returns a canvas.
 * Crop starts from { x, y }, and takes width * height pixels.
 * Final canvas has a width * height size.
 *
 * @param {HTMLCanvasElement|HTMLImageElement} imageDom
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @return {HTMLCanvasElement}
 */
export const cropImage = (
  imageDom: HTMLCanvasElement|HTMLImageElement,
  x: number,
  y: number,
  width: number,
  height: number,
): HTMLCanvasElement => {
  const canvas: HTMLCanvasElement = document.createElement('canvas')
  const context = canvas.getContext('2d') as CanvasRenderingContext2D

  canvas.width = width
  canvas.height = height
  context.drawImage(imageDom, x, y, width, height, 0, 0, width, height)

  return canvas
}

/**
 * Takes an image (or a canvas) and flip it vertically or horizontally.
 * Returns a canvas with the same size of the original image.
 *
 * @param {HTMLCanvasElement|HTMLImageElement} imageDom
 * @param {boolean} [horizontally] Default true
 * @return {HTMLCanvasElement}
 */
export const flipImage = (
  imageDom: HTMLCanvasElement|HTMLImageElement,
  horizontally = true,
): HTMLCanvasElement => {
  const canvas: HTMLCanvasElement = document.createElement('canvas')
  const context = canvas.getContext('2d') as CanvasRenderingContext2D

  if (imageDom instanceof HTMLCanvasElement) {
    canvas.width = imageDom.width
    canvas.height = imageDom.height
  } else {
    canvas.width = imageDom.naturalWidth || imageDom.width
    canvas.height = imageDom.naturalHeight || imageDom.height
  }

  if (horizontally) {
    context.scale(-1, 1)
    context.drawImage(imageDom, canvas.width * -1, 0, canvas.width, canvas.height)
  } else {
    context.scale(1, -1)
    context.drawImage(imageDom, 0, canvas.height * -1, canvas.width, canvas.height)
  }

  return canvas
}

/**
 * Takes a base64, loads it, and returns an image Blob and a local url pointing it
 *
 * @param {string} base64
 * @return {Promise<[Blob, localObjectURL]>}
 */
export const getBlobFromBase46 = (base64: string): Promise<Array<Blob|string>> => {
  return new Promise((resolve, reject) => {
    tempImage.onload = async () => {
      tempCanvas.width = tempImage.naturalWidth
      tempCanvas.height = tempImage.naturalHeight
      tempContext.drawImage(tempImage, 0, 0)
      tempCanvas.toBlob((blob) => {
        detachTempImageEvents()
        resolve([blob as Blob, URL.createObjectURL(blob as Blob)])
      })
    }
    tempImage.onerror = () => {
      detachTempImageEvents()
      reject()
    }
    tempImage.src = base64
  })
}

/**
 * Small utils to use canvas.toBlob with async/await
 *
 * @param {HTMLCanvasElement} canvas
 * @return {Promise<Blob>}
 */
export const getCanvasBlobAsync = (canvas: HTMLCanvasElement): Promise<Blob> => {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      resolve(blob as Blob)
    })
  })
}

/**
 * Takes an image, returns an equivalent canvas
 *
 * @param {HTMLImageElement} img
 * @return {HTMLCanvasElement}
 */
export const convertImgToCanvas = (img: HTMLImageElement): HTMLCanvasElement => {
  const canvas: HTMLCanvasElement = document.createElement('canvas')
  canvas.width = img.naturalWidth || img.width
  canvas.height = img.naturalHeight || img.height
  const context = canvas.getContext('2d') as CanvasRenderingContext2D
  context.drawImage(img, 0, 0)

  return canvas
}

/**
 * Takes an image (or a canvas) and returns its base64, asynchronously
 *
 * @params {HTMLCanvasElement|HTMLImageElement} imageDom
 * @return {Promise<string>}
 */
export const getImageBase64Async = async(
  imageDom: HTMLCanvasElement|HTMLImageElement,
): Promise<string> => {
  if (imageDom instanceof HTMLImageElement) {
    imageDom = convertImgToCanvas(imageDom)
  }
  return blobToBase64Async(await getCanvasBlobAsync(imageDom))
  // the sync way to do it:
  // imageDom.toDataURL('image/png')
}

/**
 * Gets the canvas context imageData from a image base64.
 * if x / y / width / height params are given, it returns only the selected portion of the image.
 *
 * @param {string} base64
 * @param {number} [x]
 * @param {number} [y]
 * @param {number} [width]
 * @param {number} [height]
 * @return {Promise<Uint8ClampedArray>}
 */
export const base64ToImageData = async(
  base64: string,
  x = 0,
  y = 0,
  width = 0,
  height = 0,
): Promise<Uint8ClampedArray> => {
  const img = await getImageFromUrlAsync(base64, true)

  tempCanvas.width = width || img.naturalWidth || img.width
  tempCanvas.height = height || img.naturalHeight || img.height
  tempContext.drawImage(img, x, y)

  return tempContext.getImageData(x, y, tempCanvas.width, tempCanvas.height).data
}

/**
 * Merges multiple base64 image strings into one base64,
 * merging all the conrrisponding images with transparency.
 *
 * @param {Array<string>} bases64
 * @return {Promise<string>}
 */
export const mergeBase64Images = async(bases64: Array<string>): Promise<string> => {
  const imgs: Array<HTMLImageElement> = await Promise.all(bases64.map((base64) => {
    return getImageFromUrlAsync(base64)
  }))

  tempCanvas.width = tempCanvas.height = 0

  for (const img of imgs) {
    if ((img.naturalWidth || img.width) > 1) {
      if (!tempCanvas.width) {
        tempCanvas.width = img.naturalWidth || img.width
        tempCanvas.height = img.naturalHeight || img.height
      }
      tempContext.drawImage(img, 0, 0)
    }
  }

  // return tempCanvas.toDataURL('image/png') // sync way
  return await getImageBase64Async(tempCanvas)
}

/**
 * Async way to extract the base64 string from a image Blob.
 *
 * @param {Blob} blob
 * @return Promise<string>
 */
export const blobToBase64Async = (blob: Blob): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = () => {
      resolve(reader.result as string)
    }
    reader.readAsDataURL(blob)
  })
}

/**
 * Loads the given url and return the corrisponding image asynchronously.
 * if useTempImg === true, use a temp image imageDom (not to be trusted externally).
 *
 * @param {string} url
 * @param {boolean} useTempImg default false
 * @return {Promise<HTMLImageElement>}
 */
export const getImageFromUrlAsync = (url: string, useTempImg = false): Promise<HTMLImageElement> => {
  if (useTempImg) {
    return loadImageOffThread(tempImage, url).then(() => tempImage)
  } else {
    const img = new Image()
    img.crossOrigin = 'Anonymous'

    return loadImageOffThread(img, url).then(() => img)
  }
}

/**
 * Takes an image and the new url to load inside it, and does it asynchronously.
 * Returns true / false to reflect the loading result.
 *
 * @param {HTMLImageElement} img
 * @param {string} url
 * @return {Promise<boolean>}
 */
export const loadImageOffThread = async(img: HTMLImageElement, url: string): Promise<boolean> => {
  const blobUrl = await fetchUrlFileOffThread(url)
  // URL.revokeObjectURL(img.getAttribute('data-blobUrl') || '')
  // img.setAttribute('data-blobUrl', blobUrl)

  return setImageSrcAsync(img, blobUrl)
}

/**
 * Small utils to use img.onload with async/await
 *
 * @param {HTMLImageElement} img
 * @param {string} url
 * @return {Promise<boolean>}
 */
export const setImageSrcAsync = (img: HTMLImageElement, url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    img.onload = () => {
      // eslint-disable-next-line
      img.onerror = img.onload = () => {}
      resolve(true)
    }
    img.onerror = () => {
      // eslint-disable-next-line
      img.onerror = img.onload = () => {}
      resolve(false)
    }
    img.src = url
  })
}

/**
 * Tries to load an url as an image, and return true / false.
 * If you are offline ==> returns false
 *
 * @params {string} url
 * @return {Promise<boolean>}
 */
export const checkImageUrlValidity = async(url: string): Promise<boolean> => {
  let res = false

  if (url && typeof url === 'string' && navigator.onLine) {
    try {
      res = await setImageSrcAsync(new Image(), url)
    } catch (e) {
      res = false
    }
  }

  return res
}

/**
 * Takes a image (or a canvas), adds a white background, and returns the new base64.
 *
 * @param {HTMLCanvasElement|HTMLImageElement} imageDom
 * @return {string}
 */
export const addImageWhiteBgAndGetBase64 = (imageDom: HTMLCanvasElement|HTMLImageElement): string => {
  if (imageDom instanceof HTMLCanvasElement) {
    tempCanvas.width = imageDom.width
    tempCanvas.height = imageDom.height
  } else {
    tempCanvas.width = imageDom.naturalWidth || imageDom.width
    tempCanvas.height = imageDom.naturalHeight || imageDom.height
  }

  tempContext.fillStyle = '#FFFFFF'
  tempContext.fillRect(0, 0, tempCanvas.width, tempCanvas.height)
  tempContext.drawImage(imageDom, 0, 0, tempCanvas.width, tempCanvas.height)

  return tempCanvas.toDataURL('image/png')
}

/**
 * Crops an image and return the corrisponding canvas, adding a % empty margin to each side.
 * 'margin' === 0.1 means 10% of width and 10% of height.
 *
 * @param {HTMLCanvasElement|HTMLImageElement} imageDom
 * @param {number} l left coord x
 * @param {number} t top coord y
 * @param {number} r right coord x
 * @param {number} b bottom coord y
 * @return {Array<HTMLCanvasElement|number>}
 */
export const cropImageWithMargin = (
  imageDom: HTMLCanvasElement|HTMLImageElement,
  l: number,
  t: number,
  r: number,
  b: number,
  margin = 0.1,
): Array<HTMLCanvasElement|number> => {
  let imageWidth: number, imageHeight: number

  if (imageDom instanceof HTMLCanvasElement) {
    imageWidth = imageDom.width
    imageHeight = imageDom.height
  } else {
    imageWidth = (imageDom.naturalWidth || imageDom.width)
    imageHeight = (imageDom.naturalHeight || imageDom.height)
  }

  let w = roundNumber(r - l, 0)
  let h = roundNumber(b - t, 0)
  const x = roundNumber(Math.max(l - w * (margin / 2), 0), 0)
  const y = roundNumber(Math.max(t - h * (margin / 2), 0), 0)
  w = roundNumber(Math.min(w * (1 + margin), imageWidth - x), 0)
  h = roundNumber(Math.min(h * (1 + margin), imageHeight - y), 0)

  return [cropImage(imageDom, x, y, w, h), x, y, w, h]
}

/**
 * Checks if the given image (or canvas) has a uniform background.
 * It compares the 4 coorners, and you can specify the tolerance level [0...255]
 *
 * @param {HTMLCanvasElement|HTMLImageElement} imageDom
 * @param {number} tolerance Default 3 [0...255]
 * @return {boolean}
 */
export const imageHasUniformBackground = (
  imageDom: HTMLCanvasElement|HTMLImageElement,
  tolerance = 3,
): boolean => {
  if (imageDom instanceof HTMLCanvasElement) {
    tempCanvas.width = imageDom.width
    tempCanvas.height = imageDom.height
  } else {
    tempCanvas.width = (imageDom.naturalWidth || imageDom.width)
    tempCanvas.height = (imageDom.naturalHeight || imageDom.height)
  }

  tempContext.drawImage(imageDom, 0, 0, tempCanvas.width, tempCanvas.height)
  const imageData: Uint8ClampedArray = tempContext.getImageData(0, 0, tempCanvas.width, tempCanvas.height).data

  const pxTL = {
    r: imageData[0],
    g: imageData[1],
    b: imageData[2],
    a: imageData[3],
  }
  const pxTR = {
    r: imageData[((tempCanvas.width - 1) * 4) + 0],
    g: imageData[((tempCanvas.width - 1) * 4) + 1],
    b: imageData[((tempCanvas.width - 1) * 4) + 2],
    a: imageData[((tempCanvas.width - 1) * 4) + 3],
  }
  const pxBL = {
    r: imageData[((tempCanvas.width * (tempCanvas.height - 1)) * 4) + 0],
    g: imageData[((tempCanvas.width * (tempCanvas.height - 1)) * 4) + 1],
    b: imageData[((tempCanvas.width * (tempCanvas.height - 1)) * 4) + 2],
    a: imageData[((tempCanvas.width * (tempCanvas.height - 1)) * 4) + 3],
  }
  const pxBR = {
    r: imageData[imageData.length - 4],
    g: imageData[imageData.length - 3],
    b: imageData[imageData.length - 2],
    a: imageData[imageData.length - 1],
  }

  return (
    valuesAreSimilar([pxTL.r, pxTR.r, pxBL.r, pxBR.r], tolerance) &&
    valuesAreSimilar([pxTL.g, pxTR.g, pxBL.g, pxBR.g], tolerance) &&
    valuesAreSimilar([pxTL.b, pxTR.b, pxBL.b, pxBR.b], tolerance) &&
    valuesAreSimilar([pxTL.a, pxTR.a, pxBL.a, pxBR.a], tolerance)
  )
}

/**
 * Checks if the given image has a transparent background
 *
 * @param {HTMLCanvasElement|HTMLImageElement} imageDom
 * @return {boolean}
 */
export const imageHasTransparentBackground = (imageDom: HTMLCanvasElement|HTMLImageElement): boolean => {
  if (imageDom instanceof HTMLCanvasElement) {
    tempCanvas.width = imageDom.width
    tempCanvas.height = imageDom.height
  } else {
    tempCanvas.width = (imageDom.naturalWidth || imageDom.width)
    tempCanvas.height = (imageDom.naturalHeight || imageDom.height)
  }

  tempContext.drawImage(imageDom, 0, 0, tempCanvas.width, tempCanvas.height)
  const imageData: Uint8ClampedArray = tempContext.getImageData(0, 0, tempCanvas.width, tempCanvas.height).data

  const pxTLa = imageData[3]
  const pxTRa = imageData[((tempCanvas.width - 1) * 4) + 3]
  const pxBLa = imageData[((tempCanvas.width * (tempCanvas.height - 1)) * 4) + 3]
  const pxBRa = imageData[imageData.length - 1]

  return pxTLa === 0 && pxTRa === 0 && pxBLa === 0 && pxBRa === 0
}

/**
 * Adds an outline around the filled part of the image.
 *
 * @param {HTMLCanvasElement|HTMLImageElement} imageDom
 * @param {string} outlineColor
 * @return {string}
 */
export const addImageOutlineAndGetBase64 = (
  imageDom: HTMLCanvasElement|HTMLImageElement,
  outlineColor: string,
): string => {
  if (imageDom instanceof HTMLCanvasElement) {
    tempCanvas.width = imageDom.width
    tempCanvas.height = imageDom.height
  } else {
    tempCanvas.width = (imageDom.naturalWidth || imageDom.width)
    tempCanvas.height = (imageDom.naturalHeight || imageDom.height)
  }

  const offets = [-1,-1, 0,-1, 1,-1, -1,0, 1,0, -1,1, 0,1, 1,1]
  const thickness = Math.max(tempCanvas.width, tempCanvas.height) * 0.0015

  for (let i = 0; i < offets.length; i += 2) {
    tempContext.drawImage(imageDom, offets[i] * thickness, offets[i+1] * thickness)
  }

  // fill with color
  tempContext.globalCompositeOperation = 'source-in'
  tempContext.fillStyle = outlineColor
  tempContext.fillRect(0, 0, tempCanvas.width, tempCanvas.height)

  // draw original image in normal mode
  tempContext.globalCompositeOperation = 'source-over'
  tempContext.drawImage(imageDom, 0, 0)

  return tempCanvas.toDataURL('image/png')
}
