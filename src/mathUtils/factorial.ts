
/**
 * @function factorial
 * Get the factorial of the given number
 * (Recursive function)
 *
 * @example
 * factorial(5) // ==> 120 = 5! = 5 * 4 * 3 * 2 * 1
 *
 * @param {number} n
 * @returns {number}
 */
const factorial = (n: number): number => {
  return n <= 1 ? 1 : n * factorial(n - 1)
}


export default factorial
