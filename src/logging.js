export const logInfo = (info) => process.env.LOG_INFO && console.log(info)

export const logWarning = (warn) => process.env.LOG_WARNINGS && console.log(warn)
