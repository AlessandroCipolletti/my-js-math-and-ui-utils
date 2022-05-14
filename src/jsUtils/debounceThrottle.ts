
/**
 * @function debounceThrottle
 * Trottle a function but at the end it executes the last callback call arrived during the waiting time too
 *
 * * @example
 * const myFn = (string) => console.log(string)
 * const myFnTrottled = trottle(myFn, 100)
 * myFnTrottled('hello') // <-- 'hello'
 * myFnTrottled('world') // nothing
 * myFnTrottled('bonjour') // nothing yet
 * await delay(100) // <-- now 'bonjour' appears
 *
 * @param {Function} callback
 * @param {number} limit
 * @returns
 */
const debounceThrottle = (callback: () => any, limit: number) => {
  let waiting = false
  let lastCallback: (() => any)|boolean
  let lastArguments: Array<any>

  return function (...args: Array<any>) {
    if (waiting) {
      lastCallback = callback
      lastArguments = Array.from(args)
    } else {
      callback(...args as [])
      waiting = true

      setTimeout(() => {
        if (typeof lastCallback === 'function') {
          lastCallback(...lastArguments as [])
          lastCallback = false
          lastArguments = []

          setTimeout(() => {
            waiting = false
          }, limit)

        } else {
          waiting = false
        }
      }, limit)
    }
  }
}


export default debounceThrottle
