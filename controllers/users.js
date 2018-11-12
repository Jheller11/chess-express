const express = require('express')
const router = express.Router()
const User = require('../models/User')
const passport = require('passport')
require('../config/passport')(passport)

// user login route
router.post(
  '/login',
  passport.authenticate('local-login', {
    successRedirect: '/users/profile',
    failureRedirect: '/users/login',
    failureFlash: true
  })
)

// user signup route
router.post(
  '/signup',
  passport.authenticate('local-signup', {
    successRedirect: '/users/profile',
    failureRedirect: '/users/signup',
    failureFlash: true
  })
)

// user logout route
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

// user login page
router.get('/login', (req, res) => {
  res.render('users/login', { message: req.flash('loginMessage') })
})

// user signup page
router.get('/signup', (req, res) => {
  res.render('users/signup', { message: req.flash('signupMessage') })
})

// user profile page
router.get('/profile', (req, res) => {
  res.render('users/profile')
})

module.exports = router
