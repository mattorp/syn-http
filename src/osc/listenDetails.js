const HTTP_PORT = process.env.HTTP_PORT
const SYN_HOST = process.env.SYN_HOST

export const listenDetails = `HTTP Server is listening on port ${HTTP_PORT}

You can disable logging to optimize performance by setting the environment variables: LOG_INFO and LOG_WARNINGS to false.

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
