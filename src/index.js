const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const { transcribe } = require('./handlers')

const apiTimeout = 10 * 10 * 1000 * 1000
app.use((req, res, next) => {
  // Set the timeout for all HTTP requests
  req.setTimeout(apiTimeout, () => {
    const err = new Error('Request Timeout')
    err.status = 408
    next(err)
  })
  // Set the server response timeout for all HTTP requests
  res.setTimeout(apiTimeout, () => {
    const err = new Error('Service Unavailable')
    err.status = 503
    next(err)
  })
  next()
})

const { PORT = 8080 } = process.env

app.post('/', (req, res) => {
  const {
    url,
    contentType = 'audio/l16; rate=44100',
    model = 'en-US_BroadbandModel',
    speakerLabels = true,
    profanityFilter = false,
    smartFormatting = true,
    timestamps = false,
    audioMetrics = false,
    redaction = false
  } = req.body

  transcribe({
    url,
    contentType,
    model,
    speakerLabels,
    profanityFilter,
    smartFormatting,
    timestamps,
    audioMetrics,
    redaction
  })
    .then(response => {
      res.json(response.result)
    })
    .catch(err => {
      res.status(500).json({ message: err })
    })
})

app.get('/health', (req, res) => res.send('OK'))

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))
