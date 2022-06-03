import dotenv from 'dotenv'
dotenv.config()

const HOST = process.env.HOST || '127.0.0.1'
const PORT = process.env.HTTP_PORT || '6001'

export const CONTROLS = `http://${HOST}:${PORT}/controls`
export const VALUES = `http://${HOST}:${PORT}/values`
export const SCENES = `http://${HOST}:${PORT}/scenes`
