import {
  synAudioVariables
} from '../src/synAudioVariables.js'

synAudioVariables.forEach(variable => {
  console.log(
      `http://localhost:6001/values/${variable}`
  )
})
