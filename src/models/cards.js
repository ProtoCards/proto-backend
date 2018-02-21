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
  return db().collection('cards').replaceOne(
    {_id: cardId},
    params
  )
  .then((card) => {
    return card.ops[0]
  })
  .catch((error) => console.log(error))
}

const deleteCard = (cardId) => {
  return db().collection('cards').deleteOne({"_id": ObjectId(cardId)})
  .then((result) => {
    return result.result.n
  })
}

module.exports = {getAllProjectCards, createCard, updateCard, deleteCard}
