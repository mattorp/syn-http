
const formatValue = (value) =>
  isNaN(value) ? value : value.split(' ').map(val => parseFloat(val))

export const sendMessage = oscClient => async (address, value) => {
  const promise = new Promise((resolve, reject) => {
    try {
      console.log(formatValue(value))
      oscClient.send(address, formatValue(value),
        (err) => {
          if (err) {
            console.error(err)
            reject(err)
          } else {
            process.env.LOG && console.log(`
Sent message
${address}
${value}`)
            resolve('OK')
          }
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
