const db = require('../../mongoConfig').getDB
const model = require('../models/projects')

function getAllProjects (req, res) {
  model.getAllProjects()
    .then((projects) => res.json(projects))
}

module.exports = {getAllProjects}
