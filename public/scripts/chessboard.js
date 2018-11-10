const div = document.querySelector('.chessboard')

class ChessBoard {
  constructor(element, pieces) {
    this.element = element
    this.pieces = pieces
  }

  render() {
    for (let i = 0; i < 64; i++) {
      let square = document.createElement('div')
      if (i % 2 === 1) {
        this.element.appendChild(square)
      } else {
        square.setAttribute('style', 'background-color: red')
        this.element.appendChild(square)
      }
    }
  }
}

let myBoard = new ChessBoard(div, board)
myBoard.render()
