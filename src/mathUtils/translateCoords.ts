
/**
 * @function translateCoords
 * Translate a point's coords by a specific amount (on a Cartesian plane px system)
 *
 * @example
 * translateCoords(1, 1, 3, -4) // ==> [ 4, -3]
 *
 * @param {number} x
 * @param {number} y
 * @param {number} dx
 * @param {number} dy
 * @return {Array<number>} Array with [x, y] translated coords
 */
const translateCoords = (x: number, y: number, dx: number, dy: number): Array<number> => {
  return [
    x + dx,
    y + dy,
  ]
}


export default translateCoords
