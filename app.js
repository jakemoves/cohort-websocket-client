const WebSocket = require('ws')
const uuid = require('uuid/v4')

const client = new WebSocket('ws://localhost:3000')

client.addEventListener('open', () => {
  console.log('connection open')
  client.send(JSON.stringify({ "guid": "" + uuid()}))
})

client.addEventListener('message', (msg) => {
  console.log(msg.data)
})

client.addEventListener('close', () => {
  console.log('connection closed')
})

client.addEventListener('error', (err) => {
  console.log(err)
})