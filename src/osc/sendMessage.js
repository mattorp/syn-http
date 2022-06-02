import {
  logInfo
} from '../logging.js'
const formatValue = (value) =>
  isNaN(value) ? value : value.split(' ').map((val, i) => parseFloat(val))

const entries = ['x', 'y', 'r']

const splitMessages = (address, value) => value.split(' ').map((val, i, { length }) => [address + (length > 1 ? '/' + entries[i] : ''), val])

export const sendMessage = oscClient => async (address, value) => {
  const promise = new Promise((resolve, reject) => {
    try {
      splitMessages(address, value).forEach(([addr, val]) => {
        oscClient.send(addr, formatValue(val),
          (err) => {
            if (err) {
              console.error(err)
              reject(err)
            } else {
              logInfo(`Sent ${addr} ${val}`)
              resolve('OK')
            }
          }
        )
      }
      )
    } catch (err) {
      console.error(err)
      reject(err)
    }
  }
  )
  return await promise
}
