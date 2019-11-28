# cohort-websocket-client
A barebones WebSocket client for Cohort to facilitate testing

## Getting started
- clone the repo
- `npm install`

## Usage
This tiny node app mimics a Cohort client (device) connecting to an occasion to receive cues.

From the command line:
`node app.js --occasion [occasion ID]`

By default, the app connects to a Cohort server running locally. You can override this by specifying an 'env' flag:
`node app.js --occasion 3 --env staging`

