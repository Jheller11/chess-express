const express = require('express')
const router = express.Router()
const User = require('../models/User')

// verify user is admin for making changes
const isAdminUser = (req, res, next) => {
  if (req.isAuthenticated() && req.user.admin) return next()
  else {
    res.redirect('/error', {
      error: 'Please log in to an admin account to access this page.'
    })
  }
}

// get admin dashboard
router.get('/dashboard', isAdminUser, (req, res) => {
  User.find({}).then(users => {
    res.render('admin/dashboard.pug', { users: users })
  })
})

// verify current user exists
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/trips')
}

module.exports = router
