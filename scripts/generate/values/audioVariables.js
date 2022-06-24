import fs from 'fs'
import { getValues } from '../../../src/osc/index.js'
import { oscServer } from '../../../src/osc/servers.js'

oscServer
  .on('bundle', (bundle) => {
    const values = getValues(bundle)
    const keys = Object.keys(values)
    if (keys.length > 0) {
      fs.writeFileSync('../../../src/audioVariables.js', `export const audioVariables = ${JSON.stringify(keys)}`)
      oscServer.close()
      process.exit()
    }
  })

setInterval(() => {
  console.log('Waiting for values...\nMake sure Synesthesia is running and OSC output is enabled.')
}, 2000)
