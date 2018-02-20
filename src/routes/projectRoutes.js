const express = require('express')
const router = express.Router()
const projectCtrl = require('../controllers/projectControllers')
const cardCtrl = require('../controllers/cardControllers')

router.get('/', projectCtrl.getAllProjects)
router.get('/:projectId/cards', cardCtrl.getAllProjectCards)
router.post('/:projectId/cards', cardCtrl.createCard)
router.put('/:projectId/cards/:cardId', cardCtrl.updateCard)

module.exports = router
