[< Back](https://github.com/AlessandroCipolletti/js-math-and-ui-utils)

# Image Utils reference

## Importing
```js
// whole module
import { * as ImageUtils } from 'js-math-and-ui-utils/imageUtils'

// single methods
import setDefaultMaxImageSideSize from 'js-math-and-ui-utils/imageUtils/setDefaultMaxImageSideSize'
import addImageOutlineAndGetBase64 from 'js-math-and-ui-utils/imageUtils/addImageOutlineAndGetBase64'
import addImageWhiteBgAndGetBase64 from 'js-math-and-ui-utils/imageUtils/addImageWhiteBgAndGetBase64'
import base64ToImageData from 'js-math-and-ui-utils/imageUtils/base64ToImageData'
import blobToBase64Async from 'js-math-and-ui-utils/imageUtils/blobToBase64Async'
import checkImageUrlValidity from 'js-math-and-ui-utils/imageUtils/checkImageUrlValidity'
import convertImgToCanvas from 'js-math-and-ui-utils/imageUtils/convertImgToCanvas'
import cropImage from 'js-math-and-ui-utils/imageUtils/cropImage'
import cropImageWithMargin from 'js-math-and-ui-utils/imageUtils/cropImageWithMargin'
import findImageContentCoords from 'js-math-and-ui-utils/imageUtils/findImageContentCoords'
import flipImage from 'js-math-and-ui-utils/imageUtils/flipImage'
import getBlobFromBase64 from 'js-math-and-ui-utils/imageUtils/getBlobFromBase64'
import getCanvasBlobAsync from 'js-math-and-ui-utils/imageUtils/getCanvasBlobAsync'
import getImageBase64Async from 'js-math-and-ui-utils/imageUtils/getImageBase64Async'
import getImageFromUrlAsync from 'js-math-and-ui-utils/imageUtils/getImageFromUrlAsync'
import imageHasTransparentBackground from 'js-math-and-ui-utils/imageUtils/imageHasTransparentBackground'
import imageHasUniformBackground from 'js-math-and-ui-utils/imageUtils/imageHasUniformBackground'
import loadImageOffThread from 'js-math-and-ui-utils/imageUtils/loadImageOffThread'
import mergeBase64Images from 'js-math-and-ui-utils/imageUtils/mergeBase64Images'
import resizeBase64AndGetBase64 from 'js-math-and-ui-utils/imageUtils/resizeBase64AndGetBase64'
import resizeImageAndGetBase64 from 'js-math-and-ui-utils/imageUtils/resizeImageAndGetBase64'
import resizeImageAndGetLocalUrl from 'js-math-and-ui-utils/imageUtils/resizeImageAndGetLocalUrl'
import setImageSrcAsync from 'js-math-and-ui-utils/imageUtils/setImageSrcAsync'
```

<a name="setDefaultMaxImageSideSize
Set a different default max image side size"></a>

## setDefaultMaxImageSideSize
Set a different default max image side size(maxSide) ⇒ <code>void</code>

| Param | Type |
| --- | --- |
| maxSide | <code>number</code> |

<a name="addImageOutlineAndGetBase64
Adds an outline around the filled part of the image."></a>

## addImageOutlineAndGetBase64
Adds an outline around the filled part of the image.

(imageDom, outlineColor) ⇒ <code>string</code>

| Param | Type |
| --- | --- |
| imageDom | <code>HTMLCanvasElement</code> \| <code>HTMLImageElement</code> |
| outlineColor | <code>string</code> |

<a name="addImageWhiteBgAndGetBase64
Takes a image (or a canvas), adds a white background, and returns the new base64."></a>

## addImageWhiteBgAndGetBase64
Takes a image (or a canvas), adds a white background, and returns the new base64.

(imageDom) ⇒ <code>string</code>

| Param | Type |
| --- | --- |
| imageDom | <code>HTMLCanvasElement</code> \| <code>HTMLImageElement</code> |

<a name="base64ToImageData
Gets the canvas context imageData from a image base64.
if x / y / width / height params are given, it returns only the selected portion of the image."></a>

## base64ToImageData
Gets the canvas context imageData from a image base64.
if x / y / width / height params are given, it returns only the selected portion of the image.

(base64, [x], [y], [width], [height]) ⇒ <code>Promise&lt;Uint8ClampedArray&gt;</code>

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
**Returns**: <p>Promise<string></p>  

| Param | Type |
| --- | --- |
| blob | <code>Blob</code> |

<a name="checkImageUrlValidity
Tries to load an url as an image, and return true / false.
If you are offline ==> returns false"></a>

## checkImageUrlValidity
Tries to load an url as an image, and return true / false.
If you are offline ==> returns false.

(url) ⇒ <code>Promise.&lt;boolean&gt;</code>

| Param | Type |
| --- | --- |
| url | <code>string</code> |

<a name="convertImgToCanvas
Takes an image, returns an equivalent canvas"></a>

## convertImgToCanvas
Takes an image, returns an equivalent canvas.

(img) ⇒ <code>HTMLCanvasElement</code>

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
Final canvas has a width \* height size.

(imageDom, x, y, width, height) ⇒ <code>HTMLCanvasElement</code>

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
margin === 0.1 means 10% of width and 10% of height.

(imageDom, l, t, r, b, [margin]) ⇒ <code>Array&lt;(HTMLCanvasElement\|number)&gt;</code>

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
You can specify a pixel precision and alpha tolerance.

(imageDom, [pxPrecision], [alphaTolerance]) ⇒ <code>Promise&lt;CanvasCoordsResponse&gt;</code>

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
Returns a canvas with the same size of the original image.

(imageDom, [horizontally]) ⇒ <code>HTMLCanvasElement</code>

| Param | Type | Default |
| --- | --- | --- |
| imageDom | <code>HTMLCanvasElement</code> \| <code>HTMLImageElement</code> |  |
| [horizontally] | <code>boolean</code> | <code>true</code> |

<a name="getBlobFromBase64
Takes a base64, loads it, and returns an image Blob and a local url pointing it"></a>

## getBlobFromBase64
Takes a base64, loads it, and returns an image Blob and a local url pointing it.

(base64) ⇒ <code>Promise&lt;[Blob, localObjectURL]&gt;</code>

| Param | Type |
| --- | --- |
| base64 | <code>string</code> |

<a name="getCanvasBlobAsync
Small utils to use canvas.toBlob with async/await"></a>

## getCanvasBlobAsync
Small utils to use canvas.toBlob with async/await.

(canvas) ⇒ <code>Promise&lt;Blob&gt;</code>

| Param | Type |
| --- | --- |
| canvas | <code>HTMLCanvasElement</code> |

<a name="getImageBase64Async
Takes an image (or a canvas) and returns its base64, asynchronously"></a>

## getImageBase64Async
Takes an image (or a canvas) and returns its base64, asynchronously.

(imageDom) ⇒ <code>Promise&lt;string&gt;</code>

| Param | Type |
| --- | --- |
| imageDom | <code>HTMLCanvasElement</code> \| <code>HTMLImageElement</code> |

<a name="getImageFromUrlAsync
Loads the given url and return the corrisponding image asynchronously.
if useTempImg === true, use a temp image imageDom (not to be trusted externally)."></a>

## getImageFromUrlAsync
Loads the given url and return the corrisponding image asynchronously.
if useTempImg === true, use a temp image imageDom (not to be trusted externally).

(url, [useTempImg]) ⇒ <code>Promise&lt;HTMLImageElement&gt;</code>

| Param | Type | Default |
| --- | --- | --- |
| url | <code>string</code> |  |
| [useTempImg] | <code>boolean</code> | <code>false</code> |

<a name="imageHasTransparentBackground
Checks if the given image has a transparent background"></a>

## imageHasTransparentBackground
Checks if the given image has a transparent background.

(imageDom) ⇒ <code>boolean</code>

| Param | Type |
| --- | --- |
| imageDom | <code>HTMLCanvasElement</code> \| <code>HTMLImageElement</code> |

<a name="imageHasUniformBackground
Checks if the given image (or canvas) has a uniform background.
It compares the 4 coorners, and you can specify the tolerance level [0...255]"></a>

## imageHasUniformBackground
Checks if the given image (or canvas) has a uniform background.
It compares the 4 coorners, and you can specify the tolerance level [0...255].

(imageDom, [tolerance]) ⇒ <code>boolean</code>

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| imageDom | <code>HTMLCanvasElement</code> \| <code>HTMLImageElement</code> |  |  |
| [tolerance] | <code>number</code> | <code>3</code> | <p>[0...255]</p> |

<a name="loadImageOffThread
Takes an image and the new url to load inside it, and does it asynchronously.
Returns true / false to reflect the loading result."></a>

## loadImageOffThread
Takes an image and the new url to load inside it, and does it asynchronously.
Returns true / false to reflect the loading result.

(img, url) ⇒ <code>Promise&lt;boolean&gt;</code>

| Param | Type |
| --- | --- |
| img | <code>HTMLImageElement</code> |
| url | <code>string</code> |

<a name="mergeBase64Images
Merges multiple base64 image strings into one base64,
merging all the conrrisponding images with transparency."></a>

## mergeBase64Images
Merges multiple base64 image strings into one base64,
merging all the conrrisponding images with transparency.

(bases64) ⇒ <code>Promise&lt;string&gt;</code>

| Param | Type |
| --- | --- |
| bases64 | <code>Array.&lt;string&gt;</code> |

<a name="resizeBase64AndGetBase64
Takes a base64 string, resize the corrisponding image, and returns a new base64"></a>

## resizeBase64AndGetBase64
Takes a base64 string, resize the corrisponding image, and returns a new base64.

(base64, [maxSize]) ⇒ <code>Promise&lt;string&gt;</code>

| Param | Type | Description |
| --- | --- | --- |
| base64 | <code>string</code> |  |
| [maxSize] | <code>number</code> | <p>Default defaultMaxImageSideSize</p> |

<a name="resizeImageAndGetBase64
Resize an image and returns the corrisponding base64"></a>

## resizeImageAndGetBase64
Resize an image and returns the corrisponding base64.

(imageDom, [maxSize]) ⇒ <code>string</code>

| Param | Type | Description |
| --- | --- | --- |
| imageDom | <code>HTMLCanvasElement</code> \| <code>HTMLImageElement</code> |  |
| [maxSize] | <code>number</code> | <p>Default defaultMaxImageSideSize</p> |

<a name="resizeImageAndGetLocalUrl
Resize an image, get a Blob, and returns a localURL to load the new resized image"></a>

## resizeImageAndGetLocalUrl
Resize an image, get a Blob, and returns a localURL to load the new resized image.

(image, [maxSize]) ⇒ <code>Promise&lt;string&gt;</code>

| Param | Type | Description |
| --- | --- | --- |
| image | <code>HTMLImageElement</code> |  |
| [maxSize] | <code>number</code> | <p>Default defaultMaxImageSideSize</p> |

<a name="setImageSrcAsync
Small utils to use img.onload with async/await"></a>

## setImageSrcAsync
Small utils to use img.onload with async/await.

(img, url) ⇒ <code>Promise&lt;boolean&gt;</code>

| Param | Type |
| --- | --- |
| img | <code>HTMLImageElement</code> |
| url | <code>string</code> |
