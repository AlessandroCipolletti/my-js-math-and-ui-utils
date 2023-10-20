import { v4 as uuidv4 } from 'uuid'

const DEFAULT_MAX_PARALLEL_WORKERS = 4
const ACTION_STATE_WAITING = 0
const ACTION_STATE_PROCESSING = 1
const ACTION_STATE_PROCESSED = 2

/**
 * @class WorkersBufferManager
 * @example
 * const openNewWorker = () => {
 *   return new Worker(
 *     new URL('./workers/testWorker.js', import.meta.url),
 *     { type: 'module' }
 *   )
 * }
 * const workersManager = new WorkersBufferManager(openNewWorker)
 * workersManager.waitAction({ id: 1 })
 * workersManager.waitAction({ id: 1 }).then(() => console.log('1'))
 * workersManager.waitAction({ id: 2 }).then(() => console.log('2'))
 * workersManager.waitAction({ id: 3 }).then(() => console.log('3'))
 * workersManager.waitAction({ id: 4 }).then(() => console.log('4'))
 * await workersManager.waitAction({ id: 5 }).then(() => console.log('5'))
 * workersManager.waitAction({ id: 6 }).then(() => console.log('6'))
 * workersManager.waitAction({ id: 7 }).then(() => console.log('7'))
 *   --> logs in order: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7
 *   Actions 6 and 7 are launched after action 1, 2, 3, 4 and 5 are ended
 * FIFO strategy
 */
class WorkersBufferManager {
  #buffer = []
  #workers = []
  #openNewWorker
  #isLoopingResults = false
  #maxParallelWorkers = DEFAULT_MAX_PARALLEL_WORKERS

  constructor(openNewWorker, maxParallelWorkers = DEFAULT_MAX_PARALLEL_WORKERS) {
    if (!openNewWorker) {
      throw new Error('WorkersBufferManager: openNewWorker is required')
    }

    this.#openNewWorker = openNewWorker
    this.#maxParallelWorkers = maxParallelWorkers
    this.#addOneMoreWorker()
  }

  waitAction(...items) {
    const resultPromises = []

    for (const item of items) {
      let resolve
      resultPromises.push(new Promise((r) => resolve = r))

      item.workerActionId = uuidv4()
      const action = {
        workerActionId: item.workerActionId,
        state: ACTION_STATE_WAITING,
        data: item,
        resolve,
      }
      this.#buffer.push(action)

      let firstFreeWorker = this.#workers.find((worker) => !worker.isOccupied)
      if (!firstFreeWorker && this.canOpenNewWorker) {
        firstFreeWorker = this.#addOneMoreWorker()
      }
      if (firstFreeWorker) {
        this.#launchWorkerAction(firstFreeWorker, action)
      }
    }

    if (resultPromises.length === 1) {
      return resultPromises[0]
    }
    return Promise.allSettled(resultPromises)
      .then(results => results.map(result => result.value))
  }

  terminate() {
    for (const worker of this.#workers) {
      worker.terminate()
    }
  }

  get canOpenNewWorker() {
    return this.#workers.length < this.#maxParallelWorkers
  }

  #addOneMoreWorker() {
    const worker = this.#openNewWorker()
    worker.isOccupied = false
    worker.addEventListener('message', this.#onWorkerMessage.bind(this))
    this.#workers.push(worker)
    return worker
  }

  #launchWorkerAction(worker, action) {
    worker.isOccupied = true
    action.state = ACTION_STATE_PROCESSING
    worker.postMessage(action.data)
  }

  #onWorkerMessage({
    data: result,
    target: worker,
  }) {
    worker.isOccupied = false

    // save result into buffer
    const index = this.#buffer.findIndex((item) => item.workerActionId === result.workerActionId)
    if (index !== -1) {
      this.#buffer[index].result = result
      delete this.#buffer[index].result.workerActionId
      this.#buffer[index].state = ACTION_STATE_PROCESSED
    } else {
      console.error('WorkersBufferManager: Lost worker')
    }

    // if some actions are waiting, this worker can now process one more
    const firstWaitingAction = this.#buffer.find((item) => item.state === ACTION_STATE_WAITING)
    if (firstWaitingAction) {
      this.#launchWorkerAction(worker, firstWaitingAction)
    }
    // console.log(`Ended. Next: ${!!firstWaitingAction}. OCCUPIED:`, this.#workers.filter(w => w.isOccupied).length)

    if (!this.#isLoopingResults) {
      this.#returnEndedResults()
    }
  }

  async #returnEndedResults() {
    // if (this.#buffer[0] && !this.#buffer[0].workerActionId) {
    if (this.#buffer[0]?.state === ACTION_STATE_PROCESSED) {
      this.#isLoopingResults = true
      const action = this.#buffer.shift()
      action.resolve(action.result)
      this.#returnEndedResults()
    } else {
      this.#isLoopingResults = false
    }
  }
}

export default WorkersBufferManager
