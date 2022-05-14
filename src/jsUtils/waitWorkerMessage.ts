
/**
 * @function waitWorkerMessage
 * A standardized way to wait for a worker response.
 * By passing an additional string id to each command, you can await for one specific response.
 * Workers must take in input 'id' from each message, and give it back whitin each response.
 *
 * @example
 * const myWorker = new Worker('pathToTheWorkerFile')
 * const id = uuidv4()
 * myWorker.postMessage({ id, someData })
 * const response = await waitWorkerMessage()
 *
 */
const waitWorkerMessage = (worker: Worker, id: string): any => {
  return new Promise((resolve) => {
    const onLoaded = (event: MessageEvent) => {
      const { id: idMsg } = event.data
      if (id === idMsg) {
        worker.removeEventListener('message', onLoaded)
        resolve(event.data)
      }
    }
    worker.addEventListener('message', onLoaded)
  })
}


export default waitWorkerMessage
