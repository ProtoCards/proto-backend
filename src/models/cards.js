const db = require('../../mongoConfig').getDB
const ObjectId = require('mongodb').ObjectId;

const getAllProjectCards = (projectId) => {
  console.log(projectId)
  return db().collection('cards').find({projectId: projectId}).toArray()
    .then((err, results) => {
      console.log(results)
      if (err) return err
      return results
    })
}

const createCard = (params) => {
  return db().collection('cards').insertOne(params)
  .then((card) => {
    return card.ops[0]
  })
}

const updateCard = (cardId, params) => {
  console.log(cardId)
  console.log(params)
  return db().collection('cards').findOneAndUpdate(
    {_id: ObjectId(cardId)},
    {$set: params},
    {returnOriginal: false})
  .then((card) => {
    console.log(card)
    return card.value
  })
  .catch((error) => console.log(error))
}

const deleteCard = (cardId) => {
  return db().collection('cards').findOneAndDelete({"_id": ObjectId(cardId)})
  .then((result) => {
    return result.value
  })
}

module.exports = {getAllProjectCards, createCard, updateCard, deleteCard}
