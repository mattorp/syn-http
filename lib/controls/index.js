export const SCENE_CONTROLS_COUNT = 8

const arr = new Array(SCENE_CONTROLS_COUNT).fill(0)
export const allSceneControls = [
  'slider',
  'bang',
  'toggle',
  'knob',
  'dropdown',
  'xy'
].map(c => arr.map((_, i) => `scene-${c}-${i}`)).flat()
