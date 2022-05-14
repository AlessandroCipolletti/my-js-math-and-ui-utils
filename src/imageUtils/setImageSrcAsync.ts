
/**
 * @function setImageSrcAsync
 * Small utils to use img.onload with async/await
 *
 * @param {HTMLImageElement} img
 * @param {string} url
 * @return {Promise<boolean>}
 */
const setImageSrcAsync = (img: HTMLImageElement, url: string): Promise<boolean> => {
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


export default setImageSrcAsync
