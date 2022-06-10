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

export const getValue = ({ msgValue, res }) => {
  const value = storedValues[msgValue]
  logInfo(`${msgValue}\n${value}\n`)
  return value === undefined ? noValueFound(storedValues)(msgValue) : JSON.stringify(value)
}
