import {
  logInfo
} from '../logging.js'
const formatValue = (value) =>
  isNaN(value)
    ? value.replaceAll(',', ' ')
      .split(' ').map((val, i) => isNaN(val) ? val : parseFloat(val))
    : value

const entries = ['r', 'g', 'b']

// TODO clean up
const splitMessages = (address, passedValue) => {
  // convert arrays to 'r g b'
  const value = passedValue[0] === '(' || passedValue[0] === '['
    ? passedValue
      // remove [], () and spaces
      .replace(/[\[\]\(\)\s]/g, '')
    : passedValue

  if (
    address.slice(0, 10) === '/controls/' &&
    value.slice(0, 3) === 'rgb') {
    // Normalize color so that (255, 255, 255) is (1, 1, 1)
    return value.slice(4, -1).split(',').map((val, i) => [address + '/' + entries[i], parseInt(val) / 255])
  } else {
    return value.split(' ').map((val, i, { length }) => [address + (length > 1 ? '/' + entries[i] : ''), val])
  }
}

export const sendMessage = oscClient => async (address, value) => {
  const promise = new Promise((resolve, reject) => {
    try {
      splitMessages(address,
        value.toLowerCase()).forEach(([addr, val]) => {
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
