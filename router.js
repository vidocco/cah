const router = require('express').Router()

const cardController = require('./controllers/card.controller')

router
  .get('/cards', cardController.getCards)
  .get('/cards/:id', () => {})
  .get('/cards/random', () => {})

module.exports = router
