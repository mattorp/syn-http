import dotenv from 'dotenv'
dotenv.config()

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.HTTP_PORT || 5999

export const CONTROLS = `http://${HOST}:${PORT}/controls`
export const VALUES = `http://${HOST}:${PORT}/values`
export const SCENES = `http://${HOST}:${PORT}/scenes`
