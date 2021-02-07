const express = require('express')

const app = express()

port = process.env.PORT || 8080

app.use('/', (req, res) => {
  res.sendFile('payload.js', {root: __dirname})
})

app.listen(port, () => {
  console.log('Listening on port 3000')
})