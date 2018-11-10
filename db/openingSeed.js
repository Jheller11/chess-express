const Opening = require('../models/Opening')
const mongoose = require('./connection')
const seeds = require('./openingSeeds.json')

Opening.deleteMany({})
  .then(() => {
    Opening.insertMany(seeds).then(() => {
      console.log('DB seeded with openings.')
      mongoose.connection.close()
    })
  })
  .catch(err => {
    console.log(err)
  })
