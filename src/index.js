
import dotenv from 'dotenv'
import {
  getAddress, getMsgValue, getValue, getVariant, httpServer, oscClient, oscServer, sendMessage, storeValues
} from './osc/index.js'

dotenv.config()

let lastFetched = Date.now()
let warnedAboutFetch = false

httpServer.on('request', async (req, res) => {
  try {
    const [, ...msg] = decodeURI(req.url).split('/')
    const address = getAddress(msg)
    const msgValue = getMsgValue(msg)
    res.statusCode = 200
    if (getVariant(msg) === 'values') {
      res.end(getValue({ msgValue, res }))
      return
    } else {
      await sendMessage(oscClient)(address, msgValue)
      res.end('OK')
      return
    }
  } catch (err) {
    console.error(err)
    res.statusCode = 500
    res.end(err.message)
  }
})

oscServer
  .on('bundle', (bundle) => {
    storeValues(bundle)
    lastFetched = Date.now()
    if (warnedAboutFetch) {
      warnedAboutFetch = false
      console.log('\nOSC has been reactivated')
    }
  })

setInterval(() => {
  if (lastFetched < Date.now() - 2000 &&
    !warnedAboutFetch) {
    warnedAboutFetch = true
    console.error('Values are not being received. Check if Synesthesia is running and OSC output is enabled.')
  }
}, 2000)
