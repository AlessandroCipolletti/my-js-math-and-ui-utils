
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
 * @param {any | Array<any>} els
 * @param {Function} fn (el: any, ...args: Array<any>) => any
 * @param {Array<any>} ...params
 * @returns {Function}
 */
const iterateFn = async(
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


export default iterateFn
