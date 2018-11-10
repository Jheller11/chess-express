const express = require('express')
const router = express.Router()
const Opening = require('../models/Opening')
const Chess = require('chess.js').Chess

// games show
router.get('/:id', (req, res) => {
  Opening.findOne({ _id: req.params.id })
    .then(opening => {
      const chess = new Chess()
      res.render('openings/show', { opening: opening, chess: chess })
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

let chess = new Chess()
var str = chess.ascii()
var ascii = str.split('').map(itm => {
  return itm.charCodeAt(0)
})
var str2 = ascii
  .map((itm, i) => {
    return (
      '#' + i + '=0x' + itm.toString(16) + ' (' + String.fromCharCode(itm) + ')'
    )
  })
  .join('\n')

console.log('original string=' + str + '\nascii codes:\n' + str2)
