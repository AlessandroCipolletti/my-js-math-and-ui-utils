
interface RgbaColorObject {
  r: number,
  g: number,
  b: number,
  a: number,
}


const pixelCompare = (
  i: number,
  targetColor: RgbaColorObject,
  bucketData: Uint8ClampedArray,
  bucketDataLength: number,
  tolerance: number,
): boolean => {

  if (i < 0 || i >= bucketDataLength) return false //out of bounds

  return (
    (targetColor.a > 0 || Math.abs(targetColor.a - bucketData[i + 3]) <= tolerance) &&
    Math.abs(targetColor.r - bucketData[i]) <= tolerance &&
    Math.abs(targetColor.g - bucketData[i + 1]) <= tolerance &&
    Math.abs(targetColor.b - bucketData[i + 2]) <= tolerance
  )
}


const pixelCompareAndSet = (
  i: number,
  targetColor: RgbaColorObject,
  fillColor: RgbaColorObject,
  bucketData: Uint8ClampedArray,
  bucketDataLength: number,
  tolerance: number,
  boundariesWeekMode: boolean,
): boolean => {

  const res = pixelCompare(i, targetColor, bucketData, bucketDataLength, tolerance)

  if (res || boundariesWeekMode) {
    // fill the pixel
    bucketData[i + 0] = fillColor.r
    bucketData[i + 1] = fillColor.g
    bucketData[i + 2] = fillColor.b
    bucketData[i + 3] = fillColor.a || bucketData[i + 3]
  }

  return res
}


self.addEventListener('message', (event: MessageEvent) => {
  const id = event.data.id as string
  const bucketData = event.data.bucketData as Uint8ClampedArray
  const fillColor = event.data.fillColor as RgbaColorObject
  const targetColor = event.data.targetColor as RgbaColorObject
  const onePxLineArrayLength = event.data.onePxLineArrayLength as number
  const tolerance = event.data.tolerance as number
  const boundariesWeekMode = event.data.boundariesWeekMode as boolean
  let i = event.data.i as number

  const bucketDataLength = bucketData.length
  const pixelsQueue = []

  pixelsQueue.push(i)
  while (pixelsQueue.length) {
    i = pixelsQueue.pop() as number
    if (pixelCompareAndSet(i, targetColor, fillColor, bucketData, bucketDataLength, tolerance, boundariesWeekMode)) {
      let leftIndex: number = i
      let rightIndex: number = i
      const marginLeft: number = Math.trunc(i / onePxLineArrayLength) * onePxLineArrayLength  // left bound
      const marginRight: number = marginLeft + onePxLineArrayLength  // right bound

      while ( // fill to the left until edge hit
        marginLeft < rightIndex &&
        marginLeft < (rightIndex -= 4) &&
        pixelCompareAndSet(rightIndex, targetColor, fillColor, bucketData, bucketDataLength, tolerance, boundariesWeekMode)
      );

      while ( // fill to the right until edge hit
        marginRight > leftIndex &&
        marginRight > (leftIndex += 4) &&
        pixelCompareAndSet(leftIndex, targetColor, fillColor, bucketData, bucketDataLength, tolerance, boundariesWeekMode)
      );

      for (let j = rightIndex; j < leftIndex; j += 4) {
        if (j - onePxLineArrayLength >= 0 && (pixelCompare(j - onePxLineArrayLength, targetColor, bucketData, bucketDataLength, tolerance) || boundariesWeekMode)) {
          pixelsQueue.push(j - onePxLineArrayLength) //queue y-1
        }
        if (j + onePxLineArrayLength < bucketDataLength && (pixelCompare(j + onePxLineArrayLength, targetColor, bucketData, bucketDataLength, tolerance) || boundariesWeekMode)) {
          pixelsQueue.push(j + onePxLineArrayLength) //queue y+1
        }
      }
    }
  }

  self.postMessage({ id, bucketData })
})
