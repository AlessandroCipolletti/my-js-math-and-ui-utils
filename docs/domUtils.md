[< Back](https://github.com/AlessandroCipolletti/js-math-and-ui-utils)

# Dom Utils reference

## Importing
```js
// whole module
import { * as DomUtils } from 'js-math-and-ui-utils/domUtils'

// single methods
import appendChilds from 'js-math-and-ui-utils/domUtils/appendChilds'
import attachDomEvents from 'js-math-and-ui-utils/domUtils/attachDomEvents'
import createDom from 'js-math-and-ui-utils/domUtils/createDom'
import filterTouchesByTargets from 'js-math-and-ui-utils/domUtils/filterTouchesByTargets'
import getDomRect from 'js-math-and-ui-utils/domUtils/getDomRect'
import getEventCoordX from 'js-math-and-ui-utils/domUtils/getEventCoordX'
import getEventCoordY from 'js-math-and-ui-utils/domUtils/getEventCoordY'
import nodeIsChildOf from 'js-math-and-ui-utils/domUtils/nodeIsChildOf'
import preventAllDefault from 'js-math-and-ui-utils/domUtils/preventAllDefault'
import preventDefault from 'js-math-and-ui-utils/domUtils/preventDefault'
import preventDefaultTouchOnEls from 'js-math-and-ui-utils/domUtils/preventDefaultTouchOnEls'
import preventScrollDefaultIfNeeded from 'js-math-and-ui-utils/domUtils/preventScrollDefaultIfNeeded'
import redrawDomElement from 'js-math-and-ui-utils/domUtils/redrawDomElement'
```

<a name="appendChilds
Append multiple childs with one line."></a>

## appendChilds
Append multiple childs with one line.

(container, childs) ⇒ <code>void</code>

| Param | Type |
| --- | --- |
| container | <code>HTMLElement</code> |
| childs | <code>Array.&lt;HTMLElement&gt;</code> |

**Example**  
```js
appendChilds(containerDom, [myDom1, myDom2])
```
<a name="attachDomEvents
Attaches multiple event handlers to multiple dom elements at the same time."></a>

## attachDomEvents
Attaches multiple event handlers to multiple dom elements at the same time.

(elements, events) ⇒ <code>void</code>

| Param | Type |
| --- | --- |
| elements | <code>Array.&lt;HTMLElement&gt;</code> |
| events | <code>Record.&lt;string, function()&gt;</code> |

**Example**  
```js
attachDomEvents([mydom1, myDom2], {
  'mousedown': (e) => {},
  'mouseup': (e) => {},
})
```
<a name="createDom
Creates (and return) a dom element, and assigns some class names to it."></a>

## createDom
Creates (and return) a dom element, and assigns some class names to it.

([tagName], [...classes]) ⇒ <code>HTMLElement</code>

| Param | Type | Default |
| --- | --- | --- |
| [tagName] | <code>string</code> | <code>&quot;&#x27;div&#x27;&quot;</code> |
| [...classes] | <code>string</code> |  |

**Example**  
```js
const div = createDom() // ==> <div></div>
const span = createDom('span') // ==> <span></span>
const headerWithClasses = createDom('header', 'hello', 'world') // ==> <header class="hello world"></header>
```
<a name="filterTouchesByTargets
Given a TouchEvent, it filters the e.touches that are fired on the given target(s)"></a>

## filterTouchesByTargets
Given a TouchEvent, it filters the e.touches that are fired on the given target(s).

(event, targets) ⇒ <code>Array&lt;OnePointerEvent&gt;</code>

| Param | Type |
| --- | --- |
| event | <code>AnyPointerEvent</code> |
| targets | <code>HTMLElement</code> \| <code>Array.&lt;HTMLElement&gt;</code> |

**Example**  
```js
function onTouchStart(e) {
  const touches = filterTouchesByTargets(e, myDesidedTarget)
}
```
<a name="getDomRect
Gets a detailed positioning information about the given dom element (in px, rounded a 1 decimal digit)
If you want to get coords related to its container, you can specify containers offsetX and offsetY position.
Otherwise it returns coords relative to the page."></a>

## getDomRect
Gets a detailed positioning information about the given dom element (in px, rounded a 1 decimal digit)
If you want to get coords related to its container, you can specify containers offsetX and offsetY position.
Otherwise it returns coords relative to the page.

(element, [offsetX], [offsetY]) ⇒ <code>DomRect</code>

| Param | Type |
| --- | --- |
| element | <code>HTMLElement</code> |
| [offsetX] | <code>number</code> |
| [offsetY] | <code>number</code> |

**Example**  
```js
const myDomRect = getDomRect(myDom)
```
<a name="getEventCoordX
Gets the coordX of any type of pointer input"></a>

## getEventCoordX
Gets the coordX of any type of pointer input.

(event, [offset], [absoluteByPage]) ⇒ <code>number</code>

| Param | Type | Default |
| --- | --- | --- |
| event | <code>AnyPointerEventOrArray</code> |  |
| [offset] | <code>number</code> | <code>0</code> |
| [absoluteByPage] | <code>boolean</code> | <code>false</code> |

**Example**  
```js
function onMouseMove(event) {
  const mouseX = getEventCoordX(event)
}
```
<a name="getEventCoordY
Gets the coordY of any type of pointer input"></a>

## getEventCoordY
Gets the coordY of any type of pointer input.

(event, [offset], [absoluteByPage]) ⇒ <code>number</code>

| Param | Type | Default |
| --- | --- | --- |
| event | <code>AnyPointerEventOrArray</code> |  |
| [offset] | <code>number</code> | <code>0</code> |
| [absoluteByPage] | <code>boolean</code> | <code>false</code> |

**Example**  
```js
function onMouseMove(event) {
  const mouseY = getEventCoordY(event)
}
```
<a name="nodeIsChildOf
Checks if node is child (at any level) of container"></a>

## nodeIsChildOf
Checks if node is child (at any level) of container.

(node, container) ⇒ <code>boolean</code>

| Param | Type |
| --- | --- |
| node | <code>HTMLElement</code> |
| container | <code>HTMLElement</code> |

**Example**  
```js
const isContained = nodeIsChildOf(someChildDom, containerDom)
```
<a name="preventAllDefault
Prevents and stops propagation for all pointer related events on the given HTMLElement"></a>

## preventAllDefault
Prevents and stops propagation for all pointer related events on the given HTMLElement.

(element) ⇒ <code>void</code>

| Param | Type |
| --- | --- |
| element | <code>HTMLElement</code> |

**Example**  
```js
preventAllDefault(myDom)
```
<a name="preventDefault
Prevents default event behavior and stop event propagation"></a>

## preventDefault
Prevents default event behavior and stop event propagation.

(e) ⇒ <code>void</code>

| Param | Type |
| --- | --- |
| e | <code>Event</code> |

**Example**  
```js
function onTouchStart(e) {
  preventDefault(e)
}
```
<a name="preventDefaultTouchOnEls
Prevents default behavior and stop propagation for all pointer start on multiple elements at the same time.
pointerdown, mousedown, and (if supported) touchstart"></a>

## preventDefaultTouchOnEls
Prevents default behavior and stop propagation for all pointer start on multiple elements at the same time.
pointerdown, mousedown, and (if supported) touchstart.

(els) ⇒ <code>void</code>

| Param | Type |
| --- | --- |
| els | <code>Array.&lt;HTMLElement&gt;</code> |

**Example**  
```js
preventDefaultTouchOnEls([myDom1, myDom2])
```
<a name="preventScrollDefaultIfNeeded
This fixes an annoying iOS15+ behavior on apple devices.
Prevents pull down to refresh if the element you are pulling down has a scroll.
I used a css class scrollable to identify the dom elements who needs to prevent pull to refresh.
You can do it by using getComputedStyle(target).overflow === auto|scroll, but its more demanding in terms of performance."></a>

## preventScrollDefaultIfNeeded
This fixes an annoying iOS15+ behavior on apple devices.
Prevents pull down to refresh if the element you are pulling down has a scroll.
I used a css class scrollable to identify the dom elements who needs to prevent pull to refresh.
You can do it by using getComputedStyle(target).overflow === auto\|scroll, but its more demanding in terms of performance.

(event) ⇒ <code>void</code>

| Param | Type |
| --- | --- |
| event | <code>AnyPointerEvent</code> |

**Example**  
```js
appContainer.addEventListener('touchstart', (e) => {
  preventScrollDefaultIfNeeded(e)
}, false)
```
<a name="redrawDomElement
Forces an update for the given element.
Sometime this is useful to force a dom element to take care of a css or scroll change."></a>

## redrawDomElement
Forces an update for the given element.
Sometime this is useful to force a dom element to take care of a css or scroll change.

(element) ⇒ <code>void</code>

| Param | Type |
| --- | --- |
| element | <code>HTMLElement</code> |

**Example**  
```js
redrawDomElement(myDom)
```
