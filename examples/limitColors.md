# Limit Colors

You can save a script file like the following:

```shell
LOW_COLOR='rgb(0,255,0)'
HIGH_COLOR='rgb(0,255,255)'

HOST=localhost
PORT=6001
URL=http://$HOST:$PORT/controls

curl $URL/limit_colors/1.0
curl $URL/low_color/$LOW_COLOR
curl $URL/high_color/$HIGH_COLOR
```

This lets you set the colors to a specific value, and switch between color presets without duplicating the preset for each color vibe.
