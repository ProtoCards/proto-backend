const db = require('../../mongoConfig').getDB
const ObjectId = require('mongodb').ObjectId;

const getAllProjectCards = (projectId) => {
  return db().collection('cards').find({"projectId": projectId}).toArray()
    .then((err, results) => {
      if (err) return err
      return results
    })
}

const createCard = (projectId, params) => {
  console.log(params)
  return db().collection('cards').insertOne({
    "projectId": projectId,
    "quantity": params.quantity,
    "properties": params.properties
  })
  .then((card) => {
    return card.ops[0]
  })
}

module.exports = {getAllProjectCards, createCard}
