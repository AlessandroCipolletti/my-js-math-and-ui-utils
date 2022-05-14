# js-math-and-ui-utils

Typescript library with all those utils I often use in my projects.

It includes Math, Dom, Canvas, UI, Animations, Colors, Image, and generic javascript utils.
Each one with its own module and documentation.

## Getting Started
### Installing
```
npm i --save js-math-and-ui-utils
```
### Importing
You can import the whole library, just one module, as well as each method one by one.
this allows you to keep the javascript bundle as small as possible.
```
import { * as Utils } from 'js-math-and-ui-utils'
Utils.roundNumber(myNumberVar, requiredDecimals)

import { * as MathUtils } from 'js-math-and-ui-utils/mathUtils'
MathUtils.roundNumber(myNumberVar, requiredDecimals)

import roundNumber from 'js-math-and-ui-utils/mathUtils/roundNumber'
roundNumber(myNumberVar, requiredDecimals)
```

## Modules
Check the docs for each module:

* [MathUtils](https://github.com/AlessandroCipolletti/js-math-and-ui-utils/tree/master/docs/mathUtils.md)
* [DomUtils](https://github.com/AlessandroCipolletti/js-math-and-ui-utils/tree/master/docs/domUtils.md)
* [CanvasUtils](https://github.com/AlessandroCipolletti/js-math-and-ui-utils/tree/master/docs/canvasUtils.md)
* [UiUtils](https://github.com/AlessandroCipolletti/js-math-and-ui-utils/tree/master/docs/uiUtils.md)
* [AnimationsUtils](https://github.com/AlessandroCipolletti/js-math-and-ui-utils/tree/master/docs/animationsUtils.md)
* [ColorsUtils](https://github.com/AlessandroCipolletti/js-math-and-ui-utils/tree/master/docs/colorsUtils.md)
* [ImageUtils](https://github.com/AlessandroCipolletti/js-math-and-ui-utils/tree/master/docs/imageUtils.md)
* [JsUtils](https://github.com/AlessandroCipolletti/js-math-and-ui-utils/tree/master/docs/jsUtils.md)


## Authors

**Alessandro Cipolletti**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
