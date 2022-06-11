import { CONTROLS } from '../../../src/urls.js'

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
      `${CONTROLS}/${control}/1.0`
  )
})

const colors = ['low_color', 'high_color']

colors.forEach((color, i) => {
  console.log(
      `${CONTROLS}/${color}/${[i, i, i].join(',')}`
  )
})

const sceneControls = [
  'slider',
  'bang',
  'toggle',
  'knob',
  'dropdown',
  'xy'
]

sceneControls.forEach(control => {
  console.log(
      `${CONTROLS}/scene-${control}-0/1.0`
  )
})
