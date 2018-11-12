// required packages
const express = require('express')
const app = express()
const override = require('method-override')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const path = require('path')
const helmet = require('helmet')
const passport = require('passport')
const flash = require('connect-flash')
const session = require('express-session')
// required packages

// routers
const prosRouter = require('./controllers/pros')
const gamesRouter = require('./controllers/games')
const usersRouter = require('./controllers/users')
const openingsRouter = require('./controllers/openings')
// routers

// middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(override('_method'))
app.use(cookieParser())
app.use(express.static('public'))
app.use(helmet())
// middleware

// passport
app.use(session({ secret: 'ruylopez' }))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
// passport

// view engine (Pug)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
// view engine

// custom middleware
app.use((req, res, next) => {
  res.locals.user = req.user
  res.locals.title = 'Chess'
  console.log(req.body)
  next()
})
// custom middleware

// config paths to routers
app.use('/pros', prosRouter)
app.use('/games', gamesRouter)
app.use('/users', usersRouter)
app.use('/openings', openingsRouter)
// config paths to routers

// home route
app.get('/', (req, res) => {
  res.render('home')
})
// home route

// resource not found
app.get('*', (req, res) => {
  res.render('404')
})
// resource not found

// config port
app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () =>
  console.log('server running on ' + app.get('port'))
)
// config port

module.exports = app
