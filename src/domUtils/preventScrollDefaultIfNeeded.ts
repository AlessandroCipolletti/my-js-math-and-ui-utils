import getEventCoordY from './getEventCoordY'
import preventDefault from './preventDefault'


/**
 * @function preventScrollDefaultIfNeeded
 * This fixes an annoying iOS15+ behavior on apple devices.
 * Prevents 'pull down to refresh' if the element you are pulling down has a scroll.
 * I used a css class "scrollable" to identify the dom elements who needs to prevent 'pull to refresh'.
 * You can do it by using getComputedStyle(target).overflow === 'auto'|'scroll', but it's more demanding in terms of performance.
 *
 * @example
 * mainContainer.addEventListener('touchstart', (e) => {
 *   preventScrollDefaultIfNeeded(e)
 * }, false)
 *
 * @param {AnyPointerEvent} event
 * @returns {void}
 */
const preventScrollDefaultIfNeeded = (event: AnyPointerEvent): void => {
  const eventMove = 'ontouchstart' in window ? 'touchmove' : 'pointermove'
  const eventEnd = 'ontouchstart' in window ? 'touchend' : 'pointerup'
  let target = event.target as HTMLElement
  let startY = 0
  let scrollStartedFromTop = false
  let hasVerticalScroll = false
  let hasHorizontalScroll = false
  // const overflowScrollValues: Array<string> = ['scroll', 'auto']

  while (target && target !== document.body) {
    // if (overflowScrollValues.includes(getComputedStyle(target).overflow)) {
    if (target.classList.contains('scrollable')) {
      hasVerticalScroll = target.scrollHeight > target.clientHeight
      hasHorizontalScroll = target.scrollWidth > target.clientWidth
      break
    }
    target = target.parentNode as HTMLElement
  }

  if (hasVerticalScroll) {
    if (target.scrollTop === 0) {
      startY = getEventCoordY(event, 0)
      scrollStartedFromTop = true
      target.scrollTop = 1
    } else if (target.scrollTop === (target.scrollHeight - target.clientHeight)) {
      target.scrollTop = (target.scrollHeight - target.clientHeight) - 1
    }
  } else if (hasHorizontalScroll) {
    if (target.scrollLeft === 0) {
      target.scrollLeft = 1
    } else if (target.scrollLeft === (target.scrollWidth - target.clientWidth)) {
      target.scrollLeft = (target.scrollWidth - target.clientWidth) - 1
    }
  }

  const onTouchMove = (event: AnyPointerEvent) => {
    if (!hasVerticalScroll && !hasHorizontalScroll) {
      preventDefault(event)
      if (document.activeElement && document.activeElement instanceof HTMLElement) {
        const elementTag: string = document.activeElement.tagName.toLowerCase()
        const elementType: string = (document.activeElement.getAttribute('type') || '').toLowerCase()

        if (elementTag === 'input' && (elementType === 'text' || elementType === 'password')) {
          document.activeElement.blur()
        }
      }
    } else if (hasVerticalScroll && scrollStartedFromTop) {
      const moveY = getEventCoordY(event, 0)
      if (moveY > startY) {
        preventDefault(event)
      }
    }
  }

  const onTouchEnd = () => {
    document.body.removeEventListener(eventMove, onTouchMove)
    document.body.removeEventListener(eventEnd, onTouchEnd)
  }

  document.body.addEventListener(eventMove, onTouchMove)
  document.body.addEventListener(eventEnd, onTouchEnd, true)
}


export default preventScrollDefaultIfNeeded
