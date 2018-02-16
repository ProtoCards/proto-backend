const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongo = require('./mongoConfig')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

mongo.connectDB(async (err) => {
  if (err) throw error
  const listener = () => console.log(`Listening on port ${port}`);
  app.listen(port, listener)
})

app.get('/', (req, res) => {
  res.send("You made it!")
})

const router = require('./src/routes/routes')
app.use('/projects', router)




module.exports = app
