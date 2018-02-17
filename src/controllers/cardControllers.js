const model = require('../models/cards')

const getAllProjectCards = ((req, res) => {
  model.getAllProjectCards(req.params.projectId)
    .then((cards) => res.json(cards))
})

module.exports = {getAllProjectCards}
