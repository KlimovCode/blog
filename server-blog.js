const path = require('path')
const express = require('express')
const app = express()

const PORT = 5000


app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`)
);