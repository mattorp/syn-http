export const getValues = bundle =>
  bundle.elements.reduce((acc, element, i) => {
    const [_control, val] = element || []
      .address.split('.')
    if (_control) {
      const control = _control.slice(1)
      return { ...acc, [control]: val }
    } else {
      return acc
    }
  },

  {})
