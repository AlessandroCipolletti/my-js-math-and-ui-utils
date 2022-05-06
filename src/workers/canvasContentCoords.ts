
self.addEventListener('message', (event: MessageEvent) => {
  const id: string = event.data.id
  const imageData: Uint8ClampedArray = event.data.imageData
  const width: number = event.data.width
  const height: number = event.data.height
  const pxPrecision: number = event.data.pxPrecision
  const alphaTolerance: number = event.data.alphaTolerance

  let minX = Infinity
  let minY = Infinity
  let maxX = -Infinity
  let maxY = -Infinity

  for (let x = 0; x < width; x += pxPrecision) {
    for (let y = 0; y < height; y += pxPrecision) {
      if (imageData[(((y * width) + x) * 4) + 3] > alphaTolerance) {
        minX = Math.min(minX, x)
        minY = Math.min(minY, y)
        maxX = Math.max(maxX, x + 1)
        maxY = Math.max(maxY, y + 1)
      }
    }
  }

  // maxX++
  // maxY++

  self.postMessage({ id, minX, minY, maxX, maxY })
})
