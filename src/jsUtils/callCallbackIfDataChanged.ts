import isEqual from 'lodash.isequal'


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
const callCallbackIfDataChanged = (callback: () => any) => {
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


export default callCallbackIfDataChanged
