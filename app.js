const WebSocket = require('ws')
var argv = require('minimist')(process.argv.slice(2));

// const client = new WebSocket('https://cohort.rocks/sockets') // production 
const client = new WebSocket('http://localhost:3000/sockets') // development

const args = process.argv.slice(2)

const guid = argv.guid

client.addEventListener('open', () => {
  console.log('connection open')
  client.send(JSON.stringify({ "guid": guid, "eventId": 3}))
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
