function getAllProjects (req, res, next) {
  console.log("in the controller")
  db.collection('projects').find().toArray((err, results) => {
    res.json(results)
  })
}

module.exports = {getAllProjects}
