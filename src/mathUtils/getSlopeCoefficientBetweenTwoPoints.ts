
/**
 * @function getSlopeCoefficientBetweenTwoPoints
 * Get the slope coefficient of the line passing through two given points (on a Cartesian plane px system)
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 */
const getSlopeCoefficientBetweenTwoPoints = (x1: number, y1: number, x2: number, y2: number): number => {
  return (y2 - y1) / (x2 - x1)
}


export default getSlopeCoefficientBetweenTwoPoints
