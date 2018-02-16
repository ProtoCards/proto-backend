const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const expressMongo = require('express-mongo-db')
require('dotenv').config();

const app = express()
const port = process.env.PORT || 3000


app.use(expressMongo(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds023550.mlab.com:23550/protocards`))
app.use(bodyParser.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send("You made it!")
})

app.get('/projects', (req, res) => {
  req.db.collection('projects').find().toArray((err, results) => {
    res.send(results)
  })
})

const listener = () => console.log(`Listening on port ${port}`);
app.listen(port, listener)

module.exports = app
