const HTTP_PORT = process.env.HTTP_PORT || 6001
const SYN_HOST = process.env.SYN_HOST || '127.0.0.1'

export const listenDetails = `HTTP Server is listening on port ${HTTP_PORT}

To set a control value, use something like this:
CONTROL=brightness
VALUE=0.5
curl http://${SYN_HOST}:${HTTP_PORT}/controls/$CONTROL/$VALUE

To get a value, use something like this:
VARIABLE=syn_Presence
curl http://${SYN_HOST}:${HTTP_PORT}/values/$VARIABLE

To change scenes, use something like this:
SCENE=AlienCavern
curl http://${SYN_HOST}:${HTTP_PORT}/scenes/$SCENE
`
