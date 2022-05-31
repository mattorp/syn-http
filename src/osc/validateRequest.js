export const validValue = (values) => {
  // if array

  if (Array.isArray(values)) {
    return values.every((value) => {
      if (!isNaN(value)) {
        return value >= 0 && value <= 1
      } else {
        return true
      }
    })
  } else {
    return true
  }
}

export const validateRequest = (res, {
  value,
  variant
}) => {
  const errors = []
  if (!validValue(value)) {
    res.statusCode = 500
    errors.push(`Invalid value: ${JSON.stringify(value)}, please use numbers between 0 and 1`)
  }
  if (errors.length > 0) {
    res.end(errors.join('\n'))
    throw new Error(errors.join('\n'))
  }
}
