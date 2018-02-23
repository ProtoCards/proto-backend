const db = require('../../mongoConfig').getDB
const ObjectId = require('mongodb').ObjectId;

const getAllProjects = () => {
  return db().collection('projects').find().toArray()
    .then((err, results) => {
      if (err) return err
      return results
    })
}

const getProject = (id) => {
  return db().collection('projects').findOne({"_id": ObjectId(id)})
    .then((project) => project)
}

module.exports = {getAllProjects, getProject}
