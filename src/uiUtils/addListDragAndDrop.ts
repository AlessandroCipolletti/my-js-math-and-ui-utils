import { isTablet, isMobile, isBrowser } from 'mobile-device-detect'

import fadeInElements from '../animationsUtils/fadeInElements'
import fadeOutElements from '../animationsUtils/fadeOutElements'
import cancelElementAnimationIfExists from '../animationsUtils/cancelElementAnimationIfExists'
import bouncingElements from '../animationsUtils/bouncingElements'
import moveToElements from '../animationsUtils/moveToElements'
import getEventCoordX from '../domUtils/getEventCoordX'
import getEventCoordY from '../domUtils/getEventCoordY'
import preventDefault from '../domUtils/preventDefault'
import redrawDomElement from '../domUtils/redrawDomElement'
import roundNumber from '../mathUtils/roundNumber'
import debounceThrottle from '../jsUtils/debounceThrottle'
import callCallbackIfDataChanged from '../jsUtils/callCallbackIfDataChanged'
import { getPointerEventForThisDevice } from './utils'

const MARGE_TO_START_SCROLLING = 100
const DELTA_SCROLL = 25

interface Rect {
  left: number,
  top: number,
  right: number,
  bottom: number,
}

type Handler = (element: HTMLElement, newIndex: number, dragInProgress: boolean) => void


/**
 * @function addListDragAndDrop
 * Handles list elements drag and drop (using shaow dom and animations).
 * Works better if the whole list is visible on the screen.
 * On mobile it works better if used with addTapAndLongPress inside a LongPress handler.
 * It needs a css class 'displayNone' ==> display: none;
 *
 * @example
 * const onListElementMouseDown = (event) => {
 *   const clickedListElement = event.target
 *   handleElementsListDragAndDrop(event, listDom, clickedListElement, saveListDrag)
 * }
 *
 * @param {AnyPointerEvent} event
 * @param {HTMLElement} list
 * @param {HTMLElement} element
 * @param {Handler} callback
 * @param {boolean} [verticalScroll = true]
 */
const addListDragAndDrop = (() => {
  let moveEventX = 0
  let moveEventY = 0
  let listMaxScrollTop = 0
  let listMaxScrollLeft = 0
  let finalNewIndex = -1
  let scrollIntervall = -1
  const animationScale = 1.4

  let listHasVerticalScroll = false
  let listHasHorizontalScroll = false
  let directionVertical = false
  let needToFix = true

  let listElement: HTMLElement
  let selectedElement: HTMLElement
  let draggedElement: HTMLElement|null

  let listRect: Rect
  let listElementsRects: Array<Rect> = []
  let onChange: Handler

  const isDesktop: boolean = !isTablet && !isMobile && isBrowser
  const [eventStart, eventMove, eventEnd] = getPointerEventForThisDevice()
  const divPreventEvents: HTMLElement = document.createElement('div')

  divPreventEvents.style.cssText = `
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    cursor: none;
    z-index: 9999999;
  `

  const preventDefaultSimple = (event: Event) => event.preventDefault()

  const getListElementsRects = (): void => {
    const elements = Array.from(listElement.children).filter((el: Element) => el instanceof HTMLElement) as Array<HTMLElement>

    listElementsRects = elements.map((el: HTMLElement): Rect => {
      const rect = el.getBoundingClientRect()

      return {
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right,
      }
    })

    if (directionVertical) {
      listElementsRects.sort((a: Rect, b: Rect) => a.top > b.top ? +1 : -1)
      updateVerticalDrop()
    } else {
      listElementsRects.sort((a: Rect, b: Rect) => a.left > b.left ? +1 : -1)
      updateHorizontalDrop()
    }
  }

  const updateElementsRects = (deltaX: number, deltaY: number): void => {
    listElementsRects.forEach((rect) => {
      rect.top += deltaY
      rect.bottom += deltaY
      rect.left += deltaX
      rect.right += deltaX
    })
  }

  const initDragAndDropDom = (startEventX: number, startEventY: number): HTMLElement => {
    const draggedElement = selectedElement.cloneNode(true) as HTMLElement
    draggedElement.classList.add('displayNone')
    moveEventX = startEventX
    moveEventY = startEventY
    draggedElement.style.cssText = `
      ${draggedElement.style.cssText}
      position: absolute;
      top: ${startEventY}px;
      left: ${startEventX}px;
      margin: 0px;
      transform: translate3d(-50%, -50%, 0px) scale(${animationScale}) rotate(0deg);
      transform-origin: 50% 50%;
      transition: none;
      z-index: 9999999;
    `

    document.body.appendChild(draggedElement)
    fadeInElements(draggedElement, {
      duration: 200,
      maxFadeIn: 0.7,
    })

    bouncingElements(draggedElement, {
      duration: 300,
      animationScale,
    })

    if (!isDesktop) {
      document.body.appendChild(divPreventEvents)
      divPreventEvents.addEventListener(eventStart, preventDefault)
    }

    return draggedElement
  }

  const removeDragAndDropDom = async(): Promise<void> => {
    if (!draggedElement) {
      return
    }

    if (!isDesktop) {
      divPreventEvents.remove()
      divPreventEvents.removeEventListener(eventStart, preventDefault)
    }

    cancelElementAnimationIfExists(draggedElement, 'bouncing')
    moveToElements(
      draggedElement,
      300,
      moveEventX,
      moveEventY,
      roundNumber((listElementsRects[finalNewIndex].left + listElementsRects[finalNewIndex].right) / 2, 0),
      roundNumber((listElementsRects[finalNewIndex].top + listElementsRects[finalNewIndex].bottom) / 2, 0),
      animationScale,
    )
    await fadeOutElements(draggedElement, {
      duration: 300,
      maxFadeIn: 0.7,
    })
    cancelElementAnimationIfExists(draggedElement, 'moveTo') // ??

    draggedElement.remove()
    draggedElement = null
  }

  const updateVerticalDrop = debounceThrottle((): void => {
    if (listElementsRects.length) {
      let currentIndex = 0
      let nexIndex = -1

      if (moveEventY < listElementsRects[0].top) {
        nexIndex = 0
      } else if (moveEventY > listElementsRects[listElementsRects.length - 1].bottom) {
        nexIndex = listElementsRects.length - 1
      } else {
        while (nexIndex === -1 && currentIndex < listElementsRects.length) {
          if (moveEventY < listElementsRects[currentIndex].bottom && moveEventY > listElementsRects[currentIndex].top) {
            nexIndex = currentIndex
          }
          currentIndex++
        }
      }

      if (nexIndex !== -1) {
        finalNewIndex = nexIndex
        onChange(selectedElement, finalNewIndex, true)
      }
    }
  }, 150)

  const updateHorizontalDrop = debounceThrottle((): void => {
    if (listElementsRects?.length) {
      let currentIndex = 0
      let nexIndex = -1

      if (moveEventX < listElementsRects[0].left) {
        nexIndex = 0
      } else if (moveEventX > listElementsRects[listElementsRects.length - 1].right) {
        nexIndex = listElementsRects.length - 1
      } else {
        while (nexIndex === -1 && currentIndex < listElementsRects.length) {
          if (moveEventX < listElementsRects[currentIndex].right && moveEventX > listElementsRects[currentIndex].left) {
            nexIndex = currentIndex
          }
          currentIndex++
        }
      }

      if (nexIndex !== -1) {
        finalNewIndex = nexIndex
        onChange(selectedElement, finalNewIndex, true)
      }
    }
  }, 150)

  const fixListDimension = (): void => {
    if (needToFix) {
      redrawDomElement(listElement) // small fix to force listElement redraw, to fix listElement.scrollHeight listElement.scrollLeft
      needToFix = false
    }
  }

  const scrollListUp = (): void => {
    fixListDimension()
    if (listElement.scrollTop === 0 || moveEventY > listRect.top + MARGE_TO_START_SCROLLING) {
      clearInterval(scrollIntervall)
      scrollIntervall = -1
    } else {
      const delta = roundNumber(Math.min(DELTA_SCROLL, listElement.scrollTop), 0)
      listElement.scrollTop = roundNumber(listElement.scrollTop - delta, 0)
      updateElementsRects(0, delta)
      updateVerticalDrop()
    }
  }

  const scrollListDown = (): void => {
    fixListDimension()
    if (listElement.scrollTop === listMaxScrollTop || moveEventY < listRect.bottom - MARGE_TO_START_SCROLLING) {
      clearInterval(scrollIntervall)
      scrollIntervall = -1
    } else {
      const delta = roundNumber(Math.min(DELTA_SCROLL, listMaxScrollTop - listElement.scrollTop), 0)
      listElement.scrollTop = roundNumber(listElement.scrollTop + delta, 0)
      updateElementsRects(0, -delta)
      updateVerticalDrop()
    }
  }

  const scrollListLeft = (): void => {
    fixListDimension()
    if (listElement.scrollLeft === 0 || moveEventX > listRect.left + MARGE_TO_START_SCROLLING) {
      clearInterval(scrollIntervall)
      scrollIntervall = -1
    } else {
      const delta = roundNumber(Math.min(DELTA_SCROLL, listElement.scrollLeft), 0)
      listElement.scrollLeft = roundNumber(listElement.scrollLeft - delta, 0)
      updateElementsRects(delta, 0)
      updateHorizontalDrop()
    }
  }

  const scrollListRight = (): void => {
    fixListDimension()
    if (listElement.scrollLeft === listMaxScrollLeft || moveEventX < listRect.right - MARGE_TO_START_SCROLLING) {
      clearInterval(scrollIntervall)
      scrollIntervall = -1
    } else {
      const delta = roundNumber(Math.min(DELTA_SCROLL, listMaxScrollLeft - listElement.scrollLeft), 0)
      listElement.scrollLeft = roundNumber(listElement.scrollLeft + delta, 0)
      updateElementsRects(-delta, 0)
      updateHorizontalDrop()
    }
  }

  const onDragMove = (event: AnyPointerEvent) => {
    preventDefault(event)
    if (event.target !== divPreventEvents && draggedElement) {
      moveEventX = getEventCoordX(event, 0, true)
      moveEventY = getEventCoordY(event, 0, true)
      draggedElement.style.left = `${moveEventX}px`
      draggedElement.style.top = `${moveEventY}px`

      let intervalId
      if (directionVertical) {
        if (!scrollIntervall) {
          updateVerticalDrop()
          if (listHasVerticalScroll) {
            if (listElement.scrollTop > 0 && moveEventY < listRect.top + MARGE_TO_START_SCROLLING) {
              intervalId = setInterval(scrollListUp, 20)
            } else if (listElement.scrollTop < listMaxScrollTop && moveEventY > listRect.bottom - MARGE_TO_START_SCROLLING) {
              intervalId = setInterval(scrollListDown, 20)
            }
          }
        }
      } else {
        if (!scrollIntervall) {
          updateHorizontalDrop()
          if (listHasHorizontalScroll) {
            if (listElement.scrollLeft > 0 && moveEventX < listRect.left + MARGE_TO_START_SCROLLING) {
              intervalId = setInterval(scrollListLeft, 20)
            } else if (listElement.scrollLeft < listMaxScrollLeft && moveEventX > listRect.right - MARGE_TO_START_SCROLLING) {
              intervalId = setInterval(scrollListRight, 20)
            }
          }
        }
      }

      if (intervalId) {
        scrollIntervall = parseInt(`${intervalId}`)
      }
    }
  }

  const onDragEnd = async(event: AnyPointerEvent) => {
    preventDefault(event)
    if (event.target !== divPreventEvents && draggedElement) {
      clearInterval(scrollIntervall)
      removeDragAndDropDom()
      scrollIntervall = -1
      onChange(selectedElement, finalNewIndex, false)
      // @ts-expect-error it doesn't like a variable event name
      document.removeEventListener(eventMove, onDragMove)
      // @ts-expect-error it doesn't like a variable event name
      document.removeEventListener(eventEnd, onDragEnd)
      selectedElement.removeEventListener(eventMove, preventDefaultSimple)
      listElement.style.overflow = 'scroll'
      listElementsRects = []
      onChange = () => {}
    }
  }

  return (
    event: AnyPointerEvent,
    list: HTMLElement,
    element: HTMLElement,
    callback: Handler,
    verticalScroll = true,
  ): void => {

    preventDefault(event)
    listElement = list
    selectedElement = element
    directionVertical = verticalScroll
    listRect = listElement.getBoundingClientRect()
    draggedElement = initDragAndDropDom(getEventCoordX(event, 0, true), getEventCoordY(event, 0, true))
    listHasVerticalScroll = (listElement.scrollHeight > listElement.clientHeight)
    listHasHorizontalScroll = (listElement.scrollWidth > listElement.clientWidth)
    listMaxScrollTop = listElement.scrollHeight - listElement.clientHeight
    listMaxScrollLeft = listElement.scrollWidth - listElement.clientWidth

    onChange = callCallbackIfDataChanged(callback as () => any)
    needToFix = true
    getListElementsRects()

    listElement.style.overflow = 'hidden'
    selectedElement.addEventListener(eventMove, preventDefaultSimple)
    // @ts-expect-error it doesn't like a variable event name
    document.addEventListener(eventMove, onDragMove)
    // @ts-expect-error it doesn't like a variable event name
    document.addEventListener(eventEnd, onDragEnd)
  }
})()


export default addListDragAndDrop
