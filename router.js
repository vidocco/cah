const router = require('express').Router()

router
  .get('/cards', () => {})
  .get('/cards/:id', () => {})
  .get('/cards/random', () => {})

module.exports = router
