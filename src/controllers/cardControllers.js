const model = require('../models/cards')

const getAllProjectCards = ((req, res) => {
  model.getAllProjectCards(req.params.projectId)
    .then((cards) => res.json(cards))
})

const createCard = ((req, res) => {
  console.log(req.body)
  console.log(req.params)
  model.createCard(req.params.projectId, req.body)
    .then((card) => res.json(card))
})

const updateCard = ((req, res) => {
  model.updateCard(req.params.cardId, req.body)
    .then((card) => res.json(card))
})

const deleteCard = ((req, res) => {
  model.deleteCard(req.params.cardId)
    .then((result) => res.json(card))
})
module.exports = {getAllProjectCards, createCard, updateCard, deleteCard}
