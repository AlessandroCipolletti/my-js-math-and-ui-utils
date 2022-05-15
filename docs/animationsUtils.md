[< Back](https://github.com/AlessandroCipolletti/js-math-and-ui-utils)

# Animations Utils reference

## Importing
```js
// whole module
import { * as AnimationsUtils } from 'js-math-and-ui-utils/animationsUtils'

// single methods
import addInElements from 'js-math-and-ui-utils/animationsUtils/addInElements'
import removeOutElements from 'js-math-and-ui-utils/animationsUtils/removeOutElements'
import animateElement from 'js-math-and-ui-utils/animationsUtils/animateElement'
import bouncingElements from 'js-math-and-ui-utils/animationsUtils/bouncingElements'
import cancelElementAnimationIfExists from 'js-math-and-ui-utils/animationsUtils/cancelElementAnimationIfExists'
import elementHasAnimation from 'js-math-and-ui-utils/animationsUtils/elementHasAnimation'
import toggleFadeElements from 'js-math-and-ui-utils/animationsUtils/toggleFadeElements'
import fadeInElements from 'js-math-and-ui-utils/animationsUtils/fadeInElements'
import fadeOutElements from 'js-math-and-ui-utils/animationsUtils/fadeOutElements'
import moveToElements from 'js-math-and-ui-utils/animationsUtils/moveToElements'
```

<a name="addInElements
Performs a addIn animation on one or multiple Dom elements at the same time."></a>

## addInElements
Performs a addIn animation on one or multiple Dom elements at the same time.

(elements, options) ⇒ <code>void</code>  

| Param | Type |
| --- | --- |
| elements | <code>HTMLElementWithAnimations</code> \| <code>Array&lt;HTMLElementWithAnimations&gt;</code> |
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


## animateElement
Animates the given element with the given keyframes.
It needs also an animationNane; with this you will be able to check which animation is running,
and stop them one by one.

(element, animationName, keyframes, duration, otherNativeOptions, commitResult) ⇒ <code>Promise&lt;boolean&gt;</code>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElementWithAnimations</code> | One dom element to animate |
| animationName | <code>string</code> | String to identify this animation |
| keyframes | <code>Keyframes</code> | Js array of valid keyframes (css property to animate) |
| duration | <code>number</code> | <p>Default = 200 ms</p> |
| otherNativeOptions | <code>Record.&lt;string, any&gt;</code> | WebAnimation options |
| commitResult | <code>boolean</code> | <p>Default = true</p> |

<a name="bouncingElements
Performs a bouncing animation on one or multiple Dom elements at the same time."></a>

## bouncingElements
Performs a bouncing animation on one or multiple Dom elements at the same time.

(elements, options) ⇒ <code>Promise&lt;void&gt;</code>  

| Param | Type |
| --- | --- |
| elements | <code>HTMLElementWithAnimations</code> \| <code>Array&lt;HTMLElementWithAnimations&gt;</code> |
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

<a name="cancelElementAnimationIfExists
Cancel an animation, if its still in progress"></a>

## cancelElementAnimationIfExists
Cancel an animation, if it's still in progress.

(element, animName) ⇒ <code>void</code>  

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
This allows to prevent the same animation to be played multiple times at the same time.

(element, animName) ⇒ <code>boolean</code>  

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
Performs a fadeIn animation on one or multiple Dom elements at the same time.

(elements, options) ⇒ <code>Promise&lt;void&gt;</code>  

| Param | Type |
| --- | --- |
| elements | <code>HTMLElementWithAnimations</code> \| <code>Array&lt;HTMLElementWithAnimations&gt;</code> |
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

<a name="fadeOutElements
Performs a fadeOut animation on one or multiple Dom elements at the same time."></a>

## fadeOutElements
Performs a fadeOut animation on one or multiple Dom elements at the same time.

(elements, options) ⇒ <code>Promise&lt;void&gt;</code>  

| Param | Type |
| --- | --- |
| elements | <code>HTMLElementWithAnimations</code> \| <code>Array&lt;HTMLElementWithAnimations&gt;</code> |
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

<a name="moveToElements
Performs a bouncing animation on one or multiple Dom elements at the same time."></a>

## moveToElements
Performs a bouncing animation on one or multiple Dom elements at the same time.

(elements, duration, fromX, fromY, toX, toY, [fromScale]) ⇒ <code>Promise&lt;void&gt;</code>  

| Param | Type | Default |
| --- | --- | --- |
| elements | <code>HTMLElementWithAnimations</code> \| <code>Array&lt;HTMLElementWithAnimations&gt;</code> |  |
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

<a name="removeOutElements
Performs a removeOut animation on one or multiple Dom elements at the same time."></a>

## removeOutElements
Performs a removeOut animation on one or multiple Dom elements at the same time.

(elements, options) ⇒ <code>Promise&lt;void&gt;</code>  

| Param | Type |
| --- | --- |
| elements | <code>HTMLElementWithAnimations</code> \| <code>Array&lt;HTMLElementWithAnimations&gt;</code> |
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

<a name="toggleFadeElements
Performs a toggle-fade animation on one or multiple Dom elements at the same time."></a>

## toggleFadeElements
Performs a toggle-fade animation on one or multiple Dom elements at the same time.

(elements, options) ⇒ <code>Promise&lt;void&gt;</code>  

| Param | Type |
| --- | --- |
| elements | <code>HTMLElementWithAnimations</code> \| <code>Array&lt;HTMLElementWithAnimations&gt;</code> |
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
