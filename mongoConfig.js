require('dotenv').config();
const MongoClient = require('mongodb').MongoClient
let env = process.env.NODE_ENV
let uri
let dbName
if (env === 'dev') {
  uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds023550.mlab.com:23550/protocards`
  dbName = 'protocards'
} else if (env === 'test') {
  uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds119486.mlab.com:19486/protocards-test`
  dbName = 'protocards-test'
}

let _db

const connectDB = async (callback) => {
  try {
    MongoClient.connect(uri, (err, client) => {
      _db = client.db(dbName)
      return callback(err)
    })
  } catch (e) {
    throw e
  }
}

const getDB = () => {
  return _db
}

const disconnectDB = () => _db.close()

module.exports = {connectDB, getDB, disconnectDB}
