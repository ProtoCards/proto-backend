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

const createProject = (params) => {
  return db().collection('projects').insertOne(params)
  .then((project) => {
    return project.ops[0]
  })
}

module.exports = {getAllProjects, getProject, createProject}
