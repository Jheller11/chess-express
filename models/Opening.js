const mongoose = require('../db/connection')

const openingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  intro: {
    type: String
  },
  resources: {
    type: Array,
    default: []
  }
})

const Opening = mongoose.model('Opening', openingSchema)

module.exports = Opening
