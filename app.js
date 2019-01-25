const WebSocket = require('ws')
var argv = require('minimist')(process.argv.slice(2));

const args = process.argv.slice(2)

const guid = argv.guid
const eventId = argv.event
const env = argv.env || 'dev'

var client
if(env == 'dev'){
  client = new WebSocket('http://localhost:3000/sockets') // development
} else if(env == 'prod'){
  client = new WebSocket('https://cohort.rocks/sockets') // production 
}

client.addEventListener('open', () => {
  console.log('connection open')
  client.send(JSON.stringify({ "guid": "" + guid, "eventId": eventId}))
})

client.addEventListener('message', (msg) => {
  console.log(msg.data)
})

client.addEventListener('close', (msg) => {
  console.log('connection closed with error ' + msg.code + ': ' + msg.reason)
})

client.addEventListener('error', (err) => {
  console.log(err)
})
