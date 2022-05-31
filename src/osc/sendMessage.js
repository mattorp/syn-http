export const sendMessage = oscClient => async (address, value) => {
  const promise = new Promise((resolve, reject) => {
    try {
      oscClient.send(address, value,
        (err) => {
          if (err) {
            console.error(err)
            reject(err)
          } else {
            process.env.LOG && console.log(`
Sent message
${address}
${value}`)
            resolve()
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
