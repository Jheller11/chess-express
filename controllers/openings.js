const express = require('express')
const router = express.Router()
const Opening = require('../models/Opening')

// games show
router.get('/:id', (req, res) => {
  Opening.findOne({ _id: req.params.id })
    .then(opening => {
      res.render('openings/show', { opening: opening })
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
