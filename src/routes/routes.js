const express = require('express')
const router = express.Router()
const projectCtrl = require('../controllers/projectControllers')

router.get('/projects', projectCtrl.getAllProjects)

module.exports = router
