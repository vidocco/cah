const router = require('express').Router()

const cardController = require('./controllers/card.controller')

router
  .get('/cards', cardController.getCards)
  .get('/cards/random', cardController.getRandom)

module.exports = router
