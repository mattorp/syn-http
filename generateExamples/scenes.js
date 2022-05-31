const scenes = [
  'AlienCavern'
]

scenes.forEach(scene => {
  console.log(
      `curl http://localhost:6001/scenes/${scene}`
  )
})
