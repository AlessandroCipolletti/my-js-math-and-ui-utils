
/**
 * @typedef MyCanvasRenderingContext2D
 * Extends a CanvasRenderingContext2D to save the last used coords
 * @prop {number} lastDrawCoordX
 * @prop {number} lastDrawCoordY
 */
declare interface MyCanvasRenderingContext2D extends CanvasRenderingContext2D {
  lastDrawCoordX: number,
  lastDrawCoordY: number,
}

/**
 * @typedef RgbaColorObject
 * @prop {number} r int [0...255]
 * @prop {number} g int [0...255]
 * @prop {number} b int [0...255]
 * @prop {number} a float [0...1]
 */
declare interface RgbaColorObject {
  r: number,
  g: number,
  b: number,
  a: number,
}

/**
 * @typedef RgbColorObject
 * @prop {number} r int [0...255]
 * @prop {number} g int [0...255]
 * @prop {number} b int [0...255]
 */
declare interface RgbColorObject {
  r: number,
  g: number,
  b: number,
}

/**
 * @typedef HslaColorObject
 * @prop {number} h int [0...360]
 * @prop {number} s int [0...100]
 * @prop {number} l int [0...100]
 * @prop {number} a float [0...1]
 */
declare interface HslaColorObject {
  h: number,
  s: number,
  l: number,
  a: number,
}

/**
 * @typeof DomRect
 * @prop {number} width
 * @prop {number} height
 * @prop {number} x
 * @prop {number} y
 * @prop {number} left
 * @prop {number} top
 * @prop {number} right
 * @prop {number} bottom
 * @prop {number} centerX
 * @prop {number} centerY
 */
declare interface DomRect {
  width: number,
  height: number,
  x: number,
  y: number,
  left: number,
  top: number,
  right: number,
  bottom: number,
  centerX: number,
  centerY: number,
}

declare type AnyPointerEvent = MouseEvent | PointerEvent | TouchEvent
declare type AnyPointerEventOrArray = MouseEvent | PointerEvent | Touch | TouchEvent | TouchList
declare type OnePointerEvent = MouseEvent | PointerEvent | Touch
