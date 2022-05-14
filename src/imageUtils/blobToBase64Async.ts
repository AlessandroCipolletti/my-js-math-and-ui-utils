
/**
 * @function blobToBase64Async
 * Async way to extract the base64 string from a image Blob.
 *
 * @param {Blob} blob
 * @returns Promise<string>
 */
const blobToBase64Async = (blob: Blob): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = () => {
      resolve(reader.result as string)
    }
    reader.readAsDataURL(blob)
  })
}


export default blobToBase64Async
