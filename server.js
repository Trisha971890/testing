const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('mera bhai raju')
})

app.listen(3000)