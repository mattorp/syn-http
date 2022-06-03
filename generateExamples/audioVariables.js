import {
  synAudioVariables
} from '../src/synAudioVariables.js'
import { VALUES } from '../src/urls.js'

synAudioVariables.forEach(variable => {
  console.log(
      `http://${VALUES}/${variable}`
  )
})
