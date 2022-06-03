import fs from 'fs'
import * as urls from '../src/urls.js'

const envFile = fs.readFileSync('./.env', 'utf8')
const env = envFile.split('\n')
  .filter(line => line.length > 0)
  .map(line => line.split('='))
  .reduce((acc, [key, value]) => {
    acc[key] = value
    return acc
  }
  , {})

const vars = { ...env, ...urls }

const lines = Object.entries(vars).map(([key, value]) => `${key}=${value}`)

fs.writeFileSync('./.env.export', lines.join('\n'))
