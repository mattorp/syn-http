export const logInfo = (info) => !process.env.LOG_INFO === 'info' && console.info(info)

export const logWarnings = (warn) => !process.env.LOG_WARNINGS === 'warn' && console.warn(warn)
