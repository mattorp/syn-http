import {
  logInfo
} from '../logging.js'

const noValueFound = values => (control) => `
${Object.keys(values).join('\n')}

No value for control: ${control}

See valid controls above
`

let storedValues = {}

export const storeValues = bundle => {
  storedValues = bundle.elements.reduce((acc, element, i) => {
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
}

export const getValue = ({ variable, res }) => {
  const value = storedValues[variable]
  logInfo(`Got value of\n${variable}${value}\n`)
  return value === undefined ? noValueFound(storedValues)(variable) : JSON.stringify(value)
}
