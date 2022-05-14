import { v4 as uuidv4 } from 'uuid'

import waitWorkerMessage from './waitWorkerMessage'

const fileLoaderWorker = new Worker('./workers/fileLoader.js')


/**
 * @function fetchUrlFileOffThread
 * Retreives a blob from the given url asynchronously in a separate thread, and returns a local ObjectURl pointing to it
 *
 * @params {string} url
 * @return {Promise<string>}
 */
const fetchUrlFileOffThread = async(url: string): Promise<string> => {
  const id = uuidv4()
  fileLoaderWorker.postMessage({ id, url })
  const data = await waitWorkerMessage(fileLoaderWorker, id)
  return URL.createObjectURL(data.blob)
}


export default fetchUrlFileOffThread
