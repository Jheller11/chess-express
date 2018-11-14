const express = require('express')
const router = express.Router()
const User = require('../models/User')
const isAdminUser = require('../config/utilities').isAdminUser

// get admin dashboard
router.get('/dashboard', isAdminUser, (req, res) => {
  User.find({})
    .then(users => {
      res.render('admin/dashboard.pug', { users: users })
    })
    .catch(err => {
      res.render('error.pug', { error: err })
    })
})

module.exports = router
