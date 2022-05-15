[< Back](https://github.com/AlessandroCipolletti/js-math-and-ui-utils)

# Colors Utils reference

## Importing
```js
// whole module
import { * as ColorsUtils } from 'js-math-and-ui-utils/colorsUtils'

// single methods
import applyBrightnessToHex from 'js-math-and-ui-utils/colorsUtils/applyBrightnessToHex'
import colorStringToRgb from 'js-math-and-ui-utils/colorsUtils/colorStringToRgb'
import compareRgbColorsWithTolerance from 'js-math-and-ui-utils/colorsUtils/compareRgbColorsWithTolerance'
import getHexBrightness from 'js-math-and-ui-utils/colorsUtils/getHexBrightness'
import getRandomHexColor from 'js-math-and-ui-utils/colorsUtils/getRandomHexColor'
import getRandomHslaColor from 'js-math-and-ui-utils/colorsUtils/getRandomHslaColor'
import getRandomRgbaColor from 'js-math-and-ui-utils/colorsUtils/getRandomRgbaColor'
import hexToRgba from 'js-math-and-ui-utils/colorsUtils/hexToRgba'
import hslaStringToRgba from 'js-math-and-ui-utils/colorsUtils/hslaStringToRgba'
import hslaToRgba from 'js-math-and-ui-utils/colorsUtils/hslaToRgba'
import rgbaStringToRgba from 'js-math-and-ui-utils/colorsUtils/rgbaStringToRgba'
import rgbaToHex from 'js-math-and-ui-utils/colorsUtils/rgbaToHex'
import rgbaToHsla from 'js-math-and-ui-utils/colorsUtils/rgbaToHsla'
import rgbaToRgbaString from 'js-math-and-ui-utils/colorsUtils/rgbaToRgbaString'
import rgbToHex from 'js-math-and-ui-utils/colorsUtils/rgbToHex'
```


<a name="applyBrightnessToHex
Allows to chenge brightness to an hex rgb color like it was an hsl color.
It returns a new hex rgb string."></a>

## applyBrightnessToHex
Allows to chenge brightness to an hex rgb color like it was an hsl color.
It returns a new hex rgb string.(

  hex, brightness) ⇒ <code>string</code>

| Param | Type |
| --- | --- |
| hex | <code>string</code> |
| brightness | <code>number</code> |

<a name="colorStringToRgb
Converts any valid css color string to rgba values"></a>

## colorStringToRgb
Converts any valid css color string to rgba values.

(colorString) ⇒ <code>RgbaColorObject</code> \| <code>string</code>

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
It needs all three values r g b to be within the tolerance for the two colors to be treated as equal.

(rgb1, rgb2, [tolerance]) ⇒ <code>boolean</code>

| Param | Type | Default |
| --- | --- | --- |
| rgb1 | <code>RgbColorObject</code> |  |
| rgb2 | <code>RgbColorObject</code> |  |
| [tolerance] | <code>number</code> | <code>10</code> |

<a name="getHexBrightness
Allows to read the brightness of an hex rgb string like it was an hsl color."></a>

## getHexBrightness
Allows to read the brightness of an hex rgb string like it was an hsl color.

(hex) ⇒ <code>number</code>

| Param | Type |
| --- | --- |
| hex | <code>string</code> |

<a name="getRandomHexColor
Get a random hex css string +123456"></a>

## getRandomHexColor
Get a random hex css string #123456() ⇒ <code>string</code>
**Example**  
```js
getRandomHexColor() // ==> '#adc398'
```
<a name="getRandomHslaColor
Get a random hsla_new css string"></a>

## getRandomHslaColor
Get a random hsla() css string.

([alpha], [defaultSat], [defaultLight]) ⇒ <code>string</code>

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
With a specific alpha, a default alpha, or without alpha.

([alpha]) ⇒ <code>string</code>

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
Converts hsl css strings to rgba values.

(hslaString) ⇒ <code>RgbaColorObject</code>

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
Converts hue saturation brightness alpha values to  r g b a values.

(hue, sat, light, [alpha]) ⇒ <code>RgbaColorObject</code>

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
<a name="rgbaStringToRgba
Spits a rgba_new or rgb_new css string to its r g b a values"></a>

## rgbaStringToRgba
Spits a rgba() or rgb() css string to its r g b a values.

(rgbaString) ⇒ RgbaColorObject

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
converts r g b a values to rgb string #aabbccdd.

(r, g, b, a) ⇒ <code>string</code>

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
Converts r g b a values to h l s a values.

(r, g, b, [a]) ⇒ <code>HslaColorObject</code>

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
Returns a valid rgba() css string from the given r g b a values.

(r, g, b, [a]) ⇒ <code>string</code>

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
<a name="rgbToHex
converts r g b values to rgb string +aabbcc"></a>

## rgbToHex
converts r g b values to rgb string #aabbcc.

(r, g, b) ⇒ <code>string</code>

| Param | Type |
| --- | --- |
| r | <code>number</code> |
| g | <code>number</code> |
| b | <code>number</code> |

**Example**  
```js
rgbToHex(170, 187, 204) // ==> '#aabbcc'
```
