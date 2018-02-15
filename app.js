const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(bodyParser.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send("You made it!")
})

const listener = () => console.log(`Listening on port ${port}`);
app.listen(port, listener)

module.exports = app
