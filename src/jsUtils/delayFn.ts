
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
const delayFn = (fn: (...args: any[]) => any) => (...args: Array<any>): void => {
  requestAnimationFrame(() => {
    fn(...args as [])
  })
}


export default delayFn
