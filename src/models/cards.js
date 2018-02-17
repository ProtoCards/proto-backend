const db = require('../../mongoConfig').getDB
const ObjectId = require('mongodb').ObjectId;

const getAllProjectCards = (projectId) => {
  return db().collection('cards').find({"projectId": projectId}).toArray()
    .then((err, results) => {
      if (err) return err
      return results
    })
}

module.exports = {getAllProjectCards}
