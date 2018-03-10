require('dotenv').config();
const MongoClient = require('mongodb').MongoClient
let env = process.env.NODE_ENV
// let uri
// if (env === 'dev') {
//   // uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds023550.mlab.com:23550/protocards`
// } else if (env === 'test') {
//   // uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds119486.mlab.com:19486/protocards-test`
// }
const uri = "mongodb://localhost:27017/protocards-local"
dbName = 'protocards-local'

let _db

const connectDB = async (callback) => {
  try {
    MongoClient.connect(uri, (err, client) => {
      _db = client.db(dbName)
      console.log(_db)
      _db.createCollection('cards', function(err, collection) {});
      _db.createCollection('projects', function(err, collection) {});
      _db.collection('cards').insertOne({projectId: "5aa42bee2aec9e210ea1c06b", quantity: 3, properties: [{name: "title", fieldId: "h", content: "a title here"}]})
        .then((card) => {
          return
        })
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
