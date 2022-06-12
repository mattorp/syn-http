import midi from 'midi'

const input = new midi.Input()

input.on('message', (deltaTime, [status, data1, data2]) => {
  console.log(`status: ${status}`)
  console.log(`data1: ${data1}`)
  console.log(`data2: ${data2}`)
})
input.openPort(0)

// Sysex, timing, and active sensing messages are ignored
// by default. To enable these message types, pass false for
// the appropriate type in the function below.
// Order: (Sysex, Timing, Active Sensing)
// For example if you want to receive only MIDI Clock beats
// you should use
// input.ignoreTypes(true, false, true)
input.ignoreTypes(false, false, false)

setTimeout(function () {
  input.closePort()
}, 100000)
