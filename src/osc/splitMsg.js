export const getAddress = (msg) => `/${msg.slice(0, -1).join('/')}`
export const getMsgValue = (msg) => msg.slice(-1)[0]
export const getVariant = (msg) => msg[0]
