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
  return db().collection('cards').insertOne({
    "projectId": projectId,
    "quantity": params.quantity,
    "properties": params.properties
  })
  .then((card) => {
    return card.ops[0]
  })
}

const updateCard = (cardId, params) => {
  console.log("in the model method")
  return db().collection('cards').updateOne(
    {_id: cardId},
    {$set: {"quantity": 5}, $currentDate: {lastModified: true}}
  )
  .then((card) => {
    console.log(card)
    return
  })
  .catch((error) => console.log(error))
}

module.exports = {getAllProjectCards, createCard, updateCard}
