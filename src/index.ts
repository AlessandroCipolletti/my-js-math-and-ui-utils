export {
  setDefaultDecimalDigits,
  roundNumber,
  getNumberInBetween,
  clamp,
  linerarInterpolation,
  lerp,
  getRandomNumber,
  getPercentageOfValue,
  getValueOfPercentage,
  getLogarithmicValueOfPercentage,
  getLogarithmicPercentageOfValue,
  getAverage,
  getGreatCommonDivisor,
  valuesAreSimilar,
  factorial,
  naturalNumbersSummation,
  getQuadraticBezierCurveLength,
  getQuadraticBezierValueAtTime,
  getQuadraticBezierCurvePointAtTime,
  convertAngleRadiansToDegrees,
  convertAngleDegreesToRadians,
  getDistanceBetweenTwoPoints,
  getDistanceBetweenThreePoints,
  distanceBetweenTwoPointsGreaterThan,
  getAngleDegreesBetweenTwoPoints,
  getAngleRadiansBetweenTwoPoints,
  rotateCoords,
  translateCoords,
  getMiddlePointCoords,
  getSlopeCoefficientBetweenTwoPoints,
  getLineFunctionBetweenTwoPoints,
  getPerpendicularLineFunctionPassingByPoint,
  getIntersectionBetween4Points,
  getPointProjectionOnLine,
} from './mathUtils'

export {
  animateElement,
  cancelElementAnimationIfExists,
  fadeInElements,
  fadeOutElements,
  toggleFadeElements,
  addInElements,
  removeOutElements,
  bouncingElements,
  moveToElements,
} from './animationsUtils'

export {
  drawCircle,
  drawSprayCircle,
  drawParticlesRect,
  drawParticlesCircle,
  drawFramesAlongBezierCurveLine,
  fillCanvasWithImage,
  canvasIsEvenlyColored,
  getCanvasRgbaColorAtPx,
  fillCompletely,
  fillWithBucket,
} from './canvasUtils'

export {
  rgbaToRgbaString,
  rgbaStringToRgba,
  hexToRgba,
  rgbToHex,
  rgbaToHex,
  compareRgbColorsWithTolerance,
  hslaToRgba,
  hslaStringToRgba,
  getRandomRgbaColor,
  getRandomHexColor,
  getRandomHslaColor,
  colorStringToRgb,
  applyBrightnessToHex,
  getHexBrightness,
} from './colorsUtils'

export {
  preventDefaultTouchOnEls,
  preventDefault,
  preventMoveDefaultIfNeeded,
  preventAllDefault,
  createDom,
  getEventCoordX,
  getEventCoordY,
  attachDomEvents,
  getDomRect,
  nodeIsChildOf,
  redrawDomElement,
  filterTouchesByTargets,
  appendChilds,
} from './domUtils'

export {
  setDefaultMaxImageSideSize,
  resizeBase64AndGetBase64,
  resizeImageAndGetLocalUrl,
  resizeImageAndGetBase64,
  findImageContentCoords,
  cropImage,
  flipImage,
  getBlobFromBase46,
  getCanvasBlobAsync,
  convertImgToCanvas,
  getImageBase64Async,
  base64ToImageData,
  mergeBase64Images,
  blobToBase64Async,
  getImageFromUrlAsync,
  loadImageOffThread,
  setImageSrcAsync,
  checkImageUrlValidity,
  addImageWhiteBgAndGetBase64,
  cropImageWithMargin,
  imageHasUniformBackground,
  imageHasTransparentBackground,
  addImageOutlineAndGetBase64,
} from './imageUtils'

export {
  deepCopy,
  delay,
  delayFn,
  iterateFn,
  throttle,
  debounceThrottle,
  callCallbackIfDataChanged,
  copyTextToClipboard,
  waitWorkerMessage,
  fetchUrlFileOffThread,
  arrayOrderNumberIncreasing,
  arrayOrderNumberDecreasing,
  arrayOrderStringAlphabetically,
  arrayOrderStringDown,
} from './jsUtils'

export { multiTouchEventsHandlers } from './uiUtils/pointerEventsUtils/multiTouchEventsHandlers'
export { multiDeviceEventsHandlers } from './uiUtils/pointerEventsUtils/multiTouchMultiDeviceEventsHandlers'
export { handleTrackpadPinchGesture } from './uiUtils/pointerEventsUtils/trackpadGestureHandlers'

export { addHorizontalSliderDrag } from './uiUtils/addHorizontalSliderDrag'
export { addVerticalSliderDrag } from './uiUtils/addVerticalSliderDrag'
export { addTapAndLongPressHandlers } from './uiUtils/addTapAndLongPress'
export { addListDragAndDropHandler } from './uiUtils/addListDragAndDrop'
