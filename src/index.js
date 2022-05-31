
import {
  getValues, httpServer, noValueFound, oscClient, oscServer, sendMessage,
  validateRequest
} from './osc/index.js'

const send = sendMessage(oscClient)

let lastFetched = Date.now()
let values = {}

httpServer.on('request', async (req, res) => {
  const { url } = req
  const [, variant, control, valueStr] = decodeURI(url).split('/')
  if (variant === 'scenes') {
    const scene = control
    send('/scenes', scene)
    res.end('OK')
  } else if (variant === 'controls') {
    const values = valueStr.split(' ')
    const value =
      values.map(val => parseFloat(val)
      )

    validateRequest(res, {
      value
    })

    try {
      const msg = await send(`/controls/${control}`, value)
      res.statusCode = 200
      res.end(msg)
    } catch (err) {
      res.statusCode = 500
      res.end(err)
    }
  } else if (variant === 'values') {
    const value = values[control]
    process.env.LOG && console.log(`${control}
${value}
`)
    res.end(
      value
        ? JSON.stringify(value)
        : noValueFound(values)(control))
  }
})

oscServer
  .on('bundle', function (bundle) {
    values = getValues(bundle)
    lastFetched = Date.now()
  })

const throwIfNotConnected = () => {
  throw new Error('No new values. Check if Synesthesia is running and OSC output is enabled.')
}

setTimeout(() => {
  if (Object.keys(values).length === 0) {
    throwIfNotConnected()
  }
}, 100)

setInterval(() => {
  if (lastFetched < Date.now() - 2000) {
    throwIfNotConnected()
  }
}, 2000)
