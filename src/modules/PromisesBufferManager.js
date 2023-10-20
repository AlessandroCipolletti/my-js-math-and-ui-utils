import { v4 as uuidv4 } from 'uuid'

const noop = () => {}

/**
 * @class PromisesBufferManager
 * @example
 * const callback = async (result, error) => {
 *   console.log(`Callback for: ${result}`)
 *   await delay(1000)
 * }
 * const promisesManager = new PromisesBufferManager(callback)
 * promisesManager.pushPromise(
 *   delay(getRandomNumber(10000)).then(() => 1),
 *   delay(getRandomNumber(10000)).then(() => 2),
 *   delay(getRandomNumber(10000)).then(() => 3),
 *   delay(getRandomNumber(10000)).then(() => 4)
 * )
 * promisesManager.pushPromise(delay(getRandomNumber(10000)).then(() => 5))
 * promisesManager.pushPromise(delay(getRandomNumber(10000)).then(() => 6))
 * promisesManager.pushPromise(delay(getRandomNumber(10000)).then(() => 7))
 *   --> logs in order: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7
 * FIFO strategy
 */
class PromisesBufferManager {
  #buffer = []
  #callback = noop
  #isLoopingResults = false

  constructor(callback = noop) {
    this.#callback = callback
  }

  pushPromise(...promises) {
    for (const promise of promises) {
      const id = uuidv4()
      promise
        .then((result) => this.#onPromiseEnded(id, result))
        .catch((error) => this.#onPromiseEnded(id, undefined, error))
      this.#buffer.push({ id, promise })
    }
  }

  #onPromiseEnded(id, result, error) {
    const index = this.#buffer.findIndex((item) => item.id === id)
    if (index !== -1) {
      this.#buffer[index] = { id, result, error }
    } else {
      console.error('PromisesBufferManager: Lost promise')
    }
    if (!this.#isLoopingResults) {
      this.#returnEndedPromises()
    }
  }

  async #returnEndedPromises() {
    if (this.#buffer[0]?.result || this.#buffer[0]?.error) {
      this.#isLoopingResults = true
      const endedPromise = this.#buffer.shift()
      await this.#callback(endedPromise.result, endedPromise.error)
      this.#returnEndedPromises()
    } else {
      this.#isLoopingResults = false
    }
  }
}

export default PromisesBufferManager
