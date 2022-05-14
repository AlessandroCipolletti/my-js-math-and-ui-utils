
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
 * @returns {Function}
 */
const throttle = (callback: () => any, delay: number) => {
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


export default throttle
