const mongoose = require('../db/connection')

const proSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  bio: {
    born: {
      type: String,
      required: true
    },
    died: {
      type: String,
      required: true
    },
    nationality: {
      type: String,
      required: true
    },
    worldChampion: {
      type: Boolean,
      required: true
    },
    shortBio: {
      type: String,
      required: true
    }
  },
  image: {
    type: String
  }
})

const Pro = mongoose.model('Pro', proSchema)

module.exports = Pro
