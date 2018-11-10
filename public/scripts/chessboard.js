const div = document.querySelector('.chessboard')

class ChessBoard {
  constructor(element, pieces) {
    this.element = element
    this.pieces = pieces
  }

  render() {
    for (let i = 0; i < 8; i++) {
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

let myBoard = new ChessBoard(div, board)
myBoard.render()
