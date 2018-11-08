const mongoose = require('../db/connection')

const gameSchema = new mongoose.Schema({
  white: {
    type: String,
    required: true
  },
  black: {
    type: String,
    required: true
  },
  winner: {
    type: String,
    required: true
  },
  moves: {
    type: Array,
    required: true
  },
  externalResources: {
    type: Array,
    default: []
  },
  introduction: {
    type: String,
    required: true
  },
  year: {
    type: String
  }
})

const Game = mongoose.model('Game', gameSchema)

module.exports = Game
