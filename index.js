// required packages
const express = require('express')
const app = express()
const override = require('method-override')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
// required packages

// routers
const prosRouter = require('./controllers/pros')

// routers

// middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(override('_method'))
app.use(cookieParser())
app.use(express.static('public'))
// middleware

// view engine (Pug)
app.set('views', './views')
app.set('view engine', 'pug')
// view engine

// custom middleware
app.use((req, res, next) => {
  console.log('Request')
  res.locals.title = 'Chess'
  next()
})
// custom middleware

// config paths to routers
app.use('/pros', prosRouter)
// config paths to routers

// home route
app.get('/', (req, res) => {
  res.render('home')
})
// home route

// config port
app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () =>
  console.log('server running on ' + app.get('port'))
)
// config port
