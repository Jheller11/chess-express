const express = require('express')
const router = express.Router()
const User = require('../models/User')

// user login page
router.get('/login', (req, res) => {
  res.render('users/login')
})

// user signup page
router.get('/signup', (req, res) => {
  res.render('users/signup')
})

// user profile page
router.get('/profile', (req, res) => {
  res.render('users/profile')
})

module.exports = router
