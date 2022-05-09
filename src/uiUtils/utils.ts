
export const getPointerEventForThisDevice = (): Array<string> => {
  if ('ontouchstart' in window) {
    return ['touchstart', 'touchmove', 'touchend', 'touchcancel']
  } else {
    return ['pointerdown', 'pointermove', 'pointerup', 'pointercancel']
  }
}
