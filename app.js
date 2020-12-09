const express = require('express')
const app = express()
const path = require('path')

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

if (process.env.NODE_ENV === 'development') {
  app.use('/', express.static(path.join(__dirname, 'client', 'public')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'))
  })
}

const PORT = 5000

app.listen(PORT, () => console.log('Server has started on port ' + PORT))