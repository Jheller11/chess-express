const express = require('express')
const router = express.Router()
const Opening = require('../models/Opening')
const Chess = require('chess.js').Chess
const generateBoard = require('../config/utilities').generateBoard
const isAdminUser = require('../config/utilities').isAdminUser

// create new opening
router.post('/new', isAdminUser, (req, res) => {
  Opening.create({
    name: req.body.name,
    intro: req.body.into,
    moves: req.body.moves.split(', '),
    resources: req.body.resources
  })
    .then(opening => {
      res.redirect(`/openings/${opening.id}`)
    })
    .catch(err => {
      res.render('error', { error: err })
    })
})

// show new form
router.get('/new', isAdminUser, (req, res) => {
  res.render('openings/new.pug')
})

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
