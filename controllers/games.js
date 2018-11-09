const express = require('express')
const router = express.Router()
const Game = require('../models/Game')

// games show
router.get('/:id', (req, res) => {
  Game.findOne({ _id: req.params.id })
    .then(game => {
      res.render('games/show', { game: game })
    })
    .catch(err => {
      res.render('error', { error: err })
    })
})

// games index
router.get('/', (req, res) => {
  Game.find({})
    .then(games => {
      res.render('games/index', { games: games })
    })
    .catch(err => {
      res.render('error', { error: err })
    })
})

module.exports = router
