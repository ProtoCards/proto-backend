const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongo = require('./mongoConfig')
const cors = require('cors')
const graphqlHTTP = require('express-graphql');

const app = express()
const port = process.env.PORT || 3001

app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

mongo.connectDB(async (err) => {
  if (err) {
    throw err
  } else {
    const listener = () => console.log(`Listening on port ${port}`);
    app.listen(port, listener)
  }
})

const schema = require('./src/graphql/schema')
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

module.exports = app
