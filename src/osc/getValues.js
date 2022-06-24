import {
  logInfo,
  logWarning
} from '../logging.js'

const noValueFound = values => (control) => `
${Object.keys(values).join('\n')}

No value for control: ${control}

See valid controls above
`

let storedValues = {}

export const getValues = bundle => bundle.elements.reduce((acc, element, i) => {
  const [_control, val] = element || []
    .address.split('.')
  if (_control) {
    const control = _control.slice(1).toLowerCase()
    return { ...acc, [control]: val }
  } else {
    return acc
  }
},

{})

export const storeValues = bundle => {
  storedValues = getValues(bundle)
}

export const getValue = ({ variable, res }) => {
  const value = storedValues[variable]
  if (value === undefined) {
    const msg = noValueFound(storedValues)(variable)
    logWarning(msg)
    return msg
  } else {
    logInfo(`Got value of\n${variable}\n${value}\n`)
    return JSON.stringify(value)
  }
}
