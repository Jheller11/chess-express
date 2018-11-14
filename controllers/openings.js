const express = require('express')
const router = express.Router()
const Opening = require('../models/Opening')
const Chess = require('chess.js').Chess
const generateBoard = require('../config/utilities').generateBoard

// games show
router.get('/:id', (req, res) => {
  Opening.findOne({ _id: req.params.id })
    .then(opening => {
      let chess = new Chess()
      opening.moves.forEach(move => {
        chess.move(move)
      })
      let piecesArray = generateBoard(chess)
      res.render('openings/show', {
        opening: opening,
        pieces: JSON.stringify(piecesArray)
      })
    })
    .catch(err => {
      res.render('error', { error: err })
    })
})

// openings index
router.get('/', (req, res) => {
  Opening.find({})
    .then(openings => {
      res.render('openings/index', { openings: openings })
    })
    .catch(err => {
      res.render('error', { error: err })
    })
})

module.exports = router
