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
  },
  // generate board array
  generateBoard: chess => {
    let str = chess.ascii()
    let ascii = str.split('').map(itm => {
      return itm.charCodeAt(0)
    })
    let board = [[], [], [], [], [], [], [], [], []]
    let active = 0

    ascii.forEach(code => {
      if (board[active].length % 8 === 0 && board[active].length > 0) {
        active += 1
      }
      switch (String.fromCharCode(code)) {
        case '.':
          board[active].push({})
          break
        case 'p':
          board[active].push({ piece: 'pawn', color: 'black' })
          break
        case 'P':
          board[active].push({ piece: 'pawn', color: 'white' })
          break
        case 'r':
          board[active].push({ piece: 'rook', color: 'black' })
          break
        case 'R':
          board[active].push({ piece: 'rook', color: 'white' })
          break
        case 'n':
          board[active].push({ piece: 'knight', color: 'black' })
          break
        case 'N':
          board[active].push({ piece: 'knight', color: 'white' })
          break
        case 'b':
          board[active].push({ piece: 'bishop', color: 'black' })
          break
        case 'B':
          board[active].push({ piece: 'bishop', color: 'white' })
          break
        case 'q':
          board[active].push({ piece: 'queen', color: 'black' })
          break
        case 'Q':
          board[active].push({ piece: 'queen', color: 'white' })
          break
        case 'k':
          board[active].push({ piece: 'king', color: 'black' })
          break
        case 'K':
          board[active].push({ piece: 'king', color: 'white' })
          break
        default:
          break
      }
    })
    board.pop()
    return board
  }
}

module.exports = utilities
