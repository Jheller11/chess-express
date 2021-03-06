const mongoose = require('../db/connection')
const bcrypt = require('bcrypt-nodejs')

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
  },
  games: {
    type: Array,
    default: []
  },
  admin: {
    type: Boolean,
    default: false
  }
})

userSchema.methods.generateHash = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

userSchema.methods.validPassword = (password, user) => {
  return bcrypt.compareSync(password, user.password)
}

const User = mongoose.model('User', userSchema)

module.exports = User
