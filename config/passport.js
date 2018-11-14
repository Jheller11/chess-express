const LocalStrategy = require('passport-local').Strategy

const User = require('../models/User')

module.exports = passport => {
  passport.serializeUser((user, done) => {
    console.log('serial')
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    console.log('deserial')
    User.findById(id, (err, user) => {
      done(err, user)
    })
  })

  passport.use(
    'local-signup',
    new LocalStrategy(
      {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
      },
      (req, username, password, done) => {
        process.nextTick(() => {
          User.findOne({ username: username }, (err, user) => {
            if (err) return done(err)
            if (user) {
              return done(
                null,
                false,
                req.flash(
                  'signupMessage',
                  'That username is already taken. Please try again.'
                )
              )
            }
            if (!username || !password) {
              return done(
                null,
                false,
                req.flash(
                  'signupMessage',
                  'Username and Password fields are required. Please try again.'
                )
              )
            } else {
              var newUser = new User()
              newUser.username = username
              newUser.password = newUser.generateHash(password)
              newUser.chessDotCom.username = req.body.chessDotCom
              newUser.admin = false
              console.log(newUser)
              newUser.save(err => {
                if (err) throw err
                return done(null, newUser)
              })
            }
          })
        })
      }
    )
  )
  passport.use(
    'local-login',
    new LocalStrategy(
      {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
      },
      (req, username, password, done) => {
        User.findOne({ username: username }, (err, user) => {
          if (err) {
            console.log(err)
            return done(err)
          }
          if (!user) {
            console.log('user not found')
            return done(
              null,
              false,
              req.flash('loginMessage', 'User not found. Please try again.')
            )
          }
          if (!user.validPassword(password, user)) {
            console.log('inval password')
            return done(
              null,
              false,
              req.flash('loginMessage', 'Password is not correct.')
            )
          }
          return done(null, user)
        })
      }
    )
  )
}
