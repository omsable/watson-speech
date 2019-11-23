const { IamAuthenticator } = require('ibm-watson/auth')
const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1')
const { fetchRemoteAudioFile } = require('./helpers')

const { API_KEY } = process.env

const speechToText = new SpeechToTextV1({
  authenticator: new IamAuthenticator({ apikey: API_KEY }),
  url: 'https://stream.watsonplatform.net/speech-to-text/api'
})

const transcribe = async ({
  url,
  contentType = 'audio/l16; rate=44100',
  model = 'en-US_BroadbandModel',
  speakerLabels = true,
  profanityFilter = false,
  smartFormatting = true,
  timestamps = false,
  audioMetrics = false,
  redaction = false
}) => {
  const file = await fetchRemoteAudioFile(url)
  const params = {
    audio: file,
    contentType,
    model,
    speakerLabels,
    profanityFilter,
    smartFormatting,
    timestamps,
    audioMetrics,
    redaction
  }

  return new Promise((resolve, reject) => {
    speechToText
      .recognize(params)
      .then(resolve)
      .catch(reject)
  })
}

module.exports = { transcribe }
