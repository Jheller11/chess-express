const mongoose = require('../db/connection')

const proSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  bio: {
    born: {
      type: String
    },
    died: {
      type: String
    },
    nationality: {
      type: String
    },
    worldChampion: {
      type: Boolean
    },
    shortBio: {
      type: String
    }
  },
  image: {
    type: String
  }
})

const Pro = mongoose.model('Pro', proSchema)

module.exports = Pro
