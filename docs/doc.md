## Members

<dl>
<dt><a href="#defaultMaxImageSideSize">defaultMaxImageSideSize</a> : <code>number</code></dt>
<dd><p>Specify here the default max size for image risizing</p></dd>
<dt><a href="#defaultDecimalDigits">defaultDecimalDigits</a> : <code>number</code></dt>
<dd><p>Specify how many decimal digits you want in all results</p></dd>
</dl>

## Constants

<dl>
<dt><a href="#TIME_TO_END_SCROLL_GESTURE">TIME_TO_END_SCROLL_GESTURE</a> : <code>number</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#addInElements
Performs a addIn animation on one or multiple Dom elements at the same time.">addInElements
Performs a addIn animation on one or multiple Dom elements at the same time.(elements, options)</a> ⇒ <code>void</code></dt>
<dd></dd>
<dt><a href="#_addInEl
Local util to perform a addIn animation on an element">_addInEl
Local util to perform a addIn animation on an element(element, duration, maxFadeIn, commitResult)</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd></dd>
<dt><a href="#animateElement
Animates the given element with the given keyframes.
It needs also an animationNane; with this you will be able to check which animation is running,
and stop them one by one.">animateElement
Animates the given element with the given keyframes.
It needs also an animationNane; with this you will be able to check which animation is running,
and stop them one by one.(element, animationName, keyframes, duration, otherNativeOptions, commitResult)</a> ⇒ <code>Promise.&lt;boolean&gt;</code></dt>
<dd></dd>
<dt><a href="#bouncingElements
Performs a bouncing animation on one or multiple Dom elements at the same time.">bouncingElements
Performs a bouncing animation on one or multiple Dom elements at the same time.(elements, options)</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd></dd>
<dt><a href="#_bouncingEl
Local util to perform a addIn animation on an element">_bouncingEl
Local util to perform a addIn animation on an element(element, duration, animationScale, rotationDegrees)</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd></dd>
<dt><a href="#cancelElementAnimationIfExists
Cancel an animation, if its still in progress">cancelElementAnimationIfExists
Cancel an animation, if its still in progress(element, animName)</a> ⇒ <code>void</code></dt>
<dd></dd>
<dt><a href="#elementHasAnimation
Checks if the given Dom element has a certain animation in progress.
This allows to prevent the same animation to be played multiple times at the same time.">elementHasAnimation
Checks if the given Dom element has a certain animation in progress.
This allows to prevent the same animation to be played multiple times at the same time.(element, animName)</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#fadeInElements
Performs a fadeIn animation on one or multiple Dom elements at the same time.">fadeInElements
Performs a fadeIn animation on one or multiple Dom elements at the same time.(elements, options)</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd></dd>
<dt><a href="#_fadeInEl
Local util to perform a fadeId animation on an element">_fadeInEl
Local util to perform a fadeId animation on an element(element, duration, maxFadeIn, commitResult)</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd></dd>
<dt><a href="#fadeOutElements
Performs a fadeOut animation on one or multiple Dom elements at the same time.">fadeOutElements
Performs a fadeOut animation on one or multiple Dom elements at the same time.(elements, options)</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd></dd>
<dt><a href="#_fadeOutEl
Local util to perform a fadeOut animation on an element">_fadeOutEl
Local util to perform a fadeOut animation on an element(element, duration, maxFadeIn, commitResult)</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd></dd>
<dt><a href="#moveToElements
Performs a bouncing animation on one or multiple Dom elements at the same time.">moveToElements
Performs a bouncing animation on one or multiple Dom elements at the same time.(elements, duration, fromX, fromY, toX, toY, [fromScale])</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd></dd>
<dt><a href="#_moveToEl
Local util to perform a addIn animation on an element">_moveToEl
Local util to perform a addIn animation on an element(element, duration, fromX, fromY, toX, toY, fromScale)</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd></dd>
<dt><a href="#removeOutElements
Performs a removeOut animation on one or multiple Dom elements at the same time.">removeOutElements
Performs a removeOut animation on one or multiple Dom elements at the same time.(elements, options)</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd></dd>
<dt><a href="#_removeOutEl
Local util to perform a removeOut animation on an element">_removeOutEl
Local util to perform a removeOut animation on an element(element, duration, maxFadeIn, commitResult)</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd></dd>
<dt><a href="#toggleFadeElements
Performs a toggle-fade animation on one or multiple Dom elements at the same time.">toggleFadeElements
Performs a toggle-fade animation on one or multiple Dom elements at the same time.(elements, options)</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd></dd>
<dt><a href="#_toggleFadeEl
Local util to perform a toggle fade animation on an element">_toggleFadeEl
Local util to perform a toggle fade animation on an element(element, duration, maxFadeIn, commitResult)</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd></dd>
<dt><a href="#canvasIsEvenlyColored
Checks if the whole canvas is filled with the same rgba color
(or if its all transparent)">canvasIsEvenlyColored
Checks if the whole canvas is filled with the same rgba color
(or if its all transparent)(destinationContext)</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#drawCircle
Draw a circle on a canvas context, in a standardized way.
Takes care of position {x, y}, size, alpha, color and blur.">drawCircle
Draw a circle on a canvas context, in a standardized way.
Takes care of position {x, y}, size, alpha, color and blur.(destinationContext, x, y, color, size, alpha, [_], [blur])</a> ⇒ <code>void</code></dt>
<dd></dd>
<dt><a href="#drawFramesAlongBezierCurveLine
Draws a curved line filled with the given frame
(bezier curve line defined by three points {x, y})
(size, alpha and rotation, change lineraly)
(sizeToFramesRatio indicates how many frame should be contained in a `${size}` amount of pixels)
(if frameSize === 10 and sizeToFramesRatio === 1/2, frame distance will be 5 px)">drawFramesAlongBezierCurveLine
Draws a curved line filled with the given frame
(bezier curve line defined by three points {x, y})
(size, alpha and rotation, change lineraly)
(sizeToFramesRatio indicates how many frame should be contained in a `${size}` amount of pixels)
(if frameSize === 10 and sizeToFramesRatio === 1/2, frame distance will be 5 px)(destinationContext, frameFunction, frameColor, initialSize, finalSize, initialAlpha, finalAlpha, initialRotation, finalRotation, minPxDistanceBetweenFrames, sizeToFramesRatio, p1, p2, p3)</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#drawParticlesCircle
Draw a circle made of particles
Takes care of position {x, y}, size, alpha and color.">drawParticlesCircle
Draw a circle made of particles
Takes care of position {x, y}, size, alpha and color.(destinationContext, x, y, color, size, alpha)</a> ⇒ <code>void</code></dt>
<dd></dd>
<dt><a href="#drawParticlesRect
Draw a rect made of particles
Takes care of position {x, y}, size, alpha and color.
TODO take care of rotation">drawParticlesRect
Draw a rect made of particles
Takes care of position {x, y}, size, alpha and color.
TODO take care of rotation(destinationContext, x, y, color, size, alpha)</a> ⇒ <code>void</code></dt>
<dd></dd>
<dt><a href="#drawSprayCircle
Draw  a spray circle.
Takes care of position {x, y}, size, alpha and color.">drawSprayCircle
Draw  a spray circle.
Takes care of position {x, y}, size, alpha and color.(destinationContext, x, y, color, size, alpha)</a> ⇒ <code>void</code></dt>
<dd></dd>
<dt><a href="#_particlesLists
Used to cache numbers and make _initParticlesListFor faster.">_particlesLists
Used to cache numbers and make _initParticlesListFor faster.()</a></dt>
<dd></dd>
<dt><a href="#_initParticlesListFor
Return a ParticlesListItem to generate a homogeneous spray circle">_initParticlesListFor
Return a ParticlesListItem to generate a homogeneous spray circle(size)</a> ⇒ <code>ParticlesListItem</code></dt>
<dd></dd>
<dt><a href="#fillWithBucket
Bucket fill a canvas, at { x, y } coord, with the given color.
This will fill the selected shape inside the canvas, starting from the given coords.
`boundariesWeekMode` defines if or not fill the border px line at the boundaries of the shape.

This is a little tricky. If no fill is required, it returns false synchronously.
Otherwise it returns a promise that fill the canvas asynchronously.
This allow the caller to know immediately if the bucket is working,
and at the same time it can await the fill, or attach something else with .then_new">fillWithBucket
Bucket fill a canvas, at { x, y } coord, with the given color.
This will fill the selected shape inside the canvas, starting from the given coords.
`boundariesWeekMode` defines if or not fill the border px line at the boundaries of the shape.

This is a little tricky. If no fill is required, it returns false synchronously.
Otherwise it returns a promise that fill the canvas asynchronously.
This allow the caller to know immediately if the bucket is working,
and at the same time it can await the fill, or attach something else with .then()(destinationContext, x, y, color)</a> ⇒ <code>false</code> | <code>Promise.&lt;void&gt;</code></dt>
<dd></dd>
<dt><a href="#_bucketHistoryContainsColor
Checks if the current color has been used recently.
This is used to choose between normal and week boundaries mode.">_bucketHistoryContainsColor
Checks if the current color has been used recently.
This is used to choose between normal and week boundaries mode.(color, [tolerance])</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#_getBucketBoundariesWeakMode">_getBucketBoundariesWeakMode(targetColor, fillColor)</a> ⇒ <code>boolean</code></dt>
<dd><p>This choose when to user week boundaries mode, looking at target and fill colors.
Week boundaires mode means than one last px is coloured when the algoritm touches the boundaries
of the clicked zone.</p></dd>
<dt><a href="#fillCanvasWithImage
Fill a canvas with the given image.
It clears the canvas first, and it takes care of x, y, desired width, desired height, and rotation.">fillCanvasWithImage
Fill a canvas with the given image.
It clears the canvas first, and it takes care of x, y, desired width, desired height, and rotation.(destinationContext, image, [x], [y], [w], [h], [rotation])</a> ⇒ <code>void</code></dt>
<dd></dd>
<dt><a href="#fillCompletely
Fill the whole canvas with the given color">fillCompletely
Fill the whole canvas with the given color(destinationContext, color, [alpha])</a> ⇒ <code>void</code></dt>
<dd></dd>
<dt><a href="#getCanvasRgbaColorAtPx
Get rgba values at the selected canvas coords">getCanvasRgbaColorAtPx
Get rgba values at the selected canvas coords(destinationContext, x, y)</a> ⇒ <code>RgbaColorObject</code></dt>
<dd></dd>
<dt><a href="#applyBrightnessToHex
Allows to chenge brightness to an hex rgb color like it was an hsl color.
It returns a new hex rgb string.">applyBrightnessToHex
Allows to chenge brightness to an hex rgb color like it was an hsl color.
It returns a new hex rgb string.(hex, brightness)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#colorStringToRgb
Converts any valid css color string to rgba values">colorStringToRgb
Converts any valid css color string to rgba values(colorString)</a> ⇒ <code>RgbaColorObject</code> | <code>string</code></dt>
<dd></dd>
<dt><a href="#compareRgbColorsWithTolerance
Compares two RgbColorObject.
It needs all three values r g b to be within the tolerance for the two colors to be treated as equal.">compareRgbColorsWithTolerance
Compares two RgbColorObject.
It needs all three values r g b to be within the tolerance for the two colors to be treated as equal.(rgb1, rgb2, [tolerance])</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#getHexBrightness
Allows to read the brightness of an hex rgb string like it was an hsl color.">getHexBrightness
Allows to read the brightness of an hex rgb string like it was an hsl color.(hex)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#getRandomHexColor
Get a random hex css string +123456">getRandomHexColor
Get a random hex css string #123456()</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#getRandomHslaColor
Get a random hsla_new css string">getRandomHslaColor
Get a random hsla() css string([alpha], [defaultSat], [defaultLight])</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#getRandomRgbaColor
Get a random rgba_new css string color.
With a specific alpha, a default alpha, or without alpha.">getRandomRgbaColor
Get a random rgba() css string color.
With a specific alpha, a default alpha, or without alpha.([alpha])</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#hexToRgba
Converts hex string (+aabbcc || +aabbccdd) to rgba object">hexToRgba
Converts hex string (#aabbcc || #aabbccdd) to rgba object(hex)</a> ⇒</dt>
<dd></dd>
<dt><a href="#hslaStringToRgba
Converts hsl css strings to rgba values">hslaStringToRgba
Converts hsl css strings to rgba values(hslaString)</a> ⇒ <code>RgbaColorObject</code></dt>
<dd></dd>
<dt><a href="#hslaToRgba
Converts hue saturation brightness alpha values to  r g b a values">hslaToRgba
Converts hue saturation brightness alpha values to  r g b a values(hue, sat, light, [alpha])</a> ⇒ <code>RgbaColorObject</code></dt>
<dd></dd>
<dt><a href="#rgbToHex
converts r g b values to rgb string +aabbcc">rgbToHex
converts r g b values to rgb string #aabbcc(r, g, b)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#rgbaStringToRgba
Spits a rgba_new or rgb_new css string to its r g b a values">rgbaStringToRgba
Spits a rgba() or rgb() css string to its r g b a values(rgbaString)</a> ⇒</dt>
<dd></dd>
<dt><a href="#rgbaToHex
converts r g b a values to rgb string +aabbccdd">rgbaToHex
converts r g b a values to rgb string #aabbccdd(r, g, b, a)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#rgbaToHsla
Converts r g b a values to h l s a values">rgbaToHsla
Converts r g b a values to h l s a values(r, g, b, [a])</a> ⇒ <code>HslaColorObject</code></dt>
<dd></dd>
<dt><a href="#rgbaToRgbaString
Returns a valid rgba_new css string from the given r g b a values">rgbaToRgbaString
Returns a valid rgba() css string from the given r g b a values(r, g, b, [a])</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#appendChilds
Append multiple childs with one line.">appendChilds
Append multiple childs with one line.(container, childs)</a> ⇒ <code>void</code></dt>
<dd></dd>
<dt><a href="#attachDomEvents
Attaches multiple event handlers to multiple dom elements at the same time.">attachDomEvents
Attaches multiple event handlers to multiple dom elements at the same time.(elements, events)</a> ⇒ <code>void</code></dt>
<dd></dd>
<dt><a href="#createDom
Creates (and return) a dom element, and assigns some class names to it.">createDom
Creates (and return) a dom element, and assigns some class names to it.([tagName], [...classes])</a> ⇒ <code>HTMLElement</code></dt>
<dd></dd>
<dt><a href="#filterTouchesByTargets
Given a TouchEvent, it filters the e.touches that are fired on the given target(s)">filterTouchesByTargets
Given a TouchEvent, it filters the e.touches that are fired on the given target(s)(event, targets)</a> ⇒ <code>Array.&lt;OnePointerEvent&gt;</code></dt>
<dd></dd>
<dt><a href="#getDomRect
Gets a detailed positioning information about the given dom element (in px, rounded a 1 decimal digit)
If you want to get coords related to its container, you can specify containers offsetX and offsetY position.
Otherwise it returns coords relative to the page.">getDomRect
Gets a detailed positioning information about the given dom element (in px, rounded a 1 decimal digit)
If you want to get coords related to its container, you can specify containers offsetX and offsetY position.
Otherwise it returns coords relative to the page.(element, [offsetX], [offsetY])</a> ⇒ <code>DomRect</code></dt>
<dd></dd>
<dt><a href="#getEventCoordX
Gets the coordX of any type of pointer input">getEventCoordX
Gets the coordX of any type of pointer input(event, [offset], [absoluteByPage])</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#getEventCoordY
Gets the coordY of any type of pointer input">getEventCoordY
Gets the coordY of any type of pointer input(event, [offset], [absoluteByPage])</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#nodeIsChildOf
Checks if node is child (at any level) of container">nodeIsChildOf
Checks if node is child (at any level) of container(node, container)</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#preventAllDefault
Prevents and stops propagation for all pointer related events on the given HTMLElement">preventAllDefault
Prevents and stops propagation for all pointer related events on the given HTMLElement(element)</a> ⇒ <code>void</code></dt>
<dd></dd>
<dt><a href="#preventDefault
Prevents default event behavior and stop event propagation">preventDefault
Prevents default event behavior and stop event propagation(e)</a> ⇒ <code>void</code></dt>
<dd></dd>
<dt><a href="#preventDefaultTouchOnEls
Prevents default behavior and stop propagation for all pointer start on multiple elements at the same time.
pointerdown, mousedown, and (if supported) touchstart">preventDefaultTouchOnEls
Prevents default behavior and stop propagation for all pointer start on multiple elements at the same time.
pointerdown, mousedown, and (if supported) touchstart(els)</a> ⇒ <code>void</code></dt>
<dd></dd>
<dt><a href="#preventScrollDefaultIfNeeded
This fixes an annoying iOS15+ behavior on apple devices.
Prevents pull down to refresh if the element you are pulling down has a scroll.
I used a css class scrollable to identify the dom elements who needs to prevent pull to refresh.
You can do it by using getComputedStyle(target).overflow === auto|scroll, but its more demanding in terms of performance.">preventScrollDefaultIfNeeded
This fixes an annoying iOS15+ behavior on apple devices.
Prevents pull down to refresh if the element you are pulling down has a scroll.
I used a css class scrollable to identify the dom elements who needs to prevent pull to refresh.
You can do it by using getComputedStyle(target).overflow === auto|scroll, but its more demanding in terms of performance.(event)</a> ⇒ <code>void</code></dt>
<dd></dd>
<dt><a href="#redrawDomElement
Forces an update for the given element.
Sometime this is useful to force a dom element to take care of a css or scroll change.">redrawDomElement
Forces an update for the given element.
Sometime this is useful to force a dom element to take care of a css or scroll change.(element)</a> ⇒ <code>void</code></dt>
<dd></dd>
<dt><a href="#addImageOutlineAndGetBase64
Adds an outline around the filled part of the image.">addImageOutlineAndGetBase64
Adds an outline around the filled part of the image.(imageDom, outlineColor)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#addImageWhiteBgAndGetBase64
Takes a image (or a canvas), adds a white background, and returns the new base64.">addImageWhiteBgAndGetBase64
Takes a image (or a canvas), adds a white background, and returns the new base64.(imageDom)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#base64ToImageData
Gets the canvas context imageData from a image base64.
if x / y / width / height params are given, it returns only the selected portion of the image.">base64ToImageData
Gets the canvas context imageData from a image base64.
if x / y / width / height params are given, it returns only the selected portion of the image.(base64, [x], [y], [width], [height])</a> ⇒ <code>Promise.&lt;Uint8ClampedArray&gt;</code></dt>
<dd></dd>
<dt><a href="#blobToBase64Async
Async way to extract the base64 string from a image Blob.">blobToBase64Async
Async way to extract the base64 string from a image Blob.(blob)</a> ⇒</dt>
<dd></dd>
<dt><a href="#checkImageUrlValidity
Tries to load an url as an image, and return true / false.
If you are offline ==> returns false">checkImageUrlValidity
Tries to load an url as an image, and return true / false.
If you are offline ==> returns false(url)</a> ⇒ <code>Promise.&lt;boolean&gt;</code></dt>
<dd></dd>
<dt><a href="#convertImgToCanvas
Takes an image, returns an equivalent canvas">convertImgToCanvas
Takes an image, returns an equivalent canvas(img)</a> ⇒ <code>HTMLCanvasElement</code></dt>
<dd></dd>
<dt><a href="#cropImage
Crops an image (or a canvas) and returns a canvas.
Crop starts from { x, y }, and takes width * height pixels.
Final canvas has a width * height size.">cropImage
Crops an image (or a canvas) and returns a canvas.
Crop starts from { x, y }, and takes width * height pixels.
Final canvas has a width * height size.(imageDom, x, y, width, height)</a> ⇒ <code>HTMLCanvasElement</code></dt>
<dd></dd>
<dt><a href="#cropImageWithMargin
Crops an image and return the corrisponding canvas, adding a % empty margin to each side.
margin === 0.1 means 10% of width and 10% of height.">cropImageWithMargin
Crops an image and return the corrisponding canvas, adding a % empty margin to each side.
margin === 0.1 means 10% of width and 10% of height.(imageDom, l, t, r, b, [margin])</a> ⇒ <code>Array.&lt;(HTMLCanvasElement|number)&gt;</code></dt>
<dd></dd>
<dt><a href="#findImageContentCoords
Checks the content of an image (or canvas) and returns coords of the non transparent zone.
Returns { minX, minY, maxX, maxY } of the content.
You can specify a pixel precision and alpha tolerance.">findImageContentCoords
Checks the content of an image (or canvas) and returns coords of the non transparent zone.
Returns { minX, minY, maxX, maxY } of the content.
You can specify a pixel precision and alpha tolerance.(imageDom, [pxPrecision], [alphaTolerance])</a> ⇒ <code><a href="#CanvasCoordsResponse">Promise.&lt;CanvasCoordsResponse&gt;</a></code></dt>
<dd></dd>
<dt><a href="#flipImage
Takes an image (or a canvas) and flip it vertically or horizontally.
Returns a canvas with the same size of the original image.">flipImage
Takes an image (or a canvas) and flip it vertically or horizontally.
Returns a canvas with the same size of the original image.(imageDom, [horizontally])</a> ⇒ <code>HTMLCanvasElement</code></dt>
<dd></dd>
<dt><a href="#getBlobFromBase64
Takes a base64, loads it, and returns an image Blob and a local url pointing it">getBlobFromBase64
Takes a base64, loads it, and returns an image Blob and a local url pointing it(base64)</a> ⇒ <code>Promise.&lt;Array.&lt;(Blob|string)&gt;&gt;</code></dt>
<dd></dd>
<dt><a href="#getCanvasBlobAsync
Small utils to use canvas.toBlob with async/await">getCanvasBlobAsync
Small utils to use canvas.toBlob with async/await(canvas)</a> ⇒ <code>Promise.&lt;Blob&gt;</code></dt>
<dd></dd>
<dt><a href="#getImageBase64Async
Takes an image (or a canvas) and returns its base64, asynchronously">getImageBase64Async
Takes an image (or a canvas) and returns its base64, asynchronously(imageDom)</a> ⇒ <code>Promise.&lt;string&gt;</code></dt>
<dd></dd>
<dt><a href="#getImageDimensions">getImageDimensions(img)</a> ⇒ <code>ImageDimensions</code></dt>
<dd><p>Returns image width, height and ratio.</p></dd>
<dt><a href="#getImageDimensionsFromUrl">getImageDimensionsFromUrl(url)</a> ⇒ <code>Promise.&lt;ImageDimensions&gt;</code></dt>
<dd><p>Get image dimensions (width, height, ratio) from url</p></dd>
<dt><a href="#getImageFromUrlAsync
Loads the given url and return the corrisponding image asynchronously.
if useTempImg === true, use a temp image imageDom (not to be trusted externally).">getImageFromUrlAsync
Loads the given url and return the corrisponding image asynchronously.
if useTempImg === true, use a temp image imageDom (not to be trusted externally).(url, [useTempImg])</a> ⇒ <code>Promise.&lt;HTMLImageElement&gt;</code></dt>
<dd></dd>
<dt><a href="#imageHasTransparentBackground
Checks if the given image has a transparent background">imageHasTransparentBackground
Checks if the given image has a transparent background(imageDom)</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#imageHasUniformBackground
Checks if the given image (or canvas) has a uniform background.
It compares the 4 coorners, and you can specify the tolerance level [0...255]">imageHasUniformBackground
Checks if the given image (or canvas) has a uniform background.
It compares the 4 coorners, and you can specify the tolerance level [0...255](imageDom, [tolerance])</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#loadImageOffThread
Takes an image and the new url to load inside it, and does it asynchronously.
Returns true / false to reflect the loading result.">loadImageOffThread
Takes an image and the new url to load inside it, and does it asynchronously.
Returns true / false to reflect the loading result.(img, url)</a> ⇒ <code>Promise.&lt;boolean&gt;</code></dt>
<dd></dd>
<dt><a href="#mergeBase64Images
Merges multiple base64 image strings into one base64,
merging all the conrrisponding images with transparency.">mergeBase64Images
Merges multiple base64 image strings into one base64,
merging all the conrrisponding images with transparency.(bases64)</a> ⇒ <code>Promise.&lt;string&gt;</code></dt>
<dd></dd>
<dt><a href="#resizeBase64AndGetBase64
Takes a base64 string, resize the corrisponding image, and returns a new base64">resizeBase64AndGetBase64
Takes a base64 string, resize the corrisponding image, and returns a new base64(base64, [maxSize])</a> ⇒ <code>Promise.&lt;string&gt;</code></dt>
<dd></dd>
<dt><a href="#resizeImageAndGetBase64
Resize an image and returns the corrisponding base64">resizeImageAndGetBase64
Resize an image and returns the corrisponding base64(imageDom, [maxSize])</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#resizeImageAndGetLocalUrl
Resize an image, get a Blob, and returns a localURL to load the new resized image">resizeImageAndGetLocalUrl
Resize an image, get a Blob, and returns a localURL to load the new resized image(image, [maxSize])</a> ⇒ <code>Promise.&lt;string&gt;</code></dt>
<dd></dd>
<dt><a href="#setDefaultMaxImageSideSize
Set a different default max image side size">setDefaultMaxImageSideSize
Set a different default max image side size(maxSide)</a> ⇒ <code>void</code></dt>
<dd></dd>
<dt><a href="#setImageSrcAsync
Small utils to use img.onload with async/await">setImageSrcAsync
Small utils to use img.onload with async/await(img, url)</a> ⇒ <code>Promise.&lt;boolean&gt;</code></dt>
<dd></dd>
<dt><a href="#arrayOrderNumberDecreasing
Utils to sort an array of number decreasing">arrayOrderNumberDecreasing
Utils to sort an array of number decreasing(a, b)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#arrayOrderNumberIncreasing
Utils to sort an array of number increasing">arrayOrderNumberIncreasing
Utils to sort an array of number increasing(a, b)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#arrayOrderStringAlphabetically
Utils to sort an array of string alphabetically">arrayOrderStringAlphabetically
Utils to sort an array of string alphabetically(a, b)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#arrayOrderStringDown
Utils to sort an array of string counter alphabetically">arrayOrderStringDown
Utils to sort an array of string counter alphabetically(a, b)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#callCallbackIfDataChanged
Calls the callback everytime its arguments change">callCallbackIfDataChanged
Calls the callback everytime its arguments change(callback)</a> ⇒ <code>function</code></dt>
<dd></dd>
<dt><a href="#copyTextToClipboard
Copy a string to device clipboard">copyTextToClipboard
Copy a string to device clipboard(str)</a> ⇒ <code>void</code></dt>
<dd></dd>
<dt><a href="#debounceThrottle
Trottle a function but at the end it executes the last callback call arrived during the waiting time too">debounceThrottle
Trottle a function but at the end it executes the last callback call arrived during the waiting time too(callback, limit)</a> ⇒ <code>function</code></dt>
<dd></dd>
<dt><a href="#deepCopy
Utils to make a deep copy of a variable
Json alternative to structuredClone_new">deepCopy
Utils to make a deep copy of a variable
Json alternative to structuredClone()(value)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#delay
Utils to stop js execution inline with async/await syntax">delay
Utils to stop js execution inline with async/await syntax(milliseconds)</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd></dd>
<dt><a href="#delayFn
Utils to delay as little as possible a function call">delayFn
Utils to delay as little as possible a function call(fn)</a> ⇒ <code>function</code></dt>
<dd></dd>
<dt><a href="#exponentialTimeout">exponentialTimeout(callback)</a></dt>
<dd><p>A function that will call a callback function with an exponential timeout.
The callback should return a boolean, if it returns true, the function will be called again.
The timeout is based on the fibonacci sequence.</p></dd>
<dt><a href="#fetchUrlFileOffThread
Retreives a blob from the given url asynchronously in a separate thread, and returns a local ObjectURl pointing to it">fetchUrlFileOffThread
Retreives a blob from the given url asynchronously in a separate thread, and returns a local ObjectURl pointing to it(url)</a> ⇒ <code>Promise.&lt;string&gt;</code></dt>
<dd></dd>
<dt><a href="#iterateFn
Utils to iterate one function over multiple elements in parallel">iterateFn
Utils to iterate one function over multiple elements in parallel(els, fn)</a> ⇒ <code>function</code></dt>
<dd></dd>
<dt><a href="#throttle
Trottle a function">throttle
Trottle a function(callback, delay)</a> ⇒ <code>function</code></dt>
<dd></dd>
<dt><a href="#waitWorkerMessage
A standardized way to wait for a worker response.
By passing an additional string id to each command, you can await for one specific response.
Workers must take in input id from each message, and give it back whitin each response.">waitWorkerMessage
A standardized way to wait for a worker response.
By passing an additional string id to each command, you can await for one specific response.
Workers must take in input id from each message, and give it back whitin each response.()</a></dt>
<dd></dd>
<dt><a href="#clamp">clamp(value, min, max, [decimals])</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#convertAngleDegreesToRadians
Converts degrees to radians">convertAngleDegreesToRadians
Converts degrees to radians(degrees)</a></dt>
<dd></dd>
<dt><a href="#convertAngleRadiansToDegrees
Converts radians to degrees">convertAngleRadiansToDegrees
Converts radians to degrees(radians)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#degrees">degrees(radians)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#distanceBetweenTwoPointsGreaterThan
Tells if the distance between two points is greater than a certain amount (on a Cartesian plane px system)">distanceBetweenTwoPointsGreaterThan
Tells if the distance between two points is greater than a certain amount (on a Cartesian plane px system)(x1, y1, x2, y2, distance)</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#factorial
Get the factorial of the given number
(Recursive function)">factorial
Get the factorial of the given number
(Recursive function)(n)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#getAngleDegreesBetweenTwoPoints
Get the angle (in degree) of the line passing through two points (on a Cartesian plane px system)">getAngleDegreesBetweenTwoPoints
Get the angle (in degree) of the line passing through two points (on a Cartesian plane px system)(x1, y1, x2, y2)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#getAngleRadiansBetweenTwoPoints
Get the angle (in radians) of the line passing through two points (on a Cartesian plane px system)">getAngleRadiansBetweenTwoPoints
Get the angle (in radians) of the line passing through two points (on a Cartesian plane px system)(x1, y1, x2, y2)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#getAverage
Get the average of all given numbers">getAverage
Get the average of all given numbers(values, [decimals])</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#getDistanceBetweenThreePoints
Get the distance between three points coords (on a Cartesian plane px system), and then rounds it">getDistanceBetweenThreePoints
Get the distance between three points coords (on a Cartesian plane px system), and then rounds it(x1, y1, x2, y2, x3, y3, [decimals])</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#getDistanceBetweenTwoPoints
Get the distance between two points coords (on a Cartesian plane px system), and then rounds it">getDistanceBetweenTwoPoints
Get the distance between two points coords (on a Cartesian plane px system), and then rounds it(x1, y1, x2, y2, [decimals])</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#getGreatCommonDivisor
Get the great common divisor between all given numbers">getGreatCommonDivisor
Get the great common divisor between all given numbers(numbers)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#getIntersectionBetween4Points
Get the coords of the intersection point between two lines (on a Cartesian plane px system)">getIntersectionBetween4Points
Get the coords of the intersection point between two lines (on a Cartesian plane px system)(x1, y1, x2, y2, x3, y3, x4, y4, [decimals])</a> ⇒ <code>Array.&lt;number&gt;</code></dt>
<dd></dd>
<dt><a href="#getLineFunctionBetweenTwoPoints
Get the cartesian function of the line passing through two given points (on a Cartesian plane px system)">getLineFunctionBetweenTwoPoints
Get the cartesian function of the line passing through two given points (on a Cartesian plane px system)(x1, y1, x2, y2)</a> ⇒ <code>function</code></dt>
<dd></dd>
<dt><a href="#getLinerarInterpolation
Returns linear interpolation between two numbers.">getLinerarInterpolation
Returns linear interpolation between two numbers.(min, max, t, [decimals])</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#getLogarithmicPercentageOfValue
Get the value of a percentage out of the total using a logarithmic scale, and then rounds it">getLogarithmicPercentageOfValue
Get the value of a percentage out of the total using a logarithmic scale, and then rounds it(value, minValue, maxValue, [decimals])</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#getLogarithmicValueOfPercentage
Get the value of a percentage out of the total using a logarithmic scale, and then rounds it">getLogarithmicValueOfPercentage
Get the value of a percentage out of the total using a logarithmic scale, and then rounds it(percentage, minValue, maxValue, [decimals])</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#getMiddlePointCoords
Get the middle points coords between the two given points (on a Cartesian plane px system)">getMiddlePointCoords
Get the middle points coords between the two given points (on a Cartesian plane px system)(x1, y1, x2, y2, [decimals])</a> ⇒ <code>Array.&lt;number&gt;</code></dt>
<dd></dd>
<dt><a href="#getNumberInBetween
Force a number to be between a min and a max value, and then rounds it.
Its like clamp, but the params order here doesnt matter.">getNumberInBetween
Force a number to be between a min and a max value, and then rounds it.
Its like clamp, but the params order here doesnt matter.(a, b, c, [decimals])</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#getPercentageOfValue
Get the percentage of a value out of the total, and then rounds it">getPercentageOfValue
Get the percentage of a value out of the total, and then rounds it(value, total, [decimals])</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#getPerpendicularLineFunctionPassingByPoint
Get the cartesian function of the perpendicular line passing through one given point (on a Cartesian plane px system)">getPerpendicularLineFunctionPassingByPoint
Get the cartesian function of the perpendicular line passing through one given point (on a Cartesian plane px system)(slope, x1, y1)</a> ⇒ <code>function</code></dt>
<dd></dd>
<dt><a href="#getPointProjectionOnLine
Get the coords of the perpendicular projection of the given point on the given live (on a Cartesian plane px system)">getPointProjectionOnLine
Get the coords of the perpendicular projection of the given point on the given live (on a Cartesian plane px system)(x1, y1, x2, y2, x3, y3)</a> ⇒ <code>Array.&lt;number&gt;</code></dt>
<dd></dd>
<dt><a href="#getQuadraticBezierCurveLength
Get the length of a quadratic bezier curve passing through 3 points, and then rounds it">getQuadraticBezierCurveLength
Get the length of a quadratic bezier curve passing through 3 points, and then rounds it(x1, y1, x2, y2, x3, y3, [decimals])</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#getQuadraticBezierCurvePointAtTime
Get the length of a quadratic bezier curve passing through 3 points, and then rounds it">getQuadraticBezierCurvePointAtTime
Get the length of a quadratic bezier curve passing through 3 points, and then rounds it(t, x1, y1, x2, y2, x3, y3, [decimals])</a> ⇒ <code>Array.&lt;number&gt;</code></dt>
<dd></dd>
<dt><a href="#getQuadraticBezierValueAtTime
Get the quadratic bezier curve (passing through 3 points) value at the given time t">getQuadraticBezierValueAtTime
Get the quadratic bezier curve (passing through 3 points) value at the given time t(t, p1, p2, p3, [decimals])</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#getRandomNumber
Get a random number, between min and max included, and then rounds it">getRandomNumber
Get a random number, between min and max included, and then rounds it(n1, [n2], [decimals])</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#getSlopeCoefficientBetweenTwoPoints
Get the slope coefficient of the line passing through two given points (on a Cartesian plane px system)">getSlopeCoefficientBetweenTwoPoints
Get the slope coefficient of the line passing through two given points (on a Cartesian plane px system)(x1, y1, x2, y2)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#getValueOfPercentage
Get the value of a percentage out of the total, and then rounds it">getValueOfPercentage
Get the value of a percentage out of the total, and then rounds it(percentage, total, [decimals])</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#lerp">lerp(min, max, t, [decimals])</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#naturalNumbersSummation
Get the summation of the first N natural numbers
Thanks to Carl Friedrich Gauss we dont need to use a recursive function">naturalNumbersSummation
Get the summation of the first N natural numbers
Thanks to Carl Friedrich Gauss we dont need to use a recursive function(n)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#radians">radians(degrees)</a></dt>
<dd></dd>
<dt><a href="#rotateCoords
Rotate a points coords by a specific radians angle (on a Cartesian plane px system)">rotateCoords
Rotate a points coords by a specific radians angle (on a Cartesian plane px system)(x, y, angleRadians, [decimals])</a> ⇒ <code>Array.&lt;number&gt;</code></dt>
<dd></dd>
<dt><a href="#roundNumber
Round a number how much you want">roundNumber
Round a number how much you want(number, [decimals])</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#setDefaultDecimalDigits
Set a different default decimal digit amount">setDefaultDecimalDigits
Set a different default decimal digit amount(digits)</a> ⇒ <code>void</code></dt>
<dd></dd>
<dt><a href="#translateCoords
Translate a points coords by a specific amount (on a Cartesian plane px system)">translateCoords
Translate a points coords by a specific amount (on a Cartesian plane px system)(x, y, dx, dy)</a> ⇒ <code>Array.&lt;number&gt;</code></dt>
<dd></dd>
<dt><a href="#valuesAreSimilar
Checks if all elements in the array differ from each other by less than the given tolerance">valuesAreSimilar
Checks if all elements in the array differ from each other by less than the given tolerance(values, [tolerance])</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#addHorizontalSliderDrag
Attach a drag handler to any type of horizontal slider input.
if returnRelativeDiff === true_ it returns the difference between every mouseMove and the original mouseDown.
      So it goes negative if you drag to the left, and positive to the right.
  if returnRelativeDiff === false_ it return the value corresponding at che current mouse event coordinates.
      So its always a number between 0 and valueMax.">addHorizontalSliderDrag
Attach a drag handler to any type of horizontal slider input.
if returnRelativeDiff === true: it returns the difference between every mouseMove and the original mouseDown.
      So it goes negative if you drag to the left, and positive to the right.
  if returnRelativeDiff === false: it return the value corresponding at che current mouse event coordinates.
      So its always a number between 0 and valueMax.(draggableDom, sliderDom, onDrag, valueMax, valueMin, [returnRelativeDiff], [decimals], [waitingTime])</a> ⇒ <code>void</code></dt>
<dd></dd>
<dt><a href="#addListDragAndDrop
Handles list elements drag and drop (using shaow dom and animations).
Works better if the whole list is visible on the screen.
On mobile it works better if used with addTapAndLongPress inside a LongPress handler.
It needs a css class displayNone ==> display_ none;">addListDragAndDrop
Handles list elements drag and drop (using shaow dom and animations).
Works better if the whole list is visible on the screen.
On mobile it works better if used with addTapAndLongPress inside a LongPress handler.
It needs a css class displayNone ==> display: none;(event, list, element, callback, [verticalScroll])</a> ⇒ <code>void</code></dt>
<dd></dd>
<dt><a href="#addTapAndLongPress
Given a element, it handles (and distinguishes) Tap and LongPress event.
Its optimised for lists, and fixes an annoying ios bug about scrolling a list of elements;
but it can be used on any type of html element.
Callbacks are called with the native pointer event as the only param.
You can specify how many px are needed to handle the scroll event, and how many ms should pass to call the LongPress handler.">addTapAndLongPress
Given a element, it handles (and distinguishes) Tap and LongPress event.
Its optimised for lists, and fixes an annoying ios bug about scrolling a list of elements;
but it can be used on any type of html element.
Callbacks are called with the native pointer event as the only param.
You can specify how many px are needed to handle the scroll event, and how many ms should pass to call the LongPress handler.(listElement, onTap, onLongPress, [maxPxToMove], [minMsToLongPress])</a> ⇒ <code>void</code></dt>
<dd></dd>
<dt><a href="#addVerticalSliderDrag
Attach a drag handler to any type of vertical slider input.
if returnRelativeDiff === true_ it returns the difference between every mouseMove and the original mouseDown.
      So it goes negative if you drag to the left, and positive to the right.
  if returnRelativeDiff === false_ it return the value corresponding at che current mouse event coordinates.
      So its always a number between 0 and valueMax.">addVerticalSliderDrag
Attach a drag handler to any type of vertical slider input.
if returnRelativeDiff === true: it returns the difference between every mouseMove and the original mouseDown.
      So it goes negative if you drag to the left, and positive to the right.
  if returnRelativeDiff === false: it return the value corresponding at che current mouse event coordinates.
      So its always a number between 0 and valueMax.(draggableDom, sliderDom, onDrag, valueMax, valueMin, [returnRelativeDiff], [decimals], [waitingTime])</a> ⇒ <code>void</code></dt>
<dd></dd>
<dt><a href="#multiTouchEventsHandlers
Takes care of all the annoying and strage behaviors related to touch events,
and allows you to simply attach one or more handlers ignoring how it works.
For example when you tap something you may accidentally fire some touchmove events who can break you external behavior.
NB. This is useful only if you need multiple handlers on the same element, and you dont want to confuse one event for another.
If you only need touchstart / touchmove / touchend handlers, I suggest to simply listen these 3 native events.">multiTouchEventsHandlers
Takes care of all the annoying and strage behaviors related to touch events,
and allows you to simply attach one or more handlers ignoring how it works.
For example when you tap something you may accidentally fire some touchmove events who can break you external behavior.
NB. This is useful only if you need multiple handlers on the same element, and you dont want to confuse one event for another.
If you only need touchstart / touchmove / touchend handlers, I suggest to simply listen these 3 native events.(target, handlers)</a> ⇒ <code>void</code></dt>
<dd></dd>
<dt><a href="#multiTouchMultiDeviceEventsHandlers
Allows to attach multiple multitouch handlers to multiple targets, on multiple kinds of devices, at the same time.
If you pass gestures handlers, they will be treated as needed for both touch devices and desktop (with trackpads).
NB. Mobile first_ handlers are named like onSingleTouchStart, onSingleTouchMove and onSingleTouchEnd,
but they work on desktop too, mapping mousedown mousevove and mouseup events.">multiTouchMultiDeviceEventsHandlers
Allows to attach multiple multitouch handlers to multiple targets, on multiple kinds of devices, at the same time.
If you pass gestures handlers, they will be treated as needed for both touch devices and desktop (with trackpads).
NB. Mobile first: handlers are named like onSingleTouchStart, onSingleTouchMove and onSingleTouchEnd,
but they work on desktop too, mapping mousedown mousevove and mouseup events.(targets, handlers)</a> ⇒ <code>void</code></dt>
<dd></dd>
<dt><a href="#trackpadGestureHandlers
Handles pinch-to-zoom gesture on laptop trackpad.
It can handle onGestureStart onGestureChange onGestureEnd with three params_ (x, y, scale)">trackpadGestureHandlers
Handles pinch-to-zoom gesture on laptop trackpad.
It can handle onGestureStart onGestureChange onGestureEnd with three params: (x, y, scale)(target, handlers)</a> ⇒ <code>void</code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#CanvasCoordsResponse">CanvasCoordsResponse</a></dt>
<dd></dd>
</dl>

<a name="defaultMaxImageSideSize"></a>

## defaultMaxImageSideSize : <code>number</code>
<p>Specify here the default max size for image risizing</p>

**Kind**: global variable  
<a name="defaultDecimalDigits"></a>

## defaultDecimalDigits : <code>number</code>
<p>Specify how many decimal digits you want in all results</p>

**Kind**: global variable  
<a name="TIME_TO_END_SCROLL_GESTURE"></a>

## TIME\_TO\_END\_SCROLL\_GESTURE : <code>number</code>
**Kind**: global constant  
<a name="addInElements
Performs a addIn animation on one or multiple Dom elements at the same time."></a>

## addInElements
Performs a addIn animation on one or multiple Dom elements at the same time.(elements, options) ⇒ <code>void</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| elements | <code>HTMLElementWithAnimations</code> \| <code>Array.&lt;HTMLElementWithAnimations&gt;</code> | 
| options | <code>AddInOptions</code> | 

**Example**  
```js
addInElements(myDom, { duration: 400 })
await addInElements([myDom1, myDom2])
await addInElements([myDom1, myDom2], { maxFadeIn: 0.75 })
addInElements(myDom, { duration: 400, commitResult: false })
```
<a name="_addInEl
Local util to perform a addIn animation on an element"></a>

## \_addInEl
Local util to perform a addIn animation on an element(element, duration, maxFadeIn, commitResult) ⇒ <code>Promise.&lt;void&gt;</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| element | <code>HTMLElementWithAnimations</code> | 
| duration | <code>number</code> | 
| maxFadeIn | <code>number</code> | 
| commitResult | <code>boolean</code> | 

<a name="animateElement
Animates the given element with the given keyframes.
It needs also an animationNane; with this you will be able to check which animation is running,
and stop them one by one."></a>

## animateElement
Animates the given element with the given keyframes.
It needs also an animationNane; with this you will be able to check which animation is running,
and stop them one by one.(element, animationName, keyframes, duration, otherNativeOptions, commitResult) ⇒ <code>Promise.&lt;boolean&gt;</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElementWithAnimations</code> |  |
| animationName | <code>string</code> |  |
| keyframes | <code>Keyframes</code> |  |
| duration | <code>number</code> | <p>Default = 200 ms</p> |
| otherNativeOptions | <code>Record.&lt;string, any&gt;</code> |  |
| commitResult | <code>boolean</code> | <p>Default = true</p> |

<a name="bouncingElements
Performs a bouncing animation on one or multiple Dom elements at the same time."></a>

## bouncingElements
Performs a bouncing animation on one or multiple Dom elements at the same time.(elements, options) ⇒ <code>Promise.&lt;void&gt;</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| elements | <code>HTMLElementWithAnimations</code> \| <code>Array.&lt;HTMLElementWithAnimations&gt;</code> | 
| options | <code>BouncingOptions</code> | 

**Example**  
```js
bouncingElements(myDom, { duration: 400 })
await bouncingElements([myDom1, myDom2])
await bouncingElements([myDom1, myDom2], { animationScale: 1.5 })
bouncingElements(myDom, { duration: 400, rotationDegrees: 10 })
```
<a name="_bouncingEl
Local util to perform a addIn animation on an element"></a>

## \_bouncingEl
Local util to perform a addIn animation on an element(element, duration, animationScale, rotationDegrees) ⇒ <code>Promise.&lt;void&gt;</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| element | <code>HTMLElementWithAnimations</code> | 
| duration | <code>number</code> | 
| animationScale | <code>number</code> | 
| rotationDegrees | <code>number</code> | 

<a name="cancelElementAnimationIfExists
Cancel an animation, if its still in progress"></a>

## cancelElementAnimationIfExists
Cancel an animation, if its still in progress(element, animName) ⇒ <code>void</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| element | <code>HTMLElementWithAnimations</code> | 
| animName | <code>string</code> | 

**Example**  
```js
cancelElementAnimationIfExists(myDom, 'fadeIn')
```
<a name="elementHasAnimation
Checks if the given Dom element has a certain animation in progress.
This allows to prevent the same animation to be played multiple times at the same time."></a>

## elementHasAnimation
Checks if the given Dom element has a certain animation in progress.
This allows to prevent the same animation to be played multiple times at the same time.(element, animName) ⇒ <code>boolean</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| element | <code>HTMLElementWithAnimations</code> | 
| animName | <code>string</code> | 

**Example**  
```js
elementHasAnimation(myDom, 'fadeIn') // ==> true | false
```
<a name="fadeInElements
Performs a fadeIn animation on one or multiple Dom elements at the same time."></a>

## fadeInElements
Performs a fadeIn animation on one or multiple Dom elements at the same time.(elements, options) ⇒ <code>Promise.&lt;void&gt;</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| elements | <code>HTMLElementWithAnimations</code> \| <code>Array.&lt;HTMLElementWithAnimations&gt;</code> | 
| options | <code>FadeInOptions</code> | 

**Example**  
```js
fadeInElements(myDom, { duration: 400 })
await fadeInElements([myDom1, myDom2])
await fadeInElements([myDom1, myDom2], { maxFadeIn: 0.75 })
fadeInElements(myDom, { duration: 400, commitResult: false })
```
<a name="_fadeInEl
Local util to perform a fadeId animation on an element"></a>

## \_fadeInEl
Local util to perform a fadeId animation on an element(element, duration, maxFadeIn, commitResult) ⇒ <code>Promise.&lt;void&gt;</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| element | <code>HTMLElementWithAnimations</code> | 
| duration | <code>number</code> | 
| maxFadeIn | <code>number</code> | 
| commitResult | <code>boolean</code> | 

<a name="fadeOutElements
Performs a fadeOut animation on one or multiple Dom elements at the same time."></a>

## fadeOutElements
Performs a fadeOut animation on one or multiple Dom elements at the same time.(elements, options) ⇒ <code>Promise.&lt;void&gt;</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| elements | <code>HTMLElementWithAnimations</code> \| <code>Array.&lt;HTMLElementWithAnimations&gt;</code> | 
| options | <code>FadeOutOptions</code> | 

**Example**  
```js
fadeOutElements(myDom, { duration: 400 })
await fadeOutElements([myDom1, myDom2])
await fadeOutElements([myDom1, myDom2], { maxFadeIn: 0.75 })
fadeOutElements(myDom, { duration: 400, commitResult: false })
```
<a name="_fadeOutEl
Local util to perform a fadeOut animation on an element"></a>

## \_fadeOutEl
Local util to perform a fadeOut animation on an element(element, duration, maxFadeIn, commitResult) ⇒ <code>Promise.&lt;void&gt;</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| element | <code>HTMLElementWithAnimations</code> | 
| duration | <code>number</code> | 
| maxFadeIn | <code>number</code> | 
| commitResult | <code>boolean</code> | 

<a name="moveToElements
Performs a bouncing animation on one or multiple Dom elements at the same time."></a>

## moveToElements
Performs a bouncing animation on one or multiple Dom elements at the same time.(elements, duration, fromX, fromY, toX, toY, [fromScale]) ⇒ <code>Promise.&lt;void&gt;</code>
**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| elements | <code>HTMLElementWithAnimations</code> \| <code>Array.&lt;HTMLElementWithAnimations&gt;</code> |  | 
| duration | <code>number</code> |  | 
| fromX | <code>number</code> |  | 
| fromY | <code>number</code> |  | 
| toX | <code>number</code> |  | 
| toY | <code>number</code> |  | 
| [fromScale] | <code>number</code> | <code>1</code> | 

**Example**  
```js
moveToElements(myDom, 500, 800, 800, 400, 400, 1.5)
```
<a name="_moveToEl
Local util to perform a addIn animation on an element"></a>

## \_moveToEl
Local util to perform a addIn animation on an element(element, duration, fromX, fromY, toX, toY, fromScale) ⇒ <code>Promise.&lt;void&gt;</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| element | <code>HTMLElementWithAnimations</code> | 
| duration | <code>number</code> | 
| fromX | <code>number</code> | 
| fromY | <code>number</code> | 
| toX | <code>number</code> | 
| toY | <code>number</code> | 
| fromScale | <code>number</code> | 

<a name="removeOutElements
Performs a removeOut animation on one or multiple Dom elements at the same time."></a>

## removeOutElements
Performs a removeOut animation on one or multiple Dom elements at the same time.(elements, options) ⇒ <code>Promise.&lt;void&gt;</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| elements | <code>HTMLElementWithAnimations</code> \| <code>Array.&lt;HTMLElementWithAnimations&gt;</code> | 
| options | <code>RemoveOutOptions</code> | 

**Example**  
```js
removeOutElements(myDom, { duration: 400 })
await removeOutElements([myDom1, myDom2])
await removeOutElements([myDom1, myDom2], { maxFadeIn: 0.75 })
removeOutElements(myDom, { duration: 400, commitResult: false })
```
<a name="_removeOutEl
Local util to perform a removeOut animation on an element"></a>

## \_removeOutEl
Local util to perform a removeOut animation on an element(element, duration, maxFadeIn, commitResult) ⇒ <code>Promise.&lt;void&gt;</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| element | <code>HTMLElementWithAnimations</code> | 
| duration | <code>number</code> | 
| maxFadeIn | <code>number</code> | 
| commitResult | <code>boolean</code> | 

<a name="toggleFadeElements
Performs a toggle-fade animation on one or multiple Dom elements at the same time."></a>

## toggleFadeElements
Performs a toggle-fade animation on one or multiple Dom elements at the same time.(elements, options) ⇒ <code>Promise.&lt;void&gt;</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| elements | <code>HTMLElementWithAnimations</code> \| <code>Array.&lt;HTMLElementWithAnimations&gt;</code> | 
| options | <code>ToggleFadeOptions</code> | 

**Example**  
```js
toggleFadeElements(myDom, { duration: 400 })
await toggleFadeElements([myDom1, myDom2])
await toggleFadeElements([myDom1, myDom2], { maxFadeIn: 0.75 })
toggleFadeElements(myDom, { duration: 400, commitResult: false })
```
<a name="_toggleFadeEl
Local util to perform a toggle fade animation on an element"></a>

## \_toggleFadeEl
Local util to perform a toggle fade animation on an element(element, duration, maxFadeIn, commitResult) ⇒ <code>Promise.&lt;void&gt;</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| element | <code>HTMLElementWithAnimations</code> | 
| duration | <code>number</code> | 
| maxFadeIn | <code>number</code> | 
| commitResult | <code>boolean</code> | 

<a name="canvasIsEvenlyColored
Checks if the whole canvas is filled with the same rgba color
(or if its all transparent)"></a>

## canvasIsEvenlyColored
Checks if the whole canvas is filled with the same rgba color
(or if its all transparent)(destinationContext) ⇒ <code>boolean</code>
**Kind**: global function  

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
Takes care of position {x, y}, size, alpha, color and blur.(destinationContext, x, y, color, size, alpha, [_], [blur]) ⇒ <code>void</code>
**Kind**: global function  

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
(if frameSize === 10 and sizeToFramesRatio === 1/2, frame distance will be 5 px)"></a>

## drawFramesAlongBezierCurveLine
Draws a curved line filled with the given frame
(bezier curve line defined by three points {x, y})
(size, alpha and rotation, change lineraly)
(sizeToFramesRatio indicates how many frame should be contained in a `${size}` amount of pixels)
(if frameSize === 10 and sizeToFramesRatio === 1/2, frame distance will be 5 px)(destinationContext, frameFunction, frameColor, initialSize, finalSize, initialAlpha, finalAlpha, initialRotation, finalRotation, minPxDistanceBetweenFrames, sizeToFramesRatio, p1, p2, p3) ⇒ <code>boolean</code>
**Kind**: global function  
**Returns**: <code>boolean</code> - <p>if it drew something</p>  

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
**Kind**: global function  

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
TODO take care of rotation(destinationContext, x, y, color, size, alpha) ⇒ <code>void</code>
**Kind**: global function  

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
Takes care of position {x, y}, size, alpha and color.(destinationContext, x, y, color, size, alpha) ⇒ <code>void</code>
**Kind**: global function  

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
<a name="_particlesLists
Used to cache numbers and make _initParticlesListFor faster."></a>

## \_particlesLists
Used to cache numbers and make \_initParticlesListFor faster.()
**Kind**: global function  
<a name="_initParticlesListFor
Return a ParticlesListItem to generate a homogeneous spray circle"></a>

## \_initParticlesListFor
Return a ParticlesListItem to generate a homogeneous spray circle(size) ⇒ <code>ParticlesListItem</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| size | <code>numner</code> | 

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
and at the same time it can await the fill, or attach something else with .then()(destinationContext, x, y, color) ⇒ <code>false</code> \| <code>Promise.&lt;void&gt;</code>
**Kind**: global function  

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
<a name="_bucketHistoryContainsColor
Checks if the current color has been used recently.
This is used to choose between normal and week boundaries mode."></a>

## \_bucketHistoryContainsColor
Checks if the current color has been used recently.
This is used to choose between normal and week boundaries mode.(color, [tolerance]) ⇒ <code>boolean</code>
**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| color | <code>RgbaColorObject</code> |  | 
| [tolerance] | <code>number</code> | <code>1</code> | 

<a name="_getBucketBoundariesWeakMode"></a>

## \_getBucketBoundariesWeakMode(targetColor, fillColor) ⇒ <code>boolean</code>
<p>This choose when to user week boundaries mode, looking at target and fill colors.
Week boundaires mode means than one last px is coloured when the algoritm touches the boundaries
of the clicked zone.</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| targetColor | <code>RgbaColorObject</code> | <p>The clicled color</p> |
| fillColor | <code>RgbaColorObject</code> | <p>The desider color</p> |

<a name="fillCanvasWithImage
Fill a canvas with the given image.
It clears the canvas first, and it takes care of x, y, desired width, desired height, and rotation."></a>

## fillCanvasWithImage
Fill a canvas with the given image.
It clears the canvas first, and it takes care of x, y, desired width, desired height, and rotation.(destinationContext, image, [x], [y], [w], [h], [rotation]) ⇒ <code>void</code>
**Kind**: global function  

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
**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| destinationContext | <code>MyCanvasRenderingContext2D</code> |  |  |
| color | <code>string</code> |  |  |
| [alpha] | <code>number</code> | <code>1</code> | <p>from 0 to 1</p> |

<a name="getCanvasRgbaColorAtPx
Get rgba values at the selected canvas coords"></a>

## getCanvasRgbaColorAtPx
Get rgba values at the selected canvas coords(destinationContext, x, y) ⇒ <code>RgbaColorObject</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| destinationContext | <code>MyCanvasRenderingContext2D</code> | 
| x | <code>number</code> | 
| y | <code>number</code> | 

**Example**  
```js
getCanvasRgbaColorAtPx(myContext, 100, 200)
```
<a name="applyBrightnessToHex
Allows to chenge brightness to an hex rgb color like it was an hsl color.
It returns a new hex rgb string."></a>

## applyBrightnessToHex
Allows to chenge brightness to an hex rgb color like it was an hsl color.
It returns a new hex rgb string.(hex, brightness) ⇒ <code>string</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| hex | <code>string</code> | 
| brightness | <code>number</code> | 

<a name="colorStringToRgb
Converts any valid css color string to rgba values"></a>

## colorStringToRgb
Converts any valid css color string to rgba values(colorString) ⇒ <code>RgbaColorObject</code> \| <code>string</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| colorString | <code>string</code> | 

**Example**  
```js
colorStringToRgba('#aabbcc') // ==> { r: 170, g: 187, b: 204, a: 1 }
colorStringToRgba('#aabbccdd') // ==> { r: 170, g: 187, b: 204, a: 0.8667 }
colorStringToRgba('rgba(10, 20, 30, 0.45)') // ==> { r: 10, b: 20, b: 30, a: 0.45 }
colorStringToRgba('rgb(10, 20, 30)') // ==> { r: 10, b: 20, b: 30, a: 1 }
colorStringToRgba('hsla(100, 50%, 50%, 0.5)') // ==> { r: 106, g: 149, b: 191, a: 0.5 }
colorStringToRgba('hsl(100, 50%, 50%)') // ==> { r: 106, g: 149, b: 191, a: 1 }
```
<a name="compareRgbColorsWithTolerance
Compares two RgbColorObject.
It needs all three values r g b to be within the tolerance for the two colors to be treated as equal."></a>

## compareRgbColorsWithTolerance
Compares two RgbColorObject.
It needs all three values r g b to be within the tolerance for the two colors to be treated as equal.(rgb1, rgb2, [tolerance]) ⇒ <code>boolean</code>
**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| rgb1 | <code>RgbColorObject</code> |  | 
| rgb2 | <code>RgbColorObject</code> |  | 
| [tolerance] | <code>number</code> | <code>10</code> | 

<a name="getHexBrightness
Allows to read the brightness of an hex rgb string like it was an hsl color."></a>

## getHexBrightness
Allows to read the brightness of an hex rgb string like it was an hsl color.(hex) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| hex | <code>string</code> | 

<a name="getRandomHexColor
Get a random hex css string +123456"></a>

## getRandomHexColor
Get a random hex css string #123456() ⇒ <code>string</code>
**Kind**: global function  
**Example**  
```js
getRandomHexColor() // ==> '#adc398'
```
<a name="getRandomHslaColor
Get a random hsla_new css string"></a>

## getRandomHslaColor
Get a random hsla() css string([alpha], [defaultSat], [defaultLight]) ⇒ <code>string</code>
**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| [alpha] | <code>boolean</code> \| <code>number</code> | <code>false</code> | 
| [defaultSat] | <code>boolean</code> \| <code>number</code> | <code>true</code> | 
| [defaultLight] | <code>boolean</code> \| <code>number</code> | <code>true</code> | 

**Example**  
```js
getRandomHslaColor() // ==> 'hsla(123, 23, 98, 1)'
getRandomHslaColor(0.34) // ==> 'hsla(349, 67, 9, 0.34)'
getRandomHslaColor(0.34, 50) // ==> 'hsla(111, 50, 28, 0.34)'
getRandomHslaColor(0.34, 50, 40) // ==> 'hsla(87, 50, 40, 0.34)'
```
<a name="getRandomRgbaColor
Get a random rgba_new css string color.
With a specific alpha, a default alpha, or without alpha."></a>

## getRandomRgbaColor
Get a random rgba() css string color.
With a specific alpha, a default alpha, or without alpha.([alpha]) ⇒ <code>string</code>
**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| [alpha] | <code>boolean</code> \| <code>number</code> | <code>false</code> | 

**Example**  
```js
getRandomRgbaColor(false) // ==> 'rgba(12, 43, 146, 1)'
getRandomRgbaColor(true) // ==> 'rgba(212, 143, 246, 0.7)'
getRandomRgbaColor(0.356) // ==> 'rgba(22, 13, 26, 0.356)'
```
<a name="hexToRgba
Converts hex string (+aabbcc || +aabbccdd) to rgba object"></a>

## hexToRgba
Converts hex string (#aabbcc \|\| #aabbccdd) to rgba object(hex) ⇒
**Kind**: global function  
**Returns**: <p>RgbaColorObject</p>  

| Param | Type |
| --- | --- |
| hex | <code>string</code> | 

**Example**  
```js
hexToRgba('#aabbcc') // ==> { r: 170, g: 187, b: 204, a: 1 }
hexToRgba('#aabbccdd') // ==> { r: 0, g: 0, b: 0, a: 0.8667 }
```
<a name="hslaStringToRgba
Converts hsl css strings to rgba values"></a>

## hslaStringToRgba
Converts hsl css strings to rgba values(hslaString) ⇒ <code>RgbaColorObject</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| hslaString | <code>string</code> | 

**Example**  
```js
hslaStringToRgba('hsla(100, 50%, 50%, 0.5)') // ==> { r: 106, g: 149, b: 191, a: 0.5 }
hslaStringToRgba('hsl(100, 50%, 50%)') // ==> { r: 106, g: 149, b: 191, a: 1 }
```
<a name="hslaToRgba
Converts hue saturation brightness alpha values to  r g b a values"></a>

## hslaToRgba
Converts hue saturation brightness alpha values to  r g b a values(hue, sat, light, [alpha]) ⇒ <code>RgbaColorObject</code>
**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| hue | <code>number</code> |  | 
| sat | <code>number</code> |  | 
| light | <code>number</code> |  | 
| [alpha] | <code>number</code> | <code>1</code> | 

**Example**  
```js
hslaToRgba(100, 50, 50, 0.5) // ==> { r: 106, g: 149, b: 191, a: 0.5 }
hslaToRgba(100, 10, 50, 0.5) // ==> { r: 123, g: 140, b: 115, a: 0.5 }
```
<a name="rgbToHex
converts r g b values to rgb string +aabbcc"></a>

## rgbToHex
converts r g b values to rgb string #aabbcc(r, g, b) ⇒ <code>string</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| r | <code>number</code> | 
| g | <code>number</code> | 
| b | <code>number</code> | 

**Example**  
```js
rgbToHex(170, 187, 204) // ==> '#aabbcc'
```
<a name="rgbaStringToRgba
Spits a rgba_new or rgb_new css string to its r g b a values"></a>

## rgbaStringToRgba
Spits a rgba() or rgb() css string to its r g b a values(rgbaString) ⇒
**Kind**: global function  
**Returns**: <p>RgbaColorObject</p>  

| Param | Type |
| --- | --- |
| rgbaString | <code>string</code> | 

**Example**  
```js
rgbaStringToRgba('rgba(10, 20, 30, 0.45)') // ==> { r: 10, b: 20, b: 30, a: 0.45 }
rgbaStringToRgba('rgb(10, 20, 30)') // ==> { r: 10, b: 20, b: 30, a: 1 }
```
<a name="rgbaToHex
converts r g b a values to rgb string +aabbccdd"></a>

## rgbaToHex
converts r g b a values to rgb string #aabbccdd(r, g, b, a) ⇒ <code>string</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| r | <code>number</code> | 
| g | <code>number</code> | 
| b | <code>number</code> | 
| a | <code>number</code> | 

**Example**  
```js
rgbToHex(170, 187, 204, 0.8667) // ==> '#aabbccdd'
```
<a name="rgbaToHsla
Converts r g b a values to h l s a values"></a>

## rgbaToHsla
Converts r g b a values to h l s a values(r, g, b, [a]) ⇒ <code>HslaColorObject</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| r | <code>number</code> | 
| g | <code>number</code> | 
| b | <code>number</code> | 
| [a] | <code>number</code> | 

**Example**  
```js
rgbaToHsla(106, 149, 191, 0.5) // ==> { h: 100, s: 50, l: 50, a: 0.5 }
rgbaToHsla(123, 140, 115, 0.5) // ==> { h: 100, s: 10, l: 50, a: 0.5 }
```
<a name="rgbaToRgbaString
Returns a valid rgba_new css string from the given r g b a values"></a>

## rgbaToRgbaString
Returns a valid rgba() css string from the given r g b a values(r, g, b, [a]) ⇒ <code>string</code>
**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| r | <code>number</code> |  | 
| g | <code>number</code> |  | 
| b | <code>number</code> |  | 
| [a] | <code>number</code> | <code>1</code> | 

**Example**  
```js
rgbaToRgbaString(10, 20, 30, 0.45) // ==> 'rgba(10, 20, 30, 0.45)'
rgbaToRgbaString(10, 20, 30) // ==> 'rgba(10, 20, 30, 1)'
```
<a name="appendChilds
Append multiple childs with one line."></a>

## appendChilds
Append multiple childs with one line.(container, childs) ⇒ <code>void</code>
**Kind**: global function  

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
Attaches multiple event handlers to multiple dom elements at the same time.(elements, events) ⇒ <code>void</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| elements | <code>Array.&lt;HTMLElement&gt;</code> |  |
| events | <code>Record.&lt;string, function()&gt;</code> | <p>Record&lt;string, () =&gt; any&gt;</p> |

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
Creates (and return) a dom element, and assigns some class names to it.([tagName], [...classes]) ⇒ <code>HTMLElement</code>
**Kind**: global function  

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
Given a TouchEvent, it filters the e.touches that are fired on the given target(s)(event, targets) ⇒ <code>Array.&lt;OnePointerEvent&gt;</code>
**Kind**: global function  

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
Otherwise it returns coords relative to the page.(element, [offsetX], [offsetY]) ⇒ <code>DomRect</code>
**Kind**: global function  

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
Gets the coordX of any type of pointer input(event, [offset], [absoluteByPage]) ⇒ <code>number</code>
**Kind**: global function  

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
Gets the coordY of any type of pointer input(event, [offset], [absoluteByPage]) ⇒ <code>number</code>
**Kind**: global function  

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
Checks if node is child (at any level) of container(node, container) ⇒ <code>boolean</code>
**Kind**: global function  

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
Prevents and stops propagation for all pointer related events on the given HTMLElement(element) ⇒ <code>void</code>
**Kind**: global function  

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
Prevents default event behavior and stop event propagation(e) ⇒ <code>void</code>
**Kind**: global function  

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
pointerdown, mousedown, and (if supported) touchstart(els) ⇒ <code>void</code>
**Kind**: global function  

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
You can do it by using getComputedStyle(target).overflow === auto\|scroll, but its more demanding in terms of performance.(event) ⇒ <code>void</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| event | <code>AnyPointerEvent</code> | 

**Example**  
```js
mainContainer.addEventListener('touchstart', (e) => {
  preventScrollDefaultIfNeeded(e)
}, false)
```
<a name="redrawDomElement
Forces an update for the given element.
Sometime this is useful to force a dom element to take care of a css or scroll change."></a>

## redrawDomElement
Forces an update for the given element.
Sometime this is useful to force a dom element to take care of a css or scroll change.(element) ⇒ <code>void</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| element | <code>HTMLElement</code> | 

**Example**  
```js
redrawDomElement(myDom)
```
<a name="addImageOutlineAndGetBase64
Adds an outline around the filled part of the image."></a>

## addImageOutlineAndGetBase64
Adds an outline around the filled part of the image.(imageDom, outlineColor) ⇒ <code>string</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| imageDom | <code>HTMLCanvasElement</code> \| <code>HTMLImageElement</code> | 
| outlineColor | <code>string</code> | 

<a name="addImageWhiteBgAndGetBase64
Takes a image (or a canvas), adds a white background, and returns the new base64."></a>

## addImageWhiteBgAndGetBase64
Takes a image (or a canvas), adds a white background, and returns the new base64.(imageDom) ⇒ <code>string</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| imageDom | <code>HTMLCanvasElement</code> \| <code>HTMLImageElement</code> | 

<a name="base64ToImageData
Gets the canvas context imageData from a image base64.
if x / y / width / height params are given, it returns only the selected portion of the image."></a>

## base64ToImageData
Gets the canvas context imageData from a image base64.
if x / y / width / height params are given, it returns only the selected portion of the image.(base64, [x], [y], [width], [height]) ⇒ <code>Promise.&lt;Uint8ClampedArray&gt;</code>
**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| base64 | <code>string</code> |  | 
| [x] | <code>number</code> | <code>0</code> | 
| [y] | <code>number</code> | <code>0</code> | 
| [width] | <code>number</code> | <code>0</code> | 
| [height] | <code>number</code> | <code>0</code> | 

<a name="blobToBase64Async
Async way to extract the base64 string from a image Blob."></a>

## blobToBase64Async
Async way to extract the base64 string from a image Blob.(blob) ⇒
**Kind**: global function  
**Returns**: <p>Promise<string></p>  

| Param | Type |
| --- | --- |
| blob | <code>Blob</code> | 

<a name="checkImageUrlValidity
Tries to load an url as an image, and return true / false.
If you are offline ==> returns false"></a>

## checkImageUrlValidity
Tries to load an url as an image, and return true / false.
If you are offline ==> returns false(url) ⇒ <code>Promise.&lt;boolean&gt;</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 

<a name="convertImgToCanvas
Takes an image, returns an equivalent canvas"></a>

## convertImgToCanvas
Takes an image, returns an equivalent canvas(img) ⇒ <code>HTMLCanvasElement</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| img | <code>HTMLImageElement</code> | 

<a name="cropImage
Crops an image (or a canvas) and returns a canvas.
Crop starts from { x, y }, and takes width * height pixels.
Final canvas has a width * height size."></a>

## cropImage
Crops an image (or a canvas) and returns a canvas.
Crop starts from { x, y }, and takes width \* height pixels.
Final canvas has a width \* height size.(imageDom, x, y, width, height) ⇒ <code>HTMLCanvasElement</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| imageDom | <code>HTMLCanvasElement</code> \| <code>HTMLImageElement</code> | 
| x | <code>number</code> | 
| y | <code>number</code> | 
| width | <code>number</code> | 
| height | <code>number</code> | 

<a name="cropImageWithMargin
Crops an image and return the corrisponding canvas, adding a % empty margin to each side.
margin === 0.1 means 10% of width and 10% of height."></a>

## cropImageWithMargin
Crops an image and return the corrisponding canvas, adding a % empty margin to each side.
margin === 0.1 means 10% of width and 10% of height.(imageDom, l, t, r, b, [margin]) ⇒ <code>Array.&lt;(HTMLCanvasElement\|number)&gt;</code>
**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| imageDom | <code>HTMLCanvasElement</code> \| <code>HTMLImageElement</code> |  |  |
| l | <code>number</code> |  | <p>left coord x</p> |
| t | <code>number</code> |  | <p>top coord y</p> |
| r | <code>number</code> |  | <p>right coord x</p> |
| b | <code>number</code> |  | <p>bottom coord y</p> |
| [margin] | <code>number</code> | <code>0.1</code> |  |

<a name="findImageContentCoords
Checks the content of an image (or canvas) and returns coords of the non transparent zone.
Returns { minX, minY, maxX, maxY } of the content.
You can specify a pixel precision and alpha tolerance."></a>

## findImageContentCoords
Checks the content of an image (or canvas) and returns coords of the non transparent zone.
Returns { minX, minY, maxX, maxY } of the content.
You can specify a pixel precision and alpha tolerance.(imageDom, [pxPrecision], [alphaTolerance]) ⇒ [<code>Promise.&lt;CanvasCoordsResponse&gt;</code>](#CanvasCoordsResponse)
**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| imageDom | <code>HTMLCanvasElement</code> \| <code>HTMLImageElement</code> |  | 
| [pxPrecision] | <code>number</code> | <code>1</code> | 
| [alphaTolerance] | <code>number</code> | <code>0.01</code> | 

<a name="flipImage
Takes an image (or a canvas) and flip it vertically or horizontally.
Returns a canvas with the same size of the original image."></a>

## flipImage
Takes an image (or a canvas) and flip it vertically or horizontally.
Returns a canvas with the same size of the original image.(imageDom, [horizontally]) ⇒ <code>HTMLCanvasElement</code>
**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| imageDom | <code>HTMLCanvasElement</code> \| <code>HTMLImageElement</code> |  | 
| [horizontally] | <code>boolean</code> | <code>true</code> | 

<a name="getBlobFromBase64
Takes a base64, loads it, and returns an image Blob and a local url pointing it"></a>

## getBlobFromBase64
Takes a base64, loads it, and returns an image Blob and a local url pointing it(base64) ⇒ <code>Promise.&lt;Array.&lt;(Blob\|string)&gt;&gt;</code>
**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;(Blob\|string)&gt;&gt;</code> - <p>[blob, url]</p>  

| Param | Type |
| --- | --- |
| base64 | <code>string</code> | 

<a name="getCanvasBlobAsync
Small utils to use canvas.toBlob with async/await"></a>

## getCanvasBlobAsync
Small utils to use canvas.toBlob with async/await(canvas) ⇒ <code>Promise.&lt;Blob&gt;</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| canvas | <code>HTMLCanvasElement</code> | 

<a name="getImageBase64Async
Takes an image (or a canvas) and returns its base64, asynchronously"></a>

## getImageBase64Async
Takes an image (or a canvas) and returns its base64, asynchronously(imageDom) ⇒ <code>Promise.&lt;string&gt;</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| imageDom | <code>HTMLCanvasElement</code> \| <code>HTMLImageElement</code> | 

<a name="getImageDimensions"></a>

## getImageDimensions(img) ⇒ <code>ImageDimensions</code>
<p>Returns image width, height and ratio.</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| img | <code>HTMLImageElement</code> | 

<a name="getImageDimensionsFromUrl"></a>

## getImageDimensionsFromUrl(url) ⇒ <code>Promise.&lt;ImageDimensions&gt;</code>
<p>Get image dimensions (width, height, ratio) from url</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 

<a name="getImageFromUrlAsync
Loads the given url and return the corrisponding image asynchronously.
if useTempImg === true, use a temp image imageDom (not to be trusted externally)."></a>

## getImageFromUrlAsync
Loads the given url and return the corrisponding image asynchronously.
if useTempImg === true, use a temp image imageDom (not to be trusted externally).(url, [useTempImg]) ⇒ <code>Promise.&lt;HTMLImageElement&gt;</code>
**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| url | <code>string</code> |  | 
| [useTempImg] | <code>boolean</code> | <code>false</code> | 

<a name="imageHasTransparentBackground
Checks if the given image has a transparent background"></a>

## imageHasTransparentBackground
Checks if the given image has a transparent background(imageDom) ⇒ <code>boolean</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| imageDom | <code>HTMLCanvasElement</code> \| <code>HTMLImageElement</code> | 

<a name="imageHasUniformBackground
Checks if the given image (or canvas) has a uniform background.
It compares the 4 coorners, and you can specify the tolerance level [0...255]"></a>

## imageHasUniformBackground
Checks if the given image (or canvas) has a uniform background.
It compares the 4 coorners, and you can specify the tolerance level [0...255](imageDom, [tolerance]) ⇒ <code>boolean</code>
**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| imageDom | <code>HTMLCanvasElement</code> \| <code>HTMLImageElement</code> |  |  |
| [tolerance] | <code>number</code> | <code>3</code> | <p>[0...255]</p> |

<a name="loadImageOffThread
Takes an image and the new url to load inside it, and does it asynchronously.
Returns true / false to reflect the loading result."></a>

## loadImageOffThread
Takes an image and the new url to load inside it, and does it asynchronously.
Returns true / false to reflect the loading result.(img, url) ⇒ <code>Promise.&lt;boolean&gt;</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| img | <code>HTMLImageElement</code> | 
| url | <code>string</code> | 

<a name="mergeBase64Images
Merges multiple base64 image strings into one base64,
merging all the conrrisponding images with transparency."></a>

## mergeBase64Images
Merges multiple base64 image strings into one base64,
merging all the conrrisponding images with transparency.(bases64) ⇒ <code>Promise.&lt;string&gt;</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| bases64 | <code>Array.&lt;string&gt;</code> | 

<a name="resizeBase64AndGetBase64
Takes a base64 string, resize the corrisponding image, and returns a new base64"></a>

## resizeBase64AndGetBase64
Takes a base64 string, resize the corrisponding image, and returns a new base64(base64, [maxSize]) ⇒ <code>Promise.&lt;string&gt;</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| base64 | <code>string</code> |  |
| [maxSize] | <code>number</code> | <p>Default defaultMaxImageSideSize</p> |

<a name="resizeImageAndGetBase64
Resize an image and returns the corrisponding base64"></a>

## resizeImageAndGetBase64
Resize an image and returns the corrisponding base64(imageDom, [maxSize]) ⇒ <code>string</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| imageDom | <code>HTMLCanvasElement</code> \| <code>HTMLImageElement</code> |  |
| [maxSize] | <code>number</code> | <p>Default defaultMaxImageSideSize</p> |

<a name="resizeImageAndGetLocalUrl
Resize an image, get a Blob, and returns a localURL to load the new resized image"></a>

## resizeImageAndGetLocalUrl
Resize an image, get a Blob, and returns a localURL to load the new resized image(image, [maxSize]) ⇒ <code>Promise.&lt;string&gt;</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>HTMLImageElement</code> |  |
| [maxSize] | <code>number</code> | <p>Default defaultMaxImageSideSize</p> |

<a name="setDefaultMaxImageSideSize
Set a different default max image side size"></a>

## setDefaultMaxImageSideSize
Set a different default max image side size(maxSide) ⇒ <code>void</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| maxSide | <code>number</code> | 

<a name="setImageSrcAsync
Small utils to use img.onload with async/await"></a>

## setImageSrcAsync
Small utils to use img.onload with async/await(img, url) ⇒ <code>Promise.&lt;boolean&gt;</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| img | <code>HTMLImageElement</code> | 
| url | <code>string</code> | 

<a name="arrayOrderNumberDecreasing
Utils to sort an array of number decreasing"></a>

## arrayOrderNumberDecreasing
Utils to sort an array of number decreasing(a, b) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 

**Example**  
```js
const myArray = [1, 5, 3, 2]
myArray.sort(arrayOrderNumberIncreasing) // ==> [5, 3, 2, 1]
```
<a name="arrayOrderNumberIncreasing
Utils to sort an array of number increasing"></a>

## arrayOrderNumberIncreasing
Utils to sort an array of number increasing(a, b) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 

**Example**  
```js
const myArray = [1, 5, 3, 2]
myArray.sort(arrayOrderNumberIncreasing) // ==> [1, 2, 3, 5]
```
<a name="arrayOrderStringAlphabetically
Utils to sort an array of string alphabetically"></a>

## arrayOrderStringAlphabetically
Utils to sort an array of string alphabetically(a, b) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| a | <code>string</code> | 
| b | <code>string</code> | 

**Example**  
```js
const myArray = ['hello', 'world', 'bonjour']
myArray.sort(arrayOrderStringAlphabetically) // ==> ['bonjour', 'hello', 'world']
```
<a name="arrayOrderStringDown
Utils to sort an array of string counter alphabetically"></a>

## arrayOrderStringDown
Utils to sort an array of string counter alphabetically(a, b) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| a | <code>string</code> | 
| b | <code>string</code> | 

**Example**  
```js
const myArray = ['hello', 'world', 'bonjour']
myArray.sort(arrayOrderStringDown) // ==> ['world', 'hello', 'bonjour']
```
<a name="callCallbackIfDataChanged
Calls the callback everytime its arguments change"></a>

## callCallbackIfDataChanged
Calls the callback everytime its arguments change(callback) ⇒ <code>function</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 

**Example**  
```js
const myFn = (a) => console.log(a)
const myFnOnlyWhenChange = callCallbackIfDataChanged(myfn)
myFnOnlyWhenChange('hello') // <-- 'hello'
myFnOnlyWhenChange('hello') // nothing
myFnOnlyWhenChange('hello', 'world') // <-- 'hello' 'world'
myFnOnlyWhenChange('hello', 'world') // nothing
myFnOnlyWhenChange('hello') // <-- 'hello'
```
<a name="copyTextToClipboard
Copy a string to device clipboard"></a>

## copyTextToClipboard
Copy a string to device clipboard(str) ⇒ <code>void</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| str | <code>string</code> | 

<a name="debounceThrottle
Trottle a function but at the end it executes the last callback call arrived during the waiting time too"></a>

## debounceThrottle
Trottle a function but at the end it executes the last callback call arrived during the waiting time too(callback, limit) ⇒ <code>function</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 
| limit | <code>number</code> | 

**Example**  
```js
const myFn = (string) => console.log(string)
const myFnTrottled = debounceThrottle(myFn, 100)
myFnTrottled('hello') // <-- 'hello'
myFnTrottled('world') // nothing
myFnTrottled('bonjour') // nothing yet
await delay(100) // <-- now 'bonjour' appears
```
<a name="deepCopy
Utils to make a deep copy of a variable
Json alternative to structuredClone_new"></a>

## deepCopy
Utils to make a deep copy of a variable
Json alternative to structuredClone()(value) ⇒ <code>any</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>any</code> | 

<a name="delay
Utils to stop js execution inline with async/await syntax"></a>

## delay
Utils to stop js execution inline with async/await syntax(milliseconds) ⇒ <code>Promise.&lt;void&gt;</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| milliseconds | <code>number</code> | 

**Example**  
```js
await delay(500)
```
<a name="delayFn
Utils to delay as little as possible a function call"></a>

## delayFn
Utils to delay as little as possible a function call(fn) ⇒ <code>function</code>
**Kind**: global function  
**Returns**: <code>function</code> - <p>(any | Array<any>) =&gt; void</p>  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | <p>(...args: any[]) =&gt; any</p> |

**Example**  
```js
const myFn = (a, b) => console.log(a + b)
const myFnDelayed = delayFn(myFn)
myFnDelayed(12, 21)
console.log('hello world') // <-- this one is printed before
```
<a name="exponentialTimeout"></a>

## exponentialTimeout(callback)
<p>A function that will call a callback function with an exponential timeout.
The callback should return a boolean, if it returns true, the function will be called again.
The timeout is based on the fibonacci sequence.</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 

**Example**  
```js
exponentialTimeout(() => {
 return Math.random() > 0.5
})
```
<a name="fetchUrlFileOffThread
Retreives a blob from the given url asynchronously in a separate thread, and returns a local ObjectURl pointing to it"></a>

## fetchUrlFileOffThread
Retreives a blob from the given url asynchronously in a separate thread, and returns a local ObjectURl pointing to it(url) ⇒ <code>Promise.&lt;string&gt;</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 

<a name="iterateFn
Utils to iterate one function over multiple elements in parallel"></a>

## iterateFn
Utils to iterate one function over multiple elements in parallel(els, fn) ⇒ <code>function</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| els | <code>any</code> \| <code>Array.&lt;any&gt;</code> |  |
| fn | <code>function</code> | <p>(el: any, ...args: Array<any>) =&gt; any</p> |
| ...params | <code>Array.&lt;any&gt;</code> |  |

**Example**  
```js
const double = (a) => a * 2
const multiply = (a, b) => a * b
await iterateFn(10, double) // 20
await iterateFn([10, 20], double) // [20, 40]
await iterateFn([10, 20, 30], multiply, 3) // [30, 60, 90]
await iterateFn([dom1, dom2], fadeIn)
```
<a name="throttle
Trottle a function"></a>

## throttle
Trottle a function(callback, delay) ⇒ <code>function</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 
| delay | <code>number</code> | 

**Example**  
```js
const myFn = () => console.log('ciao')
const myFnTrottled = trottle(myFn, 100)
myFnTrottled() // <-- 'ciao'
myFnTrottled() // nothing
myFnTrottled() // nothing
await delay(100)
myFnTrottled() // <-- 'ciao'
myFnTrottled() // nothing
```
<a name="waitWorkerMessage
A standardized way to wait for a worker response.
By passing an additional string id to each command, you can await for one specific response.
Workers must take in input id from each message, and give it back whitin each response."></a>

## waitWorkerMessage
A standardized way to wait for a worker response.
By passing an additional string id to each command, you can await for one specific response.
Workers must take in input id from each message, and give it back whitin each response.()
**Kind**: global function  
**Example**  
```js
const myWorker = new Worker('pathToTheWorkerFile')
const id = uuidv4()
myWorker.postMessage({ id, someData })
const response = await waitWorkerMessage()
```
<a name="clamp"></a>

## clamp(value, min, max, [decimals]) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> |  |
| min | <code>number</code> |  |
| max | <code>number</code> |  |
| [decimals] | <code>number</code> | <p>Default defaultDecimalDigits</p> |

**Example**  
```js
const currentValue = 12
const minAcceptableValue = 2
const maxAcceptableValue = 5
clamp(currentValue, minAcceptableValue, maxAcceptableValue) // returns 5
```
<a name="convertAngleDegreesToRadians
Converts degrees to radians"></a>

## convertAngleDegreesToRadians
Converts degrees to radians(degrees)
**Kind**: global function  

| Param | Type |
| --- | --- |
| degrees | <code>number</code> | 

**Example**  
```js
convertAngleDegreesToRadians(180) // ==> 3.141592653589793
```
<a name="convertAngleRadiansToDegrees
Converts radians to degrees"></a>

## convertAngleRadiansToDegrees
Converts radians to degrees(radians) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| radians | <code>number</code> | 

**Example**  
```js
convertAngleRadiansToDegrees(Math.PI) // ==> 180
```
<a name="degrees"></a>

## degrees(radians) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| radians | <code>number</code> | 

**Example**  
```js
degrees(Math.PI) // ==> 180
```
<a name="distanceBetweenTwoPointsGreaterThan
Tells if the distance between two points is greater than a certain amount (on a Cartesian plane px system)"></a>

## distanceBetweenTwoPointsGreaterThan
Tells if the distance between two points is greater than a certain amount (on a Cartesian plane px system)(x1, y1, x2, y2, distance) ⇒ <code>boolean</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| x1 | <code>number</code> | 
| y1 | <code>number</code> | 
| x2 | <code>number</code> | 
| y2 | <code>number</code> | 
| distance | <code>number</code> | 

**Example**  
```js
distanceBetweenTwoPointsGreaterThan(1, 1, 5, 5, 5) // ==> true because distance between [1, 1] and [5, 5] is 5.6569
```
<a name="factorial
Get the factorial of the given number
(Recursive function)"></a>

## factorial
Get the factorial of the given number
(Recursive function)(n) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| n | <code>number</code> | 

**Example**  
```js
factorial(5) // ==> 120 = 5! = 5 * 4 * 3 * 2 * 1
```
<a name="getAngleDegreesBetweenTwoPoints
Get the angle (in degree) of the line passing through two points (on a Cartesian plane px system)"></a>

## getAngleDegreesBetweenTwoPoints
Get the angle (in degree) of the line passing through two points (on a Cartesian plane px system)(x1, y1, x2, y2) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| x1 | <code>number</code> | 
| y1 | <code>number</code> | 
| x2 | <code>number</code> | 
| y2 | <code>number</code> | 

**Example**  
```js
getAngleDegreesBetweenTwoPoints(1, 1, 2, 2) // ==> 45
```
**Example**  
```js
getAngleDegreesBetweenTwoPoints(1, 1, 3, -1) // ==> 315
```
<a name="getAngleRadiansBetweenTwoPoints
Get the angle (in radians) of the line passing through two points (on a Cartesian plane px system)"></a>

## getAngleRadiansBetweenTwoPoints
Get the angle (in radians) of the line passing through two points (on a Cartesian plane px system)(x1, y1, x2, y2) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| x1 | <code>number</code> | 
| y1 | <code>number</code> | 
| x2 | <code>number</code> | 
| y2 | <code>number</code> | 

**Example**  
```js
getAngleRadiansBetweenTwoPoints(1, 1, 2, 2) // ==> 0.7853981633974483
```
**Example**  
```js
getAngleRadiansBetweenTwoPoints(1, 1, 3, -1) // ==> 5.497787143782138
```
<a name="getAverage
Get the average of all given numbers"></a>

## getAverage
Get the average of all given numbers(values, [decimals]) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| values | <code>array</code> |  |
| [decimals] | <code>number</code> | <p>Default defaultDecimalDigits</p> |

**Example**  
```js
getAverage([2, 4, 10], 4) // ==> 5.3333
```
<a name="getDistanceBetweenThreePoints
Get the distance between three points coords (on a Cartesian plane px system), and then rounds it"></a>

## getDistanceBetweenThreePoints
Get the distance between three points coords (on a Cartesian plane px system), and then rounds it(x1, y1, x2, y2, x3, y3, [decimals]) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| x1 | <code>number</code> |  |
| y1 | <code>number</code> |  |
| x2 | <code>number</code> |  |
| y2 | <code>number</code> |  |
| x3 | <code>number</code> |  |
| y3 | <code>number</code> |  |
| [decimals] | <code>number</code> | <p>Defalut defaultDecimalDigits</p> |

**Example**  
```js
getDistanceBetweenThreePoints(1, 1, 5, 5, 8, 6, 4) // ==> 8.8192
```
<a name="getDistanceBetweenTwoPoints
Get the distance between two points coords (on a Cartesian plane px system), and then rounds it"></a>

## getDistanceBetweenTwoPoints
Get the distance between two points coords (on a Cartesian plane px system), and then rounds it(x1, y1, x2, y2, [decimals]) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| x1 | <code>number</code> |  |
| y1 | <code>number</code> |  |
| x2 | <code>number</code> |  |
| y2 | <code>number</code> |  |
| [decimals] | <code>number</code> | <p>Default defaultDecimalDigits</p> |

**Example**  
```js
getDistanceBetweenTwoPoints(1, 1, 5, 5) // ==> 5.6569
```
<a name="getGreatCommonDivisor
Get the great common divisor between all given numbers"></a>

## getGreatCommonDivisor
Get the great common divisor between all given numbers(numbers) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| numbers | <code>Array.&lt;number&gt;</code> | 

**Example**  
```js
getGreatCommonDivisor([12, 24, 6]) // ==> 6
```
<a name="getIntersectionBetween4Points
Get the coords of the intersection point between two lines (on a Cartesian plane px system)"></a>

## getIntersectionBetween4Points
Get the coords of the intersection point between two lines (on a Cartesian plane px system)(x1, y1, x2, y2, x3, y3, x4, y4, [decimals]) ⇒ <code>Array.&lt;number&gt;</code>
**Kind**: global function  
**Returns**: <code>Array.&lt;number&gt;</code> - <p>Array with [x, y] coords</p>  

| Param | Type | Description |
| --- | --- | --- |
| x1 | <code>number</code> |  |
| y1 | <code>number</code> |  |
| x2 | <code>number</code> |  |
| y2 | <code>number</code> |  |
| x3 | <code>number</code> |  |
| y3 | <code>number</code> |  |
| x4 | <code>number</code> |  |
| y4 | <code>number</code> |  |
| [decimals] | <code>number</code> | <p>Default defaultDecimalDigits</p> |

<a name="getLineFunctionBetweenTwoPoints
Get the cartesian function of the line passing through two given points (on a Cartesian plane px system)"></a>

## getLineFunctionBetweenTwoPoints
Get the cartesian function of the line passing through two given points (on a Cartesian plane px system)(x1, y1, x2, y2) ⇒ <code>function</code>
**Kind**: global function  
**Returns**: <code>function</code> - <p>(n: number) =&gt; number</p>  

| Param | Type |
| --- | --- |
| x1 | <code>number</code> | 
| y1 | <code>number</code> | 
| x2 | <code>number</code> | 
| y2 | <code>number</code> | 

<a name="getLinerarInterpolation
Returns linear interpolation between two numbers."></a>

## getLinerarInterpolation
Returns linear interpolation between two numbers.(min, max, t, [decimals]) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> |  |
| max | <code>number</code> |  |
| t | <code>number</code> | <p>number between 0 and 1</p> |
| [decimals] | <code>number</code> | <p>Default defaultDecimalDigits</p> |

**Example**  
```js
getLinerarInterpolation(5, 15, 0.5) // returns 10
getLinerarInterpolation(5, 15, 0.1) // returns 6
```
<a name="getLogarithmicPercentageOfValue
Get the value of a percentage out of the total using a logarithmic scale, and then rounds it"></a>

## getLogarithmicPercentageOfValue
Get the value of a percentage out of the total using a logarithmic scale, and then rounds it(value, minValue, maxValue, [decimals]) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | <p>must be &gt;= 0</p> |
| minValue | <code>number</code> | <p>must be &gt; 0</p> |
| maxValue | <code>number</code> | <p>must be &gt; 0</p> |
| [decimals] | <code>number</code> | <p>Default defaultDecimalDigits</p> |

**Example**  
```js
getLogarithmicPercentageOfValue(10, 1, 100, 4) // ==> 50
```
**Example**  
```js
getLogarithmicPercentageOfValue(52.2396, 1, 100, 4) // ==> 85.9
```
**Example**  
```js
getLogarithmicPercentageOfValue(95.4993, 1, 100, 4) // ==> 99
```
<a name="getLogarithmicValueOfPercentage
Get the value of a percentage out of the total using a logarithmic scale, and then rounds it"></a>

## getLogarithmicValueOfPercentage
Get the value of a percentage out of the total using a logarithmic scale, and then rounds it(percentage, minValue, maxValue, [decimals]) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| percentage | <code>number</code> | <p>must be &gt;= 0</p> |
| minValue | <code>number</code> | <p>must be &gt; 0</p> |
| maxValue | <code>number</code> | <p>must be &gt; 0</p> |
| [decimals] | <code>number</code> | <p>Default defaultDecimalDigits</p> |

**Example**  
```js
getLogarithmicValueOfPercentage(50, 1, 100, 4) // ==> 10
```
**Example**  
```js
getLogarithmicValueOfPercentage(85.9, 1, 100, 4) // ==> 52.2396
```
**Example**  
```js
getLogarithmicValueOfPercentage(99, 1, 100, 4) // ==> 95.4993
```
<a name="getMiddlePointCoords
Get the middle points coords between the two given points (on a Cartesian plane px system)"></a>

## getMiddlePointCoords
Get the middle points coords between the two given points (on a Cartesian plane px system)(x1, y1, x2, y2, [decimals]) ⇒ <code>Array.&lt;number&gt;</code>
**Kind**: global function  
**Returns**: <code>Array.&lt;number&gt;</code> - <p>Array with [x, y] middle point's coords</p>  

| Param | Type | Description |
| --- | --- | --- |
| x1 | <code>number</code> |  |
| y1 | <code>number</code> |  |
| x2 | <code>number</code> |  |
| y2 | <code>number</code> |  |
| [decimals] | <code>number</code> | <p>Default defaultDecimalDigits</p> |

**Example**  
```js
getMiddlePointCoords(1, 1, 3, 3) // ==> [ 2, 2 ]
```
<a name="getNumberInBetween
Force a number to be between a min and a max value, and then rounds it.
Its like clamp, but the params order here doesnt matter."></a>

## getNumberInBetween
Force a number to be between a min and a max value, and then rounds it.
Its like clamp, but the params order here doesnt matter.(a, b, c, [decimals]) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> |  |
| b | <code>number</code> |  |
| c | <code>number</code> |  |
| [decimals] | <code>number</code> | <p>Default defaultDecimalDigits</p> |

**Example**  
```js
const currentValue = 12
const minAcceptableValue = 2
const maxAcceptableValue = 5
getNumberInBetween(currentValue, minAcceptableValue, maxAcceptableValue) // returns 5
```
<a name="getPercentageOfValue
Get the percentage of a value out of the total, and then rounds it"></a>

## getPercentageOfValue
Get the percentage of a value out of the total, and then rounds it(value, total, [decimals]) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> |  |
| total | <code>number</code> |  |
| [decimals] | <code>number</code> | <p>Default defaultDecimalDigits</p> |

**Example**  
```js
// returns 50 because 10 is 50% of 20
getPercentageOfValue(10, 20)
```
**Example**  
```js
// returns 5.4187 because 11 is 5.4187% of 203
getPercentageOfValue(11, 203, 4)
```
<a name="getPerpendicularLineFunctionPassingByPoint
Get the cartesian function of the perpendicular line passing through one given point (on a Cartesian plane px system)"></a>

## getPerpendicularLineFunctionPassingByPoint
Get the cartesian function of the perpendicular line passing through one given point (on a Cartesian plane px system)(slope, x1, y1) ⇒ <code>function</code>
**Kind**: global function  
**Returns**: <code>function</code> - <p>(n: number) =&gt; number</p>  

| Param | Type |
| --- | --- |
| slope | <code>number</code> | 
| x1 | <code>number</code> | 
| y1 | <code>number</code> | 

<a name="getPointProjectionOnLine
Get the coords of the perpendicular projection of the given point on the given live (on a Cartesian plane px system)"></a>

## getPointProjectionOnLine
Get the coords of the perpendicular projection of the given point on the given live (on a Cartesian plane px system)(x1, y1, x2, y2, x3, y3) ⇒ <code>Array.&lt;number&gt;</code>
**Kind**: global function  
**Returns**: <code>Array.&lt;number&gt;</code> - <p>Array with [x, y] coords</p>  

| Param | Type |
| --- | --- |
| x1 | <code>number</code> | 
| y1 | <code>number</code> | 
| x2 | <code>number</code> | 
| y2 | <code>number</code> | 
| x3 | <code>number</code> | 
| y3 | <code>number</code> | 

<a name="getQuadraticBezierCurveLength
Get the length of a quadratic bezier curve passing through 3 points, and then rounds it"></a>

## getQuadraticBezierCurveLength
Get the length of a quadratic bezier curve passing through 3 points, and then rounds it(x1, y1, x2, y2, x3, y3, [decimals]) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| x1 | <code>number</code> |  |
| y1 | <code>number</code> |  |
| x2 | <code>number</code> |  |
| y2 | <code>number</code> |  |
| x3 | <code>number</code> |  |
| y3 | <code>number</code> |  |
| [decimals] | <code>number</code> | <p>Default defaultDecimalDigits</p> |

<a name="getQuadraticBezierCurvePointAtTime
Get the length of a quadratic bezier curve passing through 3 points, and then rounds it"></a>

## getQuadraticBezierCurvePointAtTime
Get the length of a quadratic bezier curve passing through 3 points, and then rounds it(t, x1, y1, x2, y2, x3, y3, [decimals]) ⇒ <code>Array.&lt;number&gt;</code>
**Kind**: global function  
**Returns**: <code>Array.&lt;number&gt;</code> - <p>Array of [x, y] coords</p>  

| Param | Type | Description |
| --- | --- | --- |
| t | <code>number</code> |  |
| x1 | <code>number</code> |  |
| y1 | <code>number</code> |  |
| x2 | <code>number</code> |  |
| y2 | <code>number</code> |  |
| x3 | <code>number</code> |  |
| y3 | <code>number</code> |  |
| [decimals] | <code>number</code> | <p>Default defaultDecimalDigits</p> |

<a name="getQuadraticBezierValueAtTime
Get the quadratic bezier curve (passing through 3 points) value at the given time t"></a>

## getQuadraticBezierValueAtTime
Get the quadratic bezier curve (passing through 3 points) value at the given time t(t, p1, p2, p3, [decimals]) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| t | <code>number</code> |  |
| p1 | <code>number</code> |  |
| p2 | <code>number</code> |  |
| p3 | <code>number</code> |  |
| [decimals] | <code>number</code> | <p>Default defaultDecimalDigits</p> |

<a name="getRandomNumber
Get a random number, between min and max included, and then rounds it"></a>

## getRandomNumber
Get a random number, between min and max included, and then rounds it(n1, [n2], [decimals]) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| n1 | <code>number</code> |  |
| [n2] | <code>number</code> |  |
| [decimals] | <code>number</code> | <p>Default defaultDecimalDigits</p> |

**Example**  
```js
// returns a random number between 0 and 10 included
getRandomNumber(10)
```
**Example**  
```js
// returns a random number between 5 and 10 included
getRandomNumber(5, 10)
```
**Example**  
```js
// returns a random integer number between 5 and 10 included
getRandomNumber(5, 10, 0)
```
<a name="getSlopeCoefficientBetweenTwoPoints
Get the slope coefficient of the line passing through two given points (on a Cartesian plane px system)"></a>

## getSlopeCoefficientBetweenTwoPoints
Get the slope coefficient of the line passing through two given points (on a Cartesian plane px system)(x1, y1, x2, y2) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| x1 | <code>number</code> | 
| y1 | <code>number</code> | 
| x2 | <code>number</code> | 
| y2 | <code>number</code> | 

<a name="getValueOfPercentage
Get the value of a percentage out of the total, and then rounds it"></a>

## getValueOfPercentage
Get the value of a percentage out of the total, and then rounds it(percentage, total, [decimals]) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| percentage | <code>number</code> |  |
| total | <code>number</code> |  |
| [decimals] | <code>number</code> | <p>Default defaultDecimalDigits</p> |

**Example**  
```js
getValueOfPercentage(50, 20) // ==> 10 because 50% of 20 = 10
```
**Example**  
```js
getValueOfPercentage(5.4187, 203, 4) // 11 because 5.4187% of 203 = 11
```
<a name="lerp"></a>

## lerp(min, max, t, [decimals]) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> |  |
| max | <code>number</code> |  |
| t | <code>number</code> | <p>number between 0 and 1</p> |
| [decimals] | <code>number</code> | <p>Default defaultDecimalDigits</p> |

**Example**  
```js
lerp(5, 15, 0.5) // returns 10
lerp(5, 15, 0.1) // returns 6
```
<a name="naturalNumbersSummation
Get the summation of the first N natural numbers
Thanks to Carl Friedrich Gauss we dont need to use a recursive function"></a>

## naturalNumbersSummation
Get the summation of the first N natural numbers
Thanks to Carl Friedrich Gauss we dont need to use a recursive function(n) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| n | <code>number</code> | 

**Example**  
```js
naturalNumbersSummation(5) // ==> 15 = 5 + 4 + 3 + 2 + 1
```
<a name="radians"></a>

## radians(degrees)
**Kind**: global function  

| Param | Type |
| --- | --- |
| degrees | <code>number</code> | 

**Example**  
```js
radians(180) // ==> 3.141592653589793
```
<a name="rotateCoords
Rotate a points coords by a specific radians angle (on a Cartesian plane px system)"></a>

## rotateCoords
Rotate a points coords by a specific radians angle (on a Cartesian plane px system)(x, y, angleRadians, [decimals]) ⇒ <code>Array.&lt;number&gt;</code>
**Kind**: global function  
**Returns**: <code>Array.&lt;number&gt;</code> - <p>Array with [x, y] rotated coords</p>  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> |  |
| y | <code>number</code> |  |
| angleRadians | <code>number</code> |  |
| [decimals] | <code>number</code> | <p>Default defaultDecimalDigits</p> |

**Example**  
```js
rotateCoords(1, 1, Math.PI) // ==> [ -1, -1 ]
```
**Example**  
```js
rotateCoords(1, 1, Math.PI / 2) // ==> [ 1, -1 ]
```
<a name="roundNumber
Round a number how much you want"></a>

## roundNumber
Round a number how much you want(number, [decimals]) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> |  |
| [decimals] | <code>number</code> | <p>Default defaultDecimalDigits</p> |

**Example**  
```js
roundNumber(8.45456223) // ==> 8.4546 // default 4 decimal digits
```
**Example**  
```js
roundNumber(8.45456223, 2) // ==> 8.45
```
<a name="setDefaultDecimalDigits
Set a different default decimal digit amount"></a>

## setDefaultDecimalDigits
Set a different default decimal digit amount(digits) ⇒ <code>void</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| digits | <code>number</code> | 

<a name="translateCoords
Translate a points coords by a specific amount (on a Cartesian plane px system)"></a>

## translateCoords
Translate a points coords by a specific amount (on a Cartesian plane px system)(x, y, dx, dy) ⇒ <code>Array.&lt;number&gt;</code>
**Kind**: global function  
**Returns**: <code>Array.&lt;number&gt;</code> - <p>Array with [x, y] translated coords</p>  

| Param | Type |
| --- | --- |
| x | <code>number</code> | 
| y | <code>number</code> | 
| dx | <code>number</code> | 
| dy | <code>number</code> | 

**Example**  
```js
translateCoords(1, 1, 3, -4) // ==> [ 4, -3]
```
<a name="valuesAreSimilar
Checks if all elements in the array differ from each other by less than the given tolerance"></a>

## valuesAreSimilar
Checks if all elements in the array differ from each other by less than the given tolerance(values, [tolerance]) ⇒ <code>boolean</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| values | <code>Array.&lt;number&gt;</code> |  |
| [tolerance] | <code>number</code> | <p>Default = 0</p> |

**Example**  
```js
valuesAreSimilar([10.2, 10.3, 10.5], 0.5) // ==> true
```
**Example**  
```js
valuesAreSimilar([10, 13, 12], 1) // ==> false
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
      So its always a number between 0 and valueMax.(draggableDom, sliderDom, onDrag, valueMax, valueMin, [returnRelativeDiff], [decimals], [waitingTime]) ⇒ <code>void</code>
**Kind**: global function  

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
It needs a css class displayNone ==> display: none;(event, list, element, callback, [verticalScroll]) ⇒ <code>void</code>
**Kind**: global function  

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
You can specify how many px are needed to handle the scroll event, and how many ms should pass to call the LongPress handler.(listElement, onTap, onLongPress, [maxPxToMove], [minMsToLongPress]) ⇒ <code>void</code>
**Kind**: global function  

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
      So its always a number between 0 and valueMax.(draggableDom, sliderDom, onDrag, valueMax, valueMin, [returnRelativeDiff], [decimals], [waitingTime]) ⇒ <code>void</code>
**Kind**: global function  

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
If you only need touchstart / touchmove / touchend handlers, I suggest to simply listen these 3 native events.(target, handlers) ⇒ <code>void</code>
**Kind**: global function  

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
but they work on desktop too, mapping mousedown mousevove and mouseup events.(targets, handlers) ⇒ <code>void</code>
**Kind**: global function  

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
It can handle onGestureStart onGestureChange onGestureEnd with three params: (x, y, scale)(target, handlers) ⇒ <code>void</code>
**Kind**: global function  

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
<a name="CanvasCoordsResponse"></a>

## CanvasCoordsResponse
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [id] | <code>string</code> | 
| minX | <code>number</code> | 
| minY | <code>number</code> | 
| maxX | <code>number</code> | 
| maxY | <code>number</code> | 

