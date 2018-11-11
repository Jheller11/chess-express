const div = document.querySelector('.chessboard')

class ChessBoard {
  constructor(element, pieces) {
    this.element = element
    this.pieces = pieces
  }

  render() {
    // i == row
    for (let i = 0; i < 8; i++) {
      // j = column
      for (let j = 0; j < 8; j++) {
        let square = document.createElement('div')
        if ((i + j) % 2 === 0) {
          this.element.appendChild(square)
        } else {
          square.setAttribute(
            'style',
            'background-color: rgba(0, 100, 100, .5)'
          )
          this.element.appendChild(square)
        }
      }
    }
  }
}

// create new board at div class=chessboard, add pieces from server
let myBoard = new ChessBoard(div, pieces)
myBoard.render()
