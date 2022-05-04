
self.addEventListener('message', async(event: MessageEvent) => {
  const { id, url } = event.data

  const response = await fetch(url)
  const blob = await response.blob()

  // Send the image data to the UI thread
  self.postMessage({ id, blob })
})
