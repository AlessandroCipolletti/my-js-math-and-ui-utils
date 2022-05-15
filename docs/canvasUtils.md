[< Back](https://github.com/AlessandroCipolletti/js-math-and-ui-utils)

# Canvas Utils reference

<a name="canvasIsEvenlyColored
Checks if the whole canvas is filled with the same rgba color
(or if its all transparent)"></a>

## canvasIsEvenlyColored
Checks if the whole canvas is filled with the same rgba color.
(or if its all transparent)

(destinationContext) ⇒ <code>boolean</code>

| Param | Type |
| --- | --- |
| destinationContext | <code>MyCanvasRenderingContext2D</code> |

**Example**  
```js
canvasIsEvenlyColored(mycontext) // ==> true | false
```
<a name="drawCircle
Draw a circle on a canvas context, in a standardized way.
Takes care of position {x, y}, size, alpha, color and blur."></a>

## drawCircle
Draw a circle on a canvas context, in a standardized way.
Takes care of position {x, y}, size, alpha, color and blur.

(destinationContext, x, y, color, size, alpha, [_], [blur]) ⇒ <code>void</code>

| Param | Type | Default |
| --- | --- | --- |
| destinationContext | <code>MyCanvasRenderingContext2D</code> |  |
| x | <code>number</code> |  |
| y | <code>number</code> |  |
| color | <code>string</code> |  |
| size | <code>number</code> |  |
| alpha | <code>number</code> |  |
| [_] | <code>number</code> | <code>0</code> |
| [blur] | <code>number</code> | <code>0</code> |

**Example**  
```js
drawCircle(myContext, 100, 100, '#123456', 20, 0.5)
```
<a name="drawFramesAlongBezierCurveLine
Draws a curved line filled with the given frame
(bezier curve line defined by three points {x, y})
(size, alpha and rotation, change lineraly)
(sizeToFramesRatio indicates how many frame should be contained in a `${size}` amount of pixels)
(if frameSize === 10 and sizeToFramesRatio === 1/2, frame distance will be 5 px"></a>

## drawFramesAlongBezierCurveLine
Draws a curved line filled with the given frame
(bezier curve line defined by three points {x, y})
(size, alpha and rotation, change lineraly)
(sizeToFramesRatio indicates how many frame should be contained in a `${size}` amount of pixels)
(if frameSize === 10 and sizeToFramesRatio === 1/2, frame distance will be 5 px)

(destinationContext, frameFunction, frameColor, initialSize, finalSize, initialAlpha, finalAlpha, initialRotation, finalRotation, minPxDistanceBetweenFrames, sizeToFramesRatio, p1, p2, p3) ⇒ <code>boolean</code> - true if it drew something

| Param | Type |
| --- | --- |
| destinationContext | <code>MyCanvasRenderingContext2D</code> |
| frameFunction | <code>FrameFunction</code> |
| frameColor | <code>string</code> |
| initialSize | <code>number</code> |
| finalSize | <code>number</code> |
| initialAlpha | <code>number</code> |
| finalAlpha | <code>number</code> |
| initialRotation | <code>number</code> |
| finalRotation | <code>number</code> |
| minPxDistanceBetweenFrames | <code>number</code> |
| sizeToFramesRatio | <code>number</code> |
| p1 | <code>PointCoords</code> |
| p2 | <code>PointCoords</code> |
| p3 | <code>PointCoords</code> |

**Example**  
```js
drawFramesAlongBezierCurveLine(myContext, drawCircle, '#123456', 10, 20, 0.5, 0.9, Math.PI, Math.PI/2, 3, 1/10, { x: 10, y: 10 }, { x: 30, y: 50 }, { x: 20, y: 40 })
```
<a name="drawParticlesCircle
Draw a circle made of particles
Takes care of position {x, y}, size, alpha and color."></a>

## drawParticlesCircle
Draw a circle made of particles
Takes care of position {x, y}, size, alpha and color.(destinationContext, x, y, color, size, alpha) ⇒ <code>void</code>

| Param | Type |
| --- | --- |
| destinationContext | <code>MyCanvasRenderingContext2D</code> |
| x | <code>number</code> |
| y | <code>number</code> |
| color | <code>string</code> |
| size | <code>number</code> |
| alpha | <code>number</code> |

**Example**  
```js
drawParticlesCircle(myContext, 100, 100, '#123456', 20, 0.5)
```
<a name="drawParticlesRect
Draw a rect made of particles
Takes care of position {x, y}, size, alpha and color.
TODO take care of rotation"></a>

## drawParticlesRect
Draw a rect made of particles
Takes care of position {x, y}, size, alpha and color.
TODO take care of rotation.

(destinationContext, x, y, color, size, alpha) ⇒ <code>void</code>

| Param | Type |
| --- | --- |
| destinationContext | <code>MyCanvasRenderingContext2D</code> |
| x | <code>number</code> |
| y | <code>number</code> |
| color | <code>string</code> |
| size | <code>number</code> |
| alpha | <code>number</code> |

**Example**  
```js
drawParticlesRect(myContext, 100, 100, '#123456', 20, 0.5)
```
<a name="drawSprayCircle
Draw  a spray circle.
Takes care of position {x, y}, size, alpha and color."></a>

## drawSprayCircle
Draw  a spray circle.
Takes care of position {x, y}, size, alpha and color.

(destinationContext, x, y, color, size, alpha) ⇒ <code>void</code>

| Param | Type |
| --- | --- |
| destinationContext | <code>MyCanvasRenderingContext2D</code> |
| x | <code>number</code> |
| y | <code>number</code> |
| color | <code>string</code> |
| size | <code>number</code> |
| alpha | <code>number</code> |

**Example**  
```js
drawSprayCircle(myContext, 100, 100, '#123456', 20, 0.5)
```
<a name="fillWithBucket
Bucket fill a canvas, at { x, y } coord, with the given color.
This will fill the selected shape inside the canvas, starting from the given coords.
`boundariesWeekMode` defines if or not fill the border px line at the boundaries of the shape.

This is a little tricky. If no fill is required, it returns false synchronously.
Otherwise it returns a promise that fill the canvas asynchronously.
This allow the caller to know immediately if the bucket is working,
and at the same time it can await the fill, or attach something else with .then_new"></a>

## fillWithBucket
Bucket fill a canvas, at { x, y } coord, with the given color.
This will fill the selected shape inside the canvas, starting from the given coords.
`boundariesWeekMode` defines if or not fill the border px line at the boundaries of the shape.

This is a little tricky. If no fill is required, it returns false synchronously.
Otherwise it returns a promise that fill the canvas asynchronously.
This allow the caller to know immediately if the bucket is working,
and at the same time it can await the fill, or attach something else with .then()

(destinationContext, x, y, color) ⇒ <code>false</code> \| <code>Promise.&lt;void&gt;</code>

| Param | Type |
| --- | --- |
| destinationContext | <code>MyCanvasRenderingContext2D</code> |
| x | <code>number</code> |
| y | <code>number</code> |
| color | <code>string</code> |

**Example**  
```js
await fillWithBucket(myContext, 100, 200, '#12345')
```
<a name="fillCanvasWithImage
Fill a canvas with the given image.
It clears the canvas first, and it takes care of x, y, desired width, desired height, and rotation."></a>

## fillCanvasWithImage
Fill a canvas with the given image.
It clears the canvas first, and it takes care of x, y, desired width, desired height, and rotation.

(destinationContext, image, [x], [y], [w], [h], [rotation]) ⇒ <code>void</code>

| Param | Type | Default |
| --- | --- | --- |
| destinationContext | <code>MyCanvasRenderingContext2D</code> |  |
| image | <code>HTMLImageElement</code> |  |
| [x] | <code>number</code> | <code>0</code> |
| [y] | <code>number</code> | <code>0</code> |
| [w] | <code>number</code> | <code>0</code> |
| [h] | <code>number</code> | <code>0</code> |
| [rotation] | <code>number</code> | <code>0</code> |

**Example**  
```js
fillCanvasWithImage(myContext, myImage) // ==> from 0,0, using image width and height
fillCanvasWithImage(myContext, myImage, 100, 100, 350, 200) // ==> from 100,100, width 350 height 200
fillCanvasWithImage(myContext, myImage, 100, 100, 350, 200, Math.PI/2) // ==> image rotated ba 90 degrees
```
<a name="fillCompletely
Fill the whole canvas with the given color"></a>

## fillCompletely
Fill the whole canvas with the given color(destinationContext, color, [alpha]) ⇒ <code>void</code>

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| destinationContext | <code>MyCanvasRenderingContext2D</code> |  |  |
| color | <code>string</code> |  |  |
| [alpha] | <code>number</code> | <code>1</code> | <p>from 0 to 1</p> |

<a name="getCanvasRgbaColorAtPx
Get rgba values at the selected canvas coords"></a>

## getCanvasRgbaColorAtPx
Get rgba values at the selected canvas coords.

(destinationContext, x, y) ⇒ <code>RgbaColorObject</code>

| Param | Type |
| --- | --- |
| destinationContext | <code>MyCanvasRenderingContext2D</code> |
| x | <code>number</code> |
| y | <code>number</code> |

**Example**  
```js
getCanvasRgbaColorAtPx(myContext, 100, 200)
```
