const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  chessDotCom: {
    username: {
      type: String
    }
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User
