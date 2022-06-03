import { SCENES } from '../src/urls.js'
const scenes = [
  'AlienCavern'
]

scenes.forEach(scene => {
  console.log(
      `http://${SCENES}/${scene}`
  )
})
