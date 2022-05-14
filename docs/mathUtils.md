[< Back](https://github.com/AlessandroCipolletti/js-math-and-ui-utils)

# Math Utils reference

## let defaultDecimalDigits : <code>number</code>
<p>Specify how many decimal digits you want in all results</p>

**Kind**: global variable

# Functions

## setDefaultDecimalDigits
Set a different default decimal digit amount(digits) ⇒ <code>void</code>

| Param | Type | Description |
| --- | --- | --- |
| digits | <code>number</code> | New default decimal digits amount

<a name="roundNumber
Round a number how much you want"></a>

## roundNumber
Round a number how much you want.

(number, [decimals]) ⇒ <code>number</code>

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | <p>Number to round</p> |
| [decimals] | <code>number</code> | <p>Default defaultDecimalDigits</p> |

**Example**
```js
roundNumber(8.45456223) // ==> 8.4546 // default 4 decimal digits
```
**Example**
```js
roundNumber(8.45456223, 2) // ==> 8.45
```
<a name="getNumberInBetween
Force a number to be between a min and a max value, and then rounds it.
Its like clamp, but the params order here doesn't matter."></a>

## getNumberInBetween
Force a number to be between a min and a max value, and then rounds it.
Its like **clamp**, but the params order here doesn't matter.

(a, b, c, [decimals]) ⇒ <code>number</code>

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> | First value (usually current value) |
| b | <code>number</code> | Second value (usually min value) |
| c | <code>number</code> | Third value (usually max value) |
| [decimals] | <code>number</code> | <p>Default defaultDecimalDigits</p> |

**Example**
```js
const currentValue = 12
const minAcceptableValue = 2
const maxAcceptableValue = 5
getNumberInBetween(currentValue, minAcceptableValue, maxAcceptableValue) // returns 5
```
<a name="clamp"></a>

## clamp

Alias of  **getNumberInBetween**

<a name="linerarInterpolation
Returns linear interpolation between two numbers."></a>

## linerarInterpolation
Returns linear interpolation between two numbers.

(min, max, t) ⇒ <code>number</code>

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | Min value |
| max | <code>number</code> | Max value |
| t | <code>number</code> | <p>Number between 0 and 1</p> |

**Example**
```js
linerarInterpolation(5, 15, 0.5) // returns 10
linerarInterpolation(5, 15, 0.1) // returns 6
```
<a name="lerp"></a>

## lerp

Alias for **linerarInterpolation**

<a name="getRandomNumber
Get a random number, between min and max included, and then rounds it"></a>

## getRandomNumber
Get a random number, between min and max included, and then rounds it.

(n1, [n2], [decimals]) ⇒ <code>number</code>

| Param | Type | Description |
| --- | --- | --- |
| n1 | <code>number</code> | If alone, this means the max value, otherwise is the min value. |
| [n2] | <code>number</code> | If passed, this is the max value |
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
<a name="getPercentageOfValue
Get the percentage of a value out of the total, and then rounds it"></a>

## getPercentageOfValue
Get the percentage of a value out of the total, and then rounds it.

(value, total, [decimals]) ⇒ <code>number</code>

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Current value |
| total | <code>number</code> | Max value |
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
<a name="getValueOfPercentage
Get the value of a percentage out of the total, and then rounds it"></a>

## getValueOfPercentage
Get the value of a percentage out of the total, and then rounds it.

(percentage, total, [decimals]) ⇒ <code>number</code>

| Param | Type | Description |
| --- | --- | --- |
| percentage | <code>number</code> | Desired % |
| total | <code>number</code> | Max value |
| [decimals] | <code>number</code> | <p>Default defaultDecimalDigits</p> |

**Example**
```js
getValueOfPercentage(50, 20) // ==> 10 because 50% of 20 = 10
```
**Example**
```js
getValueOfPercentage(5.4187, 203, 4) // 11 because 5.4187% of 203 = 11
```
<a name="getLogarithmicValueOfPercentage
Get the value of a percentage out of the total using a logarithmic scale, and then rounds it"></a>

## getLogarithmicValueOfPercentage
Get the value of a percentage out of the total using a logarithmic scale, and then rounds it.
The inverse of getLogarithmicPercentageOfValue()

(percentage, minValue, maxValue, [decimals]) ⇒ <code>number</code>

| Param | Type | Description |
| --- | --- | --- |
| percentage | <code>number</code> | <p>Must be &gt;= 0</p> |
| minValue | <code>number</code> | <p>Must be &gt; 0</p> |
| maxValue | <code>number</code> | <p>Must be &gt; 0</p> |
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
<a name="getLogarithmicPercentageOfValue
Get the value of a percentage out of the total using a logarithmic scale, and then rounds it"></a>

## getLogarithmicPercentageOfValue
Get the value of a percentage out of the total using a logarithmic scale, and then rounds it.
The inverse of getLogarithmicValueOfPercentage()

(value, minValue, maxValue, [decimals]) ⇒ <code>number</code>

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
<a name="getAverage
Get the average of all given numbers"></a>

## getAverage
Get the average of all given numbers.

(values, [decimals]) ⇒ <code>number</code>

| Param | Type | Description |
| --- | --- | --- |
| values | <code>array</code> | Array of numeric values |
| [decimals] | <code>number</code> | <p>Default defaultDecimalDigits</p> |

**Example**
```js
getAverage([2, 4, 10], 4) // ==> 5.3333
```
<a name="getGreatCommonDivisor
Get the great common divisor between all given numbers"></a>

## getGreatCommonDivisor
Get the great common divisor between all given numbers.

(numbers) ⇒ <code>number</code>

| Param | Type | Description
| --- | --- | --- |
| numbers | <code>Array&lt;number&gt;</code> | Array of numeric values

**Example**
```js
getGreatCommonDivisor([12, 24, 6]) // ==> 6
```
<a name="valuesAreSimilar
Checks if all elements in the array differ from each other by less than the given tolerance"></a>

## valuesAreSimilar
Checks if all elements in the array differ from each other by less than the given tolerance.

(values, [tolerance]) ⇒ <code>boolean</code>

| Param | Type | Description |
| --- | --- | --- |
| values | <code>Array&lt;number&gt;</code> |  |
| [tolerance] | <code>number</code> | <p>Default = 0</p> |

**Example**
```js
valuesAreSimilar([10.2, 10.3, 10.5], 0.5) // ==> true
```
**Example**
```js
valuesAreSimilar([10, 13, 12], 1) // ==> false
```
<a name="factorial
Get the factorial of the given number
(Recursive function)"></a>

## factorial
Get the factorial of the given number (recursively).

(n) ⇒ <code>number</code>

| Param | Type |
| --- | --- |
| n | <code>number</code> |

**Example**
```js
factorial(5) // ==> 120 = 5! = 5 * 4 * 3 * 2 * 1
```
<a name="naturalNumbersSummation
Get the summation of the first N natural numbers
Thanks to Carl Friedrich Gauss we dont need to use a recursive function"></a>

## naturalNumbersSummation
Get the summation of the first N natural numbers
Thanks to Carl Friedrich Gauss we don't need to use a recursive function.

(n) ⇒ <code>number</code>

| Param | Type |
| --- | --- |
| n | <code>number</code> |

**Example**
```js
naturalNumbersSummation(5) // ==> 15 = 5 + 4 + 3 + 2 + 1
```
<a name="getQuadraticBezierCurveLength
Get the length of a quadratic bezier curve passing through 3 points, and then rounds it"></a>

## getQuadraticBezierCurveLength
Get the length of a quadratic bezier curve passing through 3 points, and then rounds it.

(x1, y1, x2, y2, x3, y3, [decimals]) ⇒ <code>number</code>

| Param | Type | Description |
| --- | --- | --- |
| x1 | <code>number</code> | First point X coord |
| y1 | <code>number</code> | First point Y coord |
| x2 | <code>number</code> | Second point X coord |
| y2 | <code>number</code> | Second point Y coord |
| x3 | <code>number</code> | Third point X coord |
| y3 | <code>number</code> | Third point Y coord |
| [decimals] | <code>number</code> | <p>Default defaultDecimalDigits</p> |

<a name="getQuadraticBezierValueAtTime
Get the quadratic bezier value at the given time t"></a>

## getQuadraticBezierValueAtTime
Get the quadratic bezier value at the given time t.

(t, p1, p2, p3) ⇒ <code>number</code>

| Param | Type | Description |
| --- | --- | --- |
| t | <code>number</code> | "time" of the bezier curve [0...1]
| p1 | <code>number</code> | First bezier curve point (X or Y)
| p2 | <code>number</code> | Second bezier curve point (X or Y)
| p3 | <code>number</code> | Third bezier curve point (X or Y)

<a name="getQuadraticBezierCurvePointAtTime
Get the length of a quadratic bezier curve passing through 3 points, and then rounds it"></a>

## getQuadraticBezierCurvePointAtTime
Get the length of a quadratic bezier curve passing through 3 points, and then rounds it.

(t, x1, y1, x2, y2, x3, y3, [decimals]) ⇒ <code>Array&lt;number&gt;</code> - Array of [x, y] coords at time "t"

| Param | Type | Description |
| --- | --- | --- |
| t | <code>number</code> | "time" of the bezier curve [0...1]  |
| x1 | <code>number</code> | First point X coord |
| y1 | <code>number</code> | First point Y coord |
| x2 | <code>number</code> | Second point X coord |
| y2 | <code>number</code> | Second point Y coord |
| x3 | <code>number</code> | Third point X coord |
| y3 | <code>number</code> | Third point Y coord |
| [decimals] | <code>number</code> | <p>Default defaultDecimalDigits</p> |

<a name="convertAngleRadiansToDegrees
Converts radians to degrees"></a>

## convertAngleRadiansToDegrees
Converts radians to degrees.

(radians) ⇒ <code>number</code>

| Param | Type | Description |
| --- | --- | --- |
| radians | <code>number</code> | Between 0 and 2 * Math.PI

**Example**
```js
convertAngleRadiansToDegrees(Math.PI) // ==> 180
```
<a name="convertAngleDegreesToRadians
Converts degrees to radians"></a>

## convertAngleDegreesToRadians
Converts degrees to radians.

(degrees) ⇒ <code>number</code>

| Param | Type |
| --- | --- |
| degrees | <code>number</code> |

**Example**
```js
convertAngleDegreesToRadians(180) // ==> 3.141592653589793
```
<a name="getDistanceBetweenTwoPoints
Get the distance between two points coords (on a Cartesian plane px system), and then rounds it"></a>

## getDistanceBetweenTwoPoints
Get the distance between two points coords (on a Cartesian plane px system), and then rounds it.

(x1, y1, x2, y2, [decimals]) ⇒ <code>number</code>

| Param | Type | Description |
| --- | --- | --- |
| x1 | <code>number</code> | First point X coord |
| y1 | <code>number</code> | First point Y coord |
| x2 | <code>number</code> | Second point X coord |
| y2 | <code>number</code> | Second point Y coord |
| [decimals] | <code>number</code> | <p>Default defaultDecimalDigits</p> |

**Example**
```js
getDistanceBetweenTwoPoints(1, 1, 5, 5, 4) // ==> 5.6569
```
<a name="getDistanceBetweenThreePoints
Get the distance between three points coords (on a Cartesian plane px system), and then rounds it"></a>

## getDistanceBetweenThreePoints
Get the distance between three points coords (on a Cartesian plane px system), and then rounds it.

(x1, y1, x2, y2, x3, y3, [decimals]) ⇒ <code>number</code>

| Param | Type | Description |
| --- | --- | --- |
| x1 | <code>number</code> | First point X coord |
| y1 | <code>number</code> | First point Y coord |
| x2 | <code>number</code> | Second point X coord |
| y2 | <code>number</code> | Second point Y coord |
| x3 | <code>number</code> | Third point X coord |
| y3 | <code>number</code> | Third point Y coord |
| [decimals] | <code>number</code> | <p>Defalut defaultDecimalDigits</p> |

**Example**
```js
getDistanceBetweenThreePoints(1, 1, 5, 5, 8, 6, 4) // ==> 8.8192
```
<a name="distanceBetweenTwoPointsGreaterThan
Tells if the distance between two points is greater than a certain amount (on a Cartesian plane px system)"></a>

## distanceBetweenTwoPointsGreaterThan
Tells if the distance between two points is greater than a certain amount (on a Cartesian plane px system).

(x1, y1, x2, y2, distance) ⇒ <code>boolean</code>

| Param | Type | Description |
| --- | --- | --- |
| x1 | <code>number</code> | First point X coord |
| y1 | <code>number</code> | First point Y coord |
| x2 | <code>number</code> | Second point X coord |
| y2 | <code>number</code> | Second point Y coord |
| distance | <code>number</code> | The distance value to compare |

**Example**
```js
distanceBetweenTwoPointsGreaterThan(1, 1, 5, 5, 5) // ==> true because distance between [1, 1] and [5, 5] is 5.6569
```
<a name="getAngleDegreesBetweenTwoPoints
Get the angle (in degree) of the line passing through two points (on a Cartesian plane px system)"></a>

## getAngleDegreesBetweenTwoPoints
Get the angle (in degree) of the line passing through two points (on a Cartesian plane px system).

(x1, y1, x2, y2) ⇒ <code>number</code>

| Param | Type | Description |
| --- | --- | --- |
| x1 | <code>number</code> | First point X coord |
| y1 | <code>number</code> | First point Y coord |
| x2 | <code>number</code> | Second point X coord |
| y2 | <code>number</code> | Second point Y coord |

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
Get the angle (in radians) of the line passing through two points (on a Cartesian plane px system).

(x1, y1, x2, y2) ⇒ <code>number</code>

| Param | Type | Description |
| --- | --- | --- |
| x1 | <code>number</code> | First point X coord |
| y1 | <code>number</code> | First point Y coord |
| x2 | <code>number</code> | Second point X coord |
| y2 | <code>number</code> | Second point Y coord |

**Example**
```js
getAngleRadiansBetweenTwoPoints(1, 1, 2, 2) // ==> 0.7853981633974483
```
**Example**
```js
getAngleRadiansBetweenTwoPoints(1, 1, 3, -1) // ==> 5.497787143782138
```
<a name="rotateCoords
Rotate a points coords by a specific radians angle (on a Cartesian plane px system)"></a>

## rotateCoords
Rotate a points coords by a specific radians angle (on a Cartesian plane px system).

(x, y, angleRadians, [decimals]) ⇒ <code>Array.&lt;number&gt;</code> - Array with [x, y] rotated coords

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | X coord to rotate |
| y | <code>number</code> | Y coord to rotate |
| angleRadians | <code>number</code> | Angle to rotate |
| [decimals] | <code>number</code> | <p>Default defaultDecimalDigits</p> |

**Example**
```js
rotateCoords(1, 1, Math.PI) // ==> [ -1, -1 ]
```
**Example**
```js
rotateCoords(1, 1, Math.PI / 2) // ==> [ 1, -1 ]
```
<a name="translateCoords
Translate a points coords by a specific amount (on a Cartesian plane px system)"></a>

## translateCoords
Translate a points coords by a specific amount (on a Cartesian plane px system).

(x, y, dx, dy) ⇒ <code>Array.&lt;number&gt;</code> - Array with [x, y] translated coords

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | X coord to translate |
| y | <code>number</code> | Y coord to translate |
| dx | <code>number</code> | Delta X |
| dy | <code>number</code> | Delta Y |

**Example**
```js
translateCoords(1, 1, 3, -4) // ==> [ 4, -3]
```
<a name="getMiddlePointCoords
Get the middle points coords between the two given points (on a Cartesian plane px system)"></a>

## getMiddlePointCoords
Get the middle points coords between the two given points (on a Cartesian plane px system).

(x1, y1, x2, y2, [decimals]) ⇒ <code>Array.&lt;number&gt;</code> - Array with [x, y] middle point's coords

| Param | Type | Description |
| --- | --- | --- |
| x1 | <code>number</code> | First point X coord |
| y1 | <code>number</code> | First point Y coord |
| x2 | <code>number</code> | Second point X coord |
| y2 | <code>number</code> | Second point Y coord |
| [decimals] | <code>number</code> | <p>Default defaultDecimalDigits</p> |

**Example**
```js
getMiddlePointCoords(1, 1, 3, 3) // ==> [ 2, 2 ]
```
<a name="getSlopeCoefficientBetweenTwoPoints
Get the slope coefficient of the line passing through two given points (on a Cartesian plane px system)"></a>

## getSlopeCoefficientBetweenTwoPoints
Get the slope coefficient of the line passing through two given points (on a Cartesian plane px system).

(x1, y1, x2, y2) ⇒ <code>number</code>

| Param | Type | Description |
| --- | --- | --- |
| x1 | <code>number</code> | First point X coord |
| y1 | <code>number</code> | First point Y coord |
| x2 | <code>number</code> | Second point X coord |
| y2 | <code>number</code> | Second point Y coord |

<a name="getLineFunctionBetweenTwoPoints
Get the cartesian function of the line passing through two given points (on a Cartesian plane px system)"></a>

## getLineFunctionBetweenTwoPoints
Get the cartesian function of the line passing through two given points (on a Cartesian plane px system).

(x1, y1, x2, y2) ⇒ <code>function(x: number): number</code>

| Param | Type | Description |
| --- | --- | --- |
| x1 | <code>number</code> | First point X coord |
| y1 | <code>number</code> | First point Y coord |
| x2 | <code>number</code> | Second point X coord |
| y2 | <code>number</code> | Second point Y coord |

<a name="getPerpendicularLineFunctionPassingByPoint
Get the cartesian function of the perpendicular line passing through one given point (on a Cartesian plane px system)"></a>

## getPerpendicularLineFunctionPassingByPoint
Get the cartesian function of the perpendicular line passing through one given point (on a Cartesian plane px system)(slope, x1, y1) ⇒ <code>function(x: number): number</code>

| Param | Type | Description |
| --- | --- | --- |
| slope | <code>number</code> | Slope of the line |
| x1 | <code>number</code> | X of the point inside the line |
| y1 | <code>number</code> | Y of the point inside the line |

<a name="getIntersectionBetween4Points
Get the coords of the intersection point between two lines (on a Cartesian plane px system)"></a>

## getIntersectionBetween4Points
Get the coords of the intersection point between two lines (on a Cartesian plane px system).

(x1, y1, x2, y2, x3, y3, x4, y4, [decimals]) ⇒ <code>Array&lt;number&gt;</code> - Array with [x, y] coords

| Param | Type | Description |
| --- | --- | --- |
| x1 | <code>number</code> | First point X coord |
| y1 | <code>number</code> | First point Y coord |
| x2 | <code>number</code> | Second point X coord |
| y2 | <code>number</code> | Second point Y coord |
| x3 | <code>number</code> | Third point X coord |
| y3 | <code>number</code> | Third point Y coord |
| x4 | <code>number</code> | Fourth point X coord |
| y4 | <code>number</code> | Fourth point Y coord |
| [decimals] | <code>number</code> | <p>Default defaultDecimalDigits</p> |

<a name="getPointProjectionOnLine
Get the coords of the perpendicular projection of the given point on the given live (on a Cartesian plane px system)"></a>

## getPointProjectionOnLine
Get the coords of the perpendicular projection of the given point on the given live (on a Cartesian plane px system).

(x1, y1, x2, y2, x3, y3) ⇒ <code>Array.&lt;number&gt;</code> - Array with [x, y] coords

| Param | Type | Description |
| --- | --- | --- |
| x1 | <code>number</code> | First point X coord |
| y1 | <code>number</code> | First point Y coord |
| x2 | <code>number</code> | Second point X coord |
| y2 | <code>number</code> | Second point Y coord |
| x3 | <code>number</code> | Third point X coord |
| y3 | <code>number</code> | Third point Y coord |
