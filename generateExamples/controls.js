const metaControls = ['invert',
  'brightness',
  'gamma',
  'contrast',
  'hue',
  'saturation',
  'vert_mirror',
  'hor_mirror',
  'invert_media',
  'fit_or_fill',
  'media_contrast',
  'paused',
  'playback_speed',
  'reactivity',
  'audio_speed',
  'limit_colors',
  'transition'
]

metaControls.forEach(control => {
  console.log(
      `http://localhost:6001/controls/${control}/1.0`
  )
})

const colors = ['low_color', 'high_color']

colors.forEach((color, i) => {
  console.log(
      `http://localhost:6001/controls/${color}/${encodeURI([i, i, i].join(' '))}.`
  )
})

const sceneControls = [
  'slider',
  'bang',
  'toggle',
  'knob',
  'dropdown'
]

sceneControls.forEach(control => {
  console.log(
      `http://localhost:6001/controls/scene-${control}-0/1.0`
  )
})

console.log('http://localhost:6001/controls/scene-xy-0/1.0%200.0')
