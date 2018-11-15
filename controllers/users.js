const express = require('express')
const router = express.Router()
const User = require('../models/User')
const passport = require('passport')
require('../config/passport')(passport)
const isLoggedIn = require('../config/utilities').isLoggedIn

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

// add a new game to existing user
router.post('/:id', (req, res) => {
  User.findOne({ _id: req.params.id })
    .then(user => {
      user.games.push(req.body.game)
      user.save()
    })
    .then(() => {
      res.redirect('/users/profile')
    })
    .catch(err => {
      res.redirect('/users/profile', {
        message:
          'There was an error saving the game. Please ensure the PNG is complete.'
      })
    })
})

// delete user route
router.delete('/:id', (req, res) => {
  User.findOneAndDelete({ _id: req.params.id })
    .then(() => {
      res.redirect('/')
    })
    .catch(err => {
      res.render('error', { error: err })
    })
})

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
router.get('/profile', isLoggedIn, (req, res) => {
  res.render('users/profile')
})

module.exports = router
