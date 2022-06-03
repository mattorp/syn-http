import http from 'http'
import { Client, Server } from 'node-osc'
import { listenDetails } from './index.js'
export const oscServer = new Server(
  process.env.OUTPUT_PORT || 7000, process.env.SYN_HOST)
export const oscClient = new Client(process.env.SYN_HOST, process.env.INPUT_PORT || 6000)
export const httpServer = http.createServer()

httpServer.listen(5999, () => {
  console.log(listenDetails)
})

httpServer.on('error', (err) => {
  console.error('HTTP Server error:', err)
})

httpServer.on('close', () => {
  oscClient.close()
  console.log('HTTP Server closed')
  console.log('OSC Client closed')
})
