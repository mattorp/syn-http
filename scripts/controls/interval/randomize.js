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

randomizeAtInterval(allSceneControls, process.argv[2] || 1000)
