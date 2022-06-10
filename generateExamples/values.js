import {
  synvalues
} from '../src/synvalues.js'
import { VALUES } from '../src/urls.js'

synvalues.forEach(variable => {
  console.log(
      `http://${VALUES}/${variable}`
  )
})
