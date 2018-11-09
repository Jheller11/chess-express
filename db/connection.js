// connect to database and export configured mongoose

const mongoose = require('mongoose')

// determine environment and set db location
if (process.env.NODE_ENV == 'production') {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect(
    'mongodb://localhost/trip-planner',
    { useNewUrlParser: true }
  )
}

mongoose.Promise = Promise

module.exports = mongoose
