const db = require('../../mongoConfig').getDB

function getAllProjects (req, res) {
  console.log("in the controller")
  db().collection('projects').find().toArray((err, results) => {
    res.json(results)
  })
}

module.exports = {getAllProjects}
