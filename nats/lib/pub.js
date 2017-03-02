var nats = require('nats').connect()

nats.on('error', function (e) {
  console.log('Error [' + nats.options.url + ']: ' + e)
  process.exit()
})

var milliseconds = process.argv[2]

if (!milliseconds) {
  console.log('Usage: node-pub <milliseconds>')
  process.exit()
}

var i = 0

function publish () {
  i++
  nats.publish('FOO', i.toString(), function () {
    console.log('Published [' + subject + '] : "' + msg + '"')
    setTimeout(publish, milliseconds)
  })
}
