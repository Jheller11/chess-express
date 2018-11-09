const express = require('express')
const router = express.Router()
const Pro = require('../models/Pro')

// show page for signle pro
router.get('/:id', (req, res) => {
  Pro.findOne({ _id: req.params.id })
    .then(pro => {
      res.render('pros/show', { pro: pro })
    })
    .catch(err => {
      res.render('error', { error: err })
    })
})

// return all pros
router.get('/', (req, res) => {
  Pro.find({})
    .then(pros => {
      res.render('pros/index', { pros: pros })
    })
    .catch(err => {
      res.render('error', { error: err })
    })
})

module.exports = router
