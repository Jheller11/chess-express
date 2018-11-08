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
      console.log(err)
    })
})

// games index
router.get('/', (req, res) => {
  Game.find({})
    .then(games => {
      res.render('games/index', { games: games })
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
