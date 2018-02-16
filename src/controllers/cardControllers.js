const model = require('../models/projects')

const getAllProjectCards = ((req, res) => {
  model.getAllProjectCards()
    .then((cards) => res.json(cards))
})

module.exports = {getAllProjectCards}
