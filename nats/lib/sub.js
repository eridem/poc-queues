var nats = require('nats').connect()

nats.on('error', function (e) {
  console.log('Error [' + nats.options.url + ']: ' + e)
  process.exit()
})

nats.on('close', function () {
  console.log('CLOSED')
  process.exit()
})

nats.subscribe('FOO', function (msg) {
  console.log('Received "' + msg + '"')
})
