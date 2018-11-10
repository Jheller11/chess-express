const Pro = require('../models/Pro')
const mongoose = require('./connection')
const seeds = require('./proSeeds.json')

Pro.deleteMany({})
  .then(() => {
    Pro.insertMany(seeds).then(() => {
      console.log('DB seeded (db/seed.js)')
      mongoose.connection.close()
    })
  })
  .catch(err => {
    console.log(err)
  })
