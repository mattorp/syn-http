
import fs from 'fs'
import { CONTROLS } from '../../../src/urls.js'
const { random, round } = Math

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
  'transition'
]

const colors = ['low_color', 'high_color']

const sceneControls = [
  'slider',
  'bang',
  'toggle',
  'knob',
  'dropdown',
  'xy'
]
const SCENE_CONTROLS_COUNT = 8

const generateRandomControls = (filePath, {
  include
} = {
  include: {
    meta: true,
    colors: false,
    scene: true
  }
}) => {
  if (!include) {
    throw new Error('include is required')
  }
  if (!filePath) {
    throw new Error('filePath is required')
  }
  let str = ''
  if (include.meta) {
    str += '\n' + metaControls.map(control => `curl ${CONTROLS}/${control}/${random()}`).join('\n')
  }
  if (include.colors) {
    str += '\n' + `curl ${CONTROLS}/limit_colors/1\n`
    str += '\n' + colors.map((color, i) => `curl ${CONTROLS}/${color}/${[0, 0, 0].map(() => round(random() * 255)).join(',')}`
    ).join('\n')
  }
  if (include.scene) {
    const arr = new Array(SCENE_CONTROLS_COUNT).fill(0)
    str += '\n' + sceneControls.map(control => arr.map((_, i) => `curl ${CONTROLS}/scene-${control}-${i}/${random()}`).join('\n')
    ).join('\n')
  }
  fs.writeFileSync(filePath, str)
}

const dir = 'tmp'
fs.mkdirSync(dir, { recursive: true })
const fileArr = new Array(10).fill(0).map((_, i) => `${dir}/${i}.sh`)
fileArr.forEach(filePath => generateRandomControls(filePath))

console.log(`\nsaved to ${process.cwd()}/${dir}`)
