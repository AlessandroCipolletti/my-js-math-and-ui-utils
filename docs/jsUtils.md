[< Back](https://github.com/AlessandroCipolletti/js-math-and-ui-utils)

# Js Utils reference

## Importing
```js
// whole module
import { * as JsUtils } from 'js-math-and-ui-utils/jsUtils'

// single methods
import arrayOrderNumberDecreasing from 'js-math-and-ui-utils/jsUtils/arrayOrderNumberDecreasing'
import arrayOrderNumberIncreasing from 'js-math-and-ui-utils/jsUtils/arrayOrderNumberIncreasing'
import arrayOrderStringAlphabetically from 'js-math-and-ui-utils/jsUtils/arrayOrderStringAlphabetically'
import arrayOrderStringDown from 'js-math-and-ui-utils/jsUtils/arrayOrderStringDown'
import callCallbackIfDataChanged from 'js-math-and-ui-utils/jsUtils/callCallbackIfDataChanged'
import copyTextToClipboard from 'js-math-and-ui-utils/jsUtils/copyTextToClipboard'
import debounceThrottle from 'js-math-and-ui-utils/jsUtils/debounceThrottle'
import deepCopy from 'js-math-and-ui-utils/jsUtils/deepCopy'
import delayFn from 'js-math-and-ui-utils/jsUtils/delayFn'
import fetchUrlFileOffThread from 'js-math-and-ui-utils/jsUtils/fetchUrlFileOffThread'
import iterateFn from 'js-math-and-ui-utils/jsUtils/iterateFn'
import throttle from 'js-math-and-ui-utils/jsUtils/throttle'
import waitWorkerMessage from 'js-math-and-ui-utils/jsUtils/waitWorkerMessage'
```

<a name="arrayOrderNumberDecreasing
Utils to sort an array of number decreasing"></a>

## arrayOrderNumberDecreasing
Utils to sort an array of number decreasing.

(a, b) ⇒ <code>number</code>

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
Utils to sort an array of number increasing.

(a, b) ⇒ <code>number</code>

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
Utils to sort an array of string alphabetically.

(a, b) ⇒ <code>number</code>

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
Utils to sort an array of string counter alphabetically.

(a, b) ⇒ <code>number</code>

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
Calls the callback everytime its arguments change.

(callback) ⇒ <code>function</code>

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
Copy a string to device clipboard.

(str) ⇒ <code>void</code>

| Param | Type |
| --- | --- |
| str | <code>string</code> |

## debounceThrottle
Trottle a function but at the end it executes the last callback call arrived during the waiting time too

| Param | Type |
| --- | --- |
| callback | <code>function</code> |
| limit | <code>number</code> |

**Example**
```js
const myFn = (string) => console.log(string)
const myFnTrottled = trottle(myFn, 100)
myFnTrottled(hello) // <-- hello
myFnTrottled(world) // nothing
myFnTrottled(bonjour) // nothing yet
await delay(100) // <-- now bonjour appears(callback, limit)
```
<a name="deepCopy
Utils to make a deep copy of a variable
Json alternative to structuredClone_new"></a>

## deepCopy
Utils to make a deep copy of a variable
Json alternative to structuredClone().

(value) ⇒ <code>any</code>

| Param | Type |
| --- | --- |
| value | <code>any</code> |

<a name="delayFn
Utils to delay as little as possible a function call"></a>

## delayFn
Utils to delay as little as possible a function call.

(fn) ⇒ <code>function</code>

| Param | Type |
| --- | --- |
| fn | <code>function</code> |

**Example**  
```js
const myFn = (a, b) => console.log(a + b)
const myFnDelayed = delayFn(myFn)
myFnDelayed(12, 21)
console.log('hello world') // <-- this one is printed before
```
<a name="fetchUrlFileOffThread
Retreives a blob from the given url asynchronously in a separate thread, and returns a local ObjectURl pointing to it"></a>

## fetchUrlFileOffThread
Retreives a blob from the given url asynchronously in a separate thread, and returns a local ObjectURl pointing to it.

(url) ⇒ <code>Promise&lt;string&gt;</code>

| Param | Type |
| --- | --- |
| url | <code>string</code> |

<a name="iterateFn
Utils to iterate one function over multiple elements in parallel"></a>

## iterateFn
Utils to iterate one function over multiple elements in parallel.

(els, fn) ⇒ <code>function</code>

| Param | Type |
| --- | --- |
| els | <code>any</code> \| <code>Array&lt;any&gt;</code> |
| fn | <code>function</code> |
| ...params | <code>Array.&lt;any&gt;</code> |

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
Trottle a function.

(callback, delay) ⇒ <code>function</code>

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
Workers must take in input id from each message, and give it back whitin each response.

(worker, id) ⇒ <code>any</code>

| Param | Type |
| --- | --- |
| worker | <code>Worker</code> |
| id | <code>string</code> |


**Example**  
```js
const myWorker = new Worker('pathToTheWorkerFile')
const id = uuidv4()
myWorker.postMessage({ id, someData })
const response = await waitWorkerMessage()
```
