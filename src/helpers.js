const https = require('https')

const fetchRemoteAudioFile = url => {
  return new Promise((resolve, reject) => {
    https
      .get(url, res => {
        const buffer = []

        res.on('data', chunk => {
          buffer.push(chunk)
        })

        res.on('end', function () {
          resolve(Buffer.concat(buffer))
        })
      })
      .on('error', reject)
  })
}

module.exports = { fetchRemoteAudioFile }
