const db = require('../../mongoConfig').getDB

const getAllProjects = () => {
  return db().collection('projects').find().toArray()
    .then((err, results) => {
      if (err) return err
      return results
    })
}

module.exports = {getAllProjects}
