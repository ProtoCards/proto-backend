const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongo = require('./mongoConfig')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(morgan('dev'))

let db

mongo.connectDB(async (err) => {
  if (err) throw error
  db = mongo.getDB
  const listener = () => console.log(`Listening on port ${port}`);
  app.listen(port, listener)
})

app.get('/', (req, res) => {
  res.send("You made it!")
})

const router = require('./src/routes/routes')
app.use('/projects', router)
// app.get('/projects', (req, res) => {
//   db().collection('projects').find().toArray((err, results) => {
//     res.send(results)
//   })
// })



module.exports = {app, db}
