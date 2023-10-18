export const formatLogMessage = (message, data) => {
  let result = ''

  if (
    typeof message === 'object' &&
    !Array.isArray(message) &&
    message !== null
  )
    {result = Object.keys(message).map((k) => `${k}:${message[k]}`).join('; ')}
   else if (typeof(message) === 'string')
    {result = message}


  if (
    data &&
    typeof data === 'object' &&
    !Array.isArray(data)
  )
    {result = `${result} ${Object.keys(data).map((k) => `${k}:${data[k]}`).join('; ')}`}


  return result
}

export const getCurrentDateString = () => new Date().toISOString().slice(0, 10)
