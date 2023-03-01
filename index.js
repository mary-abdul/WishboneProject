const express = require('express')
const app = express()
const fs = require('fs')

let data = []
fs.readFile(
  './data.json',
  (err, res) => {
    data = JSON.parse(res).notes
  }
)

app.use(express.json())
app.get("/api/data", (req, res) => {
  res.json(data)
})

app.post("/api/data", (req, res) => {
  let vote = req.body.vote;
  let user = req.body.user;

  // logic updating data w/ vote if user hasn't voted
  
  fs.writeFile(
    './data.json',
    JSON.stringify({notes: data}, null, 2))
  res.json(data)
})

app.listen(3000)
