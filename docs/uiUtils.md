[< Back](https://github.com/AlessandroCipolletti/js-math-and-ui-utils)

# Animations Utils reference


<a name="multiTouchEventsHandlers
Takes care of all the annoying and strage behaviors related to touch events,
and allows you to simply attach one or more handlers ignoring how it works.
For example when you tap something you may accidentally fire some touchmove events who can break you external behavior.
NB. This is useful only if you need multiple handlers on the same element, and you dont want to confuse one event for another.
If you only need touchstart / touchmove / touchend handlers, I suggest to simply listen these 3 native events."></a>

## multiTouchEventsHandlers
Takes care of all the annoying and strage behaviors related to touch events,
and allows you to simply attach one or more handlers ignoring how it works.
For example when you tap something you may accidentally fire some touchmove events who can break you external behavior.
NB. This is useful only if you need multiple handlers on the same element, and you dont want to confuse one event for another.
If you only need touchstart / touchmove / touchend handlers, I suggest to simply listen these 3 native events.

(target, handlers) ⇒ <code>void</code>

| Param | Type |
| --- | --- |
| target | <code>HTMLElement</code> |
| handlers | <code>MultiTouchHandlers</code> |

**Example**  
```js
// for touch devices:
multiTouchEventsHandlers(myDom, { // one or more handlers
  onSingleTouchStart,
  onGestureChange,
  onOneFingerLongPress,
})
```
<a name="multiTouchMultiDeviceEventsHandlers
Allows to attach multiple multitouch handlers to multiple targets, on multiple kinds of devices, at the same time.
If you pass gestures handlers, they will be treated as needed for both touch devices and desktop (with trackpads).
NB. Mobile first_ handlers are named like onSingleTouchStart, onSingleTouchMove and onSingleTouchEnd,
but they work on desktop too, mapping mousedown mousevove and mouseup events."></a>

## multiTouchMultiDeviceEventsHandlers
Allows to attach multiple multitouch handlers to multiple targets, on multiple kinds of devices, at the same time.
If you pass gestures handlers, they will be treated as needed for both touch devices and desktop (with trackpads).
NB. Mobile first: handlers are named like onSingleTouchStart, onSingleTouchMove and onSingleTouchEnd,
but they work on desktop too, mapping mousedown mousevove and mouseup events.

(targets, handlers) ⇒ <code>void</code>

| Param | Type |
| --- | --- |
| targets | <code>HTMLElement</code> \| <code>Array.&lt;HTMLElement&gt;</code> |
| handlers | <code>MultiTouchHandlers</code> |

**Example**  
```js
// on any type of device:
multiTouchMultiDeviceEventsHandlers([myDom1, myDom2], {
  onSingleTouchStart,
  onSingleTouchMove,
  onSingleTouchEnd,
  onGestureStart,
  onGestureChange,
  onGestureEnd,
})
```
<a name="trackpadGestureHandlers
Handles pinch-to-zoom gesture on laptop trackpad.
It can handle onGestureStart onGestureChange onGestureEnd with three params_ (x, y, scale)"></a>

## trackpadGestureHandlers
Handles pinch-to-zoom gesture on laptop trackpad.
It can handle onGestureStart onGestureChange onGestureEnd with three params: (x, y, scale).

(target, handlers) ⇒ <code>void</code>

| Param | Type |
| --- | --- |
| target | <code>HTMLElement</code> |
| handlers | <code>GestureHandlers</code> |

**Example**  
```js
// for desktop devices:
trackpadGestureHandlers(myDom, {
  onGestureStart,
  onGestureChange,
  onGestureEnd,
})
```
<a name="addHorizontalSliderDrag
Attach a drag handler to any type of horizontal slider input.
if returnRelativeDiff === true_ it returns the difference between every mouseMove and the original mouseDown.
      So it goes negative if you drag to the left, and positive to the right.
  if returnRelativeDiff === false_ it return the value corresponding at che current mouse event coordinates.
      So its always a number between 0 and valueMax."></a>

## addHorizontalSliderDrag
Attach a drag handler to any type of horizontal slider input.
if returnRelativeDiff === true: it returns the difference between every mouseMove and the original mouseDown.
      So it goes negative if you drag to the left, and positive to the right.
  if returnRelativeDiff === false: it return the value corresponding at che current mouse event coordinates.
      So its always a number between 0 and valueMax.

(draggableDom, sliderDom, onDrag, valueMax, valueMin, [returnRelativeDiff], [decimals], [waitingTime]) ⇒ <code>void</code>

| Param | Type | Default |
| --- | --- | --- |
| draggableDom | <code>HTMLElement</code> |  |
| sliderDom | <code>HTMLElement</code> |  |
| onDrag | <code>DragHandler</code> |  |
| valueMax | <code>number</code> |  |
| valueMin | <code>number</code> |  |
| [returnRelativeDiff] | <code>boolean</code> | <code>false</code> |
| [decimals] | <code>number</code> | <code>4</code> |
| [waitingTime] | <code>number</code> | <code>0</code> |

<a name="addListDragAndDrop
Handles list elements drag and drop (using shaow dom and animations).
Works better if the whole list is visible on the screen.
On mobile it works better if used with addTapAndLongPress inside a LongPress handler.
It needs a css class displayNone ==> display_ none;"></a>

## addListDragAndDrop
Handles list elements drag and drop (using shaow dom and animations).
Works better if the whole list is visible on the screen.
On mobile it works better if used with addTapAndLongPress inside a LongPress handler.
It needs a css class displayNone ==> display: none;

(event, list, element, callback, [verticalScroll]) ⇒ <code>void</code>

| Param | Type | Default |
| --- | --- | --- |
| event | <code>AnyPointerEvent</code> |  |
| list | <code>HTMLElement</code> |  |
| element | <code>HTMLElement</code> |  |
| callback | <code>Handler</code> |  |
| [verticalScroll] | <code>boolean</code> | <code>true</code> |

**Example**  
```js
const onListElementMouseDown = (event) => {
  const clickedListElement = event.target
  handleElementsListDragAndDrop(event, listDom, clickedListElement, saveListDrag)
}
```
<a name="addTapAndLongPress
Given a element, it handles (and distinguishes) Tap and LongPress event.
Its optimised for lists, and fixes an annoying ios bug about scrolling a list of elements;
but it can be used on any type of html element.
Callbacks are called with the native pointer event as the only param.
You can specify how many px are needed to handle the scroll event, and how many ms should pass to call the LongPress handler."></a>

## addTapAndLongPress
Given a element, it handles (and distinguishes) Tap and LongPress event.
Its optimised for lists, and fixes an annoying ios bug about scrolling a list of elements;
but it can be used on any type of html element.
Callbacks are called with the native pointer event as the only param.
You can specify how many px are needed to handle the scroll event, and how many ms should pass to call the LongPress handler.

(listElement, onTap, onLongPress, [maxPxToMove], [minMsToLongPress]) ⇒ <code>void</code>

| Param | Type | Default |
| --- | --- | --- |
| listElement | <code>HTMLElement</code> |  |
| onTap | <code>Handler</code> |  |
| onLongPress | <code>Handler</code> |  |
| [maxPxToMove] | <code>number</code> | <code>20</code> |
| [minMsToLongPress] | <code>number</code> | <code>250</code> |

**Example**  
```js
addTapAndLongPress(myListDom, onTapHandler, onLongPressHandler)
```
<a name="addVerticalSliderDrag
Attach a drag handler to any type of vertical slider input.
if returnRelativeDiff === true_ it returns the difference between every mouseMove and the original mouseDown.
      So it goes negative if you drag to the left, and positive to the right.
  if returnRelativeDiff === false_ it return the value corresponding at che current mouse event coordinates.
      So its always a number between 0 and valueMax."></a>

## addVerticalSliderDrag
Attach a drag handler to any type of vertical slider input.
if returnRelativeDiff === true: it returns the difference between every mouseMove and the original mouseDown.
      So it goes negative if you drag to the left, and positive to the right.
  if returnRelativeDiff === false: it return the value corresponding at che current mouse event coordinates.
      So its always a number between 0 and valueMax.

(draggableDom, sliderDom, onDrag, valueMax, valueMin, [returnRelativeDiff], [decimals], [waitingTime]) ⇒ <code>void</code>

| Param | Type | Default |
| --- | --- | --- |
| draggableDom | <code>HTMLElement</code> |  |
| sliderDom | <code>HTMLElement</code> |  |
| onDrag | <code>DragHandler</code> |  |
| valueMax | <code>number</code> |  |
| valueMin | <code>number</code> |  |
| [returnRelativeDiff] | <code>boolean</code> | <code>false</code> |
| [decimals] | <code>number</code> | <code>4</code> |
| [waitingTime] | <code>number</code> | <code>0</code> |
