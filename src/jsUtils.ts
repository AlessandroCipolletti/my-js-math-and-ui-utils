import { v4 as uuidv4 } from 'uuid'
import isEqual from 'lodash.isequal'


const fileLoaderWorker = new Worker('./workers/fileLoader.ts')


/**
 * @function deepCopy
 * Utils to make a deep copy of a variable
 *
 * @param {any} value
 * @return {any}
 */
export const deepCopy = (value: Record<string, any> | number | string): Record<string, any> | number | string => {
  return JSON.parse(JSON.stringify(value))
}

/**
 * @function delay
 * Utils to stop js execution inline with async/await syntax
 *
 * @example
 * await delay(500)
 *
 * @param {number} milliseconds
 * @return {Promise<void>}
 */
export const delay = (milliseconds: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

/**
 * @function delayFn
 * Utils to delay as little as possible a function call
 *
 * @example
 * const myFn = (a, b) => console.log(a + b)
 * const myFnDelayed = delayFn(myFn)
 * myFnDelayed(12, 21)
 * console.log('hello world') // <-- this one is printed before
 *
 * @param {(...args: any[]) => any} fn
 * @return {(any|Array<any>) => void}
 */
export const delayFn = (fn: (...args: any[]) => any) => (...args: Array<any>): void => {
  requestAnimationFrame(() => {
    fn(...args as [])
  })
}

/**
 * @function iterateFn
 * Utils to iterate one function over multiple elements in parallel
 *
 * @example
 * const double = (a) => a * 2
 * const multiply = (a, b) => a * b
 * await iterateFn(10, double) // 20
 * await iterateFn([10, 20], double) // [20, 40]
 * await iterateFn([10, 20, 30], multiply, 3) // [30, 60, 90]
 * await iterateFn([dom1, dom2], fadeIn)
 *
 * @param {any|Array<any>} els
 * @param {(el: any, ...args: Array<any>) => any} fn
 * @param {Array<any>} ...params
 * @return {Function}
 */
export const iterateFn = async(
  els: any|Array<any>,
  fn: (el: any, ...args: Array<any>) => any,
  ...params: Array<any>
): Promise<any> => {
  if (els instanceof Array) {
    const promises = els.map(el => (async(): Promise<any> => {
      return await fn(el, ...params)
    })())
    return await Promise.all(promises)
  } else {
    return await fn(els, ...params)
  }
}

/**
 * @function throttle
 * Trottle a function
 *
 * @example
 * const myFn = () => console.log('ciao')
 * const myFnTrottled = trottle(myFn, 100)
 * myFnTrottled() // <-- 'ciao'
 * myFnTrottled() // nothing
 * myFnTrottled() // nothing
 * await delay(100)
 * myFnTrottled() // <-- 'ciao'
 * myFnTrottled() // nothing
 *
 * @param {Function} callback
 * @param {number} delay
 * @return {Function}
 */
export const throttle = (callback: () => any, delay: number) => {
  let waiting = false
  return function (...args: Array<any>) {
    if (!waiting) {
      callback(...args as [])
      waiting = true
      setTimeout(() => {
        waiting = false
      }, delay)
    }
  }
}

/**
 * @function callCallbackIfDataChanged
 * Calls the callback everytime its arguments change
 *
 * @example
 * const myFn = (a) => console.log(a)
 * const myFnOnlyWhenChange = callCallbackIfDataChanged(myfn)
 * myFnOnlyWhenChange('hello') // <-- 'hello'
 * myFnOnlyWhenChange('hello') // nothing
 * myFnOnlyWhenChange('hello', 'world') // <-- 'hello' 'world'
 * myFnOnlyWhenChange('hello', 'world') // nothing
 * myFnOnlyWhenChange('hello') // <-- 'hello'
 *
 * @param {Function} callback
 * @return {Function}
 */
export const callCallbackIfDataChanged = (callback: () => any) => {
  let lastArguments: Array<any> = []
  return (...args: Array<any>) => {
    let changed = false
    for (let i = 0; i < args.length; i++) {
      if (!isEqual(lastArguments[i], args[i])) {
        changed = true
        break
      }
    }
    if (changed) {
      lastArguments = args
      callback(...args as [])
    }
  }
}

/**
 * @function copyTextToClipboard
 * Copy a string to device clipboard
 *
 * @param {string} str
 * @return {void}
 */
export const copyTextToClipboard = (str: string): void => {
  const el = document.createElement('textarea')
  el.value = str
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}


/* WEB WORKER UTILS */

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
export function waitWorkerMessage (worker: Worker, id: string): any {
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

/**
 * @function fetchUrlFileOffThread
 * Retreives a blob from the given url asynchronously in a separate thread, and returns a local ObjectURl pointing to it
 *
 * @params {string} url
 * @return {Promise<string>}
 */
export const fetchUrlFileOffThread = async(url: string): Promise<string> => {
  const id = uuidv4()
  fileLoaderWorker.postMessage({ id, url })
  const data = await waitWorkerMessage(fileLoaderWorker, id)
  return URL.createObjectURL(data.blob)
}


/* ARRAY UTILS */

/**
 * @function arrayOrderNumberIncreasing
 * Utils to sort an array of number increasing
 *
 * @example
 * const myArray = [1, 5, 3, 2]
 * myArray.sort(arrayOrderNumberIncreasing) // ==> [1, 2, 3, 5]
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export const arrayOrderNumberIncreasing = (a: number, b: number): number => a - b

/**
 * @function arrayOrderNumberDecreasing
 * Utils to sort an array of number decreasing
 *
 * @example
 * const myArray = [1, 5, 3, 2]
 * myArray.sort(arrayOrderNumberIncreasing) // ==> [5, 3, 2, 1]
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export const arrayOrderNumberDecreasing = (a: number, b: number): number => b - a

/**
 * @function arrayOrderStringAlphabetically
 * Utils to sort an array of string alphabetically
 *
 * @example
 * const myArray = ['hello', 'world', 'bonjour']
 * myArray.sort(arrayOrderStringAlphabetically) // ==> ['bonjour', 'hello', 'world']
 *
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
export const arrayOrderStringAlphabetically = (a: string, b: string): number => {
  if (a > b) return +1
  if (a < b) return -1
  return 0
}

/**
 * @function arrayOrderStringDown
 * Utils to sort an array of string counter alphabetically
 *
 * @example
 * const myArray = ['hello', 'world', 'bonjour']
 * myArray.sort(arrayOrderStringDown) // ==> ['world', 'hello', 'bonjour']
 *
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
export const arrayOrderStringDown = (a: string, b: string): number => {
  if (a < b) return +1
  if (a > b) return -1
  return 0
}
