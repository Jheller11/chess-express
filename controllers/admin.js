const express = require('express')
const router = express.Router()

// get admin dashboard
router.get('/dashboard', (req, res) => {
  res.render('admin/dashboard.pug')
})

module.exports = router
