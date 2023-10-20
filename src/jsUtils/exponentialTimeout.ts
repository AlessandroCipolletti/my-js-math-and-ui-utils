const fibonacciTimeoutSequence = [
  1, 1, 1,
  2, 2, 2,
  3, 3, 3,
  5, 5, 5,
  8, 8, 8,
  13, 13, 13,
  21, 21, 21,
  34, 34, 34,
  55, 55, 55,
  89, 89, 89,
  144, 144, 144,
  233, 233, 233,
  377, 377, 377,
  610, 610, 610,
  987, 987, 987,
]


/**
 * @function exponentialTimeout
 * @description A function that will call a callback function with an exponential timeout.
 * The callback should return a boolean, if it returns true, the function will be called again.
 * The timeout is based on the fibonacci sequence.
 *
 * @example
 * exponentialTimeout(() => {
 *  return Math.random() > 0.5
 * })
 *
 * @param {Function} callback
 */
const exponentialTimeout = (callback: () => unknown, iteration = 0) => {
  setTimeout(() => {
    const shouldTryAgain = callback()
    if (shouldTryAgain) {
      exponentialTimeout(callback, iteration + 1)
    }
  }, (fibonacciTimeoutSequence[iteration] || Math.max(...fibonacciTimeoutSequence)) * 1000)
}


export default exponentialTimeout
