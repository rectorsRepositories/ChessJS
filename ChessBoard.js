class ChessBoard {
  constructor() {
    this.chessBoard = [[], [], [], [], [], [], [], []];
    this.rankWidth = 50;
    this.fileHeight = 50;
  }

  drawChessBoard() {
    let cellSize = (width - 50) / 8;
    //draw background squares
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        if ((row + col) % 2 === 0) {
          fill("#efeaea"); // light square
        } else {
          fill("#000103"); // dark square
        }
        noStroke();
        square(col * cellSize + 50, row * cellSize, cellSize);
      }
    }
    //draw rank and file
  }
  initChessBoardArr() {
    let cellSize = (width - 50) / 8;
    let middleCellCoordOffset = cellSize / 2;
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        let newSquare = new BoardSquare((col * cellSize) + middleCellCoordOffset, (row * cellSize) + middleCellCoordOffset, "", "");
        this.chessBoard[row].push(newSquare);
      }
    }
    console.log(this.chessBoard);
  }
}
