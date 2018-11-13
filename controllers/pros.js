const express = require('express')
const router = express.Router()
const Pro = require('../models/Pro')

// create new pro
router.post('/new', (req, res) => {
  Pro.create({
    name: req.body.name,
    bio: {
      born: req.body.born,
      died: req.body.died,
      nationality: req.body.nationality,
      worldChampion: req.body.worldChampion,
      shortBio: req.body.shortBio
    },
    image: req.body.image
  })
    .then(pro => {
      res.redirect(`/pros/${pro.id}`)
    })
    .catch(err => {
      res.render('error', { error: err })
    })
})

// show new form
router.get('/new', (req, res) => {
  res.render('pros/new.pug')
})

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
