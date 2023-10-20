import { noop } from 'utils/jsUtils'
const DEFAULT_MAX_HISTORY_LENGHT = 20

class History {
  #data = []
  #pointer = -1
  #maxLength = DEFAULT_MAX_HISTORY_LENGHT
  #onDeleteHandler = () => {}

  constructor(maxLength = DEFAULT_MAX_HISTORY_LENGHT, deleteHandler = noop) {
    this.#maxLength = maxLength
    this.#onDeleteHandler = deleteHandler
  }

  add(value) {
    if (typeof value !== 'undefined') {
      // const newValue = JSON.stringify(value)
      let deletedItems = []
      if (this.#data.length === 0 || value !== this.#data[this.#pointer]) {
        deletedItems.push(...this.#data.splice(this.#pointer + 1, this.#data.length))
        this.#data.push(value)
        deletedItems.push(...this.#data.splice(0, this.#data.length - this.#maxLength))
        this.#pointer = this.#data.length - 1
      }
      deletedItems.forEach(this.#onDeleteHandler)
      return deletedItems
    }
  }

  getCurrent() {
    return this.#data[this.#pointer]
    // return JSON.parse(this.#data[this.#pointer])
  }

  back() {
    if (this.canGoBack) {
      this.#pointer = Math.max(0, this.#pointer - 1)
      return this.getCurrent()
    }
  }

  forward() {
    if (this.canGoForward) {
      this.#pointer = Math.min(this.#data.length - 1, this.#pointer + 1)
      return this.getCurrent()
    }
  }

  deleteFarest() {
    if (this.#data.length >= 1) {
      this.#pointer = Math.max(0, this.#pointer - 1)
      const deletedItem = this.#data.splice(0, 1)[0]
      this.#onDeleteHandler(deletedItem)
      return deletedItem
    }
    return false
  }

  deleteNewest() {
    if (this.#data.length >= 1) {
      this.#pointer = Math.min(this.#pointer, this.#data.length - 2)
      const deletedItem = this.#data.pop()
      this.#onDeleteHandler(deletedItem)
      return deletedItem
    }
    return false
  }

  filterBackward(filterFn) {
    if (typeof filterFn === 'function') {
      this.filter((e) => this.#data.indexOf(e) > this.#pointer || filterFn(e))
    }
  }

  filterForward(filterFn) {
    if (typeof filterFn === 'function') {
      this.filter((e) => this.#data.indexOf(e) <= this.#pointer || filterFn(e))
    }
  }

  filter(filterFn) {
    if (typeof filterFn === 'function') {
      const deletedData = this.#data.filter(e => !filterFn(e))
      const keptData = this.#data.filter(filterFn)

      if (keptData.includes(this.getCurrent())) {
        this.#pointer = keptData.indexOf(this.getCurrent())
      } else {
        while (this.#pointer > 0 && !keptData.includes(this.getCurrent())) {
          this.#pointer--
        }
        this.#pointer = keptData.indexOf(this.getCurrent())
      }

      deletedData.forEach(this.#onDeleteHandler)
      this.#data = keptData
      return deletedData
    }
  }

  clear() {
    this.#data.forEach(this.#onDeleteHandler)
    this.#data = []
    this.#pointer = -1
  }

  getAllData() {
    return this.#data
  }

  onDelete(handler) {
    if (typeof(handler) === 'function') {
      this.#onDeleteHandler = handler
    }
  }

  log() {
    console.log('History - #pointer: ', this.#pointer, '#data: ', this.#data.length)
  }

  get canGoBack() {
    return this.#pointer > 0
  }

  get canGoForward() {
    return this.#pointer < (this.#data.length - 1)
  }

  get currentSize() {
    return this.#data.length
  }

  get currentIndex() {
    return this.#pointer + 1
  }

  get maxSize() {
    return this.#maxLength
  }

  get isFull() {
    return (this.#data.length >= this.#maxLength)
  }
}

export default History
