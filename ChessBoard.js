class ChessBoard {
  constructor() {
    this.chessBoard = [[], [], [], [], [], [], [], []];
  }

  drawChessBoard() {
    let rankWidth = width / 10;
    let cellSize = (width - rankWidth) / 8;
    //draw background squares
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        if ((row + col) % 2 === 0) {
          fill("#efeaea"); // light square
        } else {
          fill("#000103"); // dark square
        }
        noStroke();
        square(col * cellSize + rankWidth, row * cellSize, cellSize);
        fill("red");
        circle(
          col * cellSize + cellSize / 2 + rankWidth,
          row * cellSize + cellSize / 2,
          30
        );
        textAlign(CENTER);
        fill("yellow");
        textSize(60);
        text(
          "\u2654",
          col * cellSize + cellSize / 2 + rankWidth,
          row * cellSize + cellSize / 2 + cellSize / 3
        );
      }
    }
    noFill();
    //draw rank
    for (let i = 0; i <= 8; i++) {
      if (i < 8) {
        stroke("#000103");
        fill("yellow");
        rect(0, cellSize * i, rankWidth, cellSize);
        fill("purple");
        textSize(rankWidth / 2);
        text(i + 1, rankWidth / 2, cellSize * i + cellSize / 2);
      }
    }
    //draw file
    for (let i = 0; i <= 8; i++) {
      
    }
  }
  initChessBoardArr() {
    let rankWidth = width / 10;
    let cellSize = (width - rankWidth) / 8;
    let middleCellCoordOffsetX = cellSize / 2 + rankWidth;
    let middleCellCoordOffsetY = cellSize / 2;
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        let squareMiddleX = col * cellSize + middleCellCoordOffsetX;
        let squareMiddleY = row * cellSize + middleCellCoordOffsetY;
        let newSquare = new BoardSquare(squareMiddleX, squareMiddleY);
        this.chessBoard[row].push(newSquare);
      }
    }
    console.log(this.chessBoard);
  }
  drawFillWhitePieces() {}
  drawFillBlackPieces() {}
}
