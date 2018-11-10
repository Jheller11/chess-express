const express = require('express')
const router = express.Router()
const Opening = require('../models/Opening')
const Chess = require('chess.js').Chess

// games show
router.get('/:id', (req, res) => {
  Opening.findOne({ _id: req.params.id })
    .then(opening => {
      let board = generateBoard()
      res.render('openings/show', { opening: opening, board: board })
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

const generateBoard = () => {
  let chess = new Chess()
  var str = chess.ascii()

  var ascii = str.split('').map(itm => {
    return itm.charCodeAt(0)
  })

  let board = []

  ascii.forEach(code => {
    switch (String.fromCharCode(code)) {
      case '.':
        board.push(String.fromCharCode(code))
        break
      case 'p':
        board.push(String.fromCharCode(code))
        break
      case 'P':
        board.push(String.fromCharCode(code))
        break
      case 'r':
        board.push(String.fromCharCode(code))
        break
      case 'R':
        board.push(String.fromCharCode(code))
        break
      case 'n':
        board.push(String.fromCharCode(code))
        break
      case 'N':
        board.push(String.fromCharCode(code))
        break
      case 'b':
        board.push(String.fromCharCode(code))
        break
      case 'B':
        board.push(String.fromCharCode(code))
        break
      case 'q':
        board.push(String.fromCharCode(code))
        break
      case 'Q':
        board.push(String.fromCharCode(code))
        break
      case 'k':
        board.push(String.fromCharCode(code))
        break
      case 'K':
        board.push(String.fromCharCode(code))
        break
      default:
        break
    }
  })

  return board
}
