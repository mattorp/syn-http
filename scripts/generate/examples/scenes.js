import fs from 'fs'
import { SCENES } from '../../../src/urls.js'
const scenes = [
  'AlienCavern'
]

const dir = 'tmp'
const filepath = `${dir}/scenes.md`

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir)
}

const str = scenes.map(scene => `${SCENES}/${scene}`).join('\n')

fs.writeFile(filepath,
  str, (err) => {
    if (err) {
      throw err
    }
  }
)

console.log(`\nsaved to ${process.cwd()}/${filepath}`)
