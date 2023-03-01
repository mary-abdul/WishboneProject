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

app.use(express.static('build'))

app.use(express.json())
app.get("/api/data", (req, res) => {
  const date = new Date().toISOString().substring(0, 10)
  res.json(data.find(data => data.id === date))
})

app.post("/api/data", (req, res) => {
  // req is the request from the user, req.body is what they send
  // the frontend app send a simple object: { vote: # }
  // # is 0 or 1
  const body = req.body
  console.log(body)

  // the user's vote
  const vote = body.vote
  // today's date
  const date = new Date().toISOString().substring(0, 10)
  // find the data for today
  const dat = data.find(data => data.id === date)
  
  if(vote === 0) {
     dat.voting1++
  } else if(vote === 1) {
     dat.voting2++
  } else {
    console.log("oh no")
  }
  
  // we update the json file--this doesn't actually do much because we can't overwrite our json file on github
  fs.writeFile(
    './data.json',
    JSON.stringify(data, null, 2),
    (err) => {console.log(err)})

  // and this sends today's updated data to the user
  res.json(dat)
})

const PORT = process.env.PORT || 3000
app.listen(PORT)
