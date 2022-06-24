import fetch from 'node-fetch'
import { allSceneControls } from '../../../lib/controls/index.js'
import { CONTROLS } from '../../../src/urls.js'

const randomize = (controls) => controls.map(control => [control, Math.random()])
const updateControls = (controls) =>
  controls.forEach(([control, value]) =>
    fetch(`${CONTROLS}/${control}/${value}`)
  )

const randomizeAtInterval = (controls, interval) =>
  setInterval(() => updateControls(randomize(controls)), interval)

const controls = allSceneControls
// Other examples:
// const controls = ['scene-slider-0', 'scene-slider-1', 'scene-knob-0']
// const controls = ['scene-bang-0', 'scene-toggle-0', 'scene-dropdown-0']

randomizeAtInterval(controls, process.argv[2] || 1000)
