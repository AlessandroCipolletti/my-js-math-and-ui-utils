
/**
 * @function getLineFunctionBetweenTwoPoints
 * Get the cartesian function of the line passing through two given points (on a Cartesian plane px system)
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {(n: number) => number}
 */
const getLineFunctionBetweenTwoPoints = (x1: number, y1: number, x2: number, y2: number): (n: number) => number => {
  return (x: number) => (((x - x1) * (y2 - y1)) / (x2 - x1)) + y1
}


export default getLineFunctionBetweenTwoPoints
