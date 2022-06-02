export const logInfo = (info) => process.env.LOG_INFO && console.log(info)

export const logWarnings = (warn) => process.env.LOG_WARNINGS && console.log(warn)
