const db = require('../../mongoConfig').getDB
const ObjectId = require('mongodb').ObjectId;

const getAllProjectCards = (projectId) => {
  return db().collection('cards').find({projectId: projectId}).toArray()
    .then((err, results) => {
      if (err) return err
      return results
    })
}

const getCard = (id) => {
  return db().collection('cards').findOne({"_id": ObjectId(id)})
    .then((err, results) => {
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

const createManyCards = (params) => {
  return db().collection('cards').insertMany(params)
    .then((cards) => {
      return cards.ops
    })
}
const updateCard = (cardId, params) => {
  return db().collection('cards').findOneAndUpdate(
    {_id: ObjectId(cardId)},
    {$set: params},
    {returnOriginal: false})
  .then((card) => {
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

module.exports = {getAllProjectCards, getCard, createCard, createManyCards, updateCard, deleteCard}
