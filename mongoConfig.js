require('dotenv').config();
const MongoClient = require('mongodb').MongoClient
const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds023550.mlab.com:23550/protocards`

let _db

const connectDB = async (callback) => {
  try {
    MongoClient.connect(uri, (err, client) => {
      _db = client.db('protocards')
      return callback(err)
    })
  } catch (e) {
    throw e
  }
}

const getDB = () => {
  console.log(_db)
  return _db
}

const disconnectDB = () => _db.close()

module.exports = {connectDB, getDB, disconnectDB}
