// general code to be used in multiple other files

const utilities = {
  // verify current user is admin
  isAdminUser: (req, res, next) => {
    if (req.isAuthenticated() && req.user.admin) return next()
    else {
      res.redirect('/error', {
        error: 'Please log in to an admin account to access this page.'
      })
    }
  },
  // verify current user is logged in
  isLoggedIn: (req, res, next) => {
    if (req.isAuthenticated()) return next()
    else {
      res.redirect('/error', {
        error: 'You must be logged in to access this page.'
      })
    }
  }
}

module.exports = utilities
