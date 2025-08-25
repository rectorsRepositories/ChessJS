class ChessBoard {
  constructor() {
    this.chessBoard = [[], [], [], [], [], [], [], []];
    this.chessPieces = {
      king: { black: "\u265A", white: "\u2654" },
      queen: { black: "\u265B", white: "\u2655" },
      rook: { black: "\u265C", white: "\u2656" },
      bishop: { black: "\u265D", white: "\u2657" },
      knight: { black: "\u265E", white: "\u2658" },
      pawn: { black: "\u265F", white: "\u2659" },
    };
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
        // fill("red");
        // circle(
        //   col * cellSize + cellSize / 2 + rankWidth,
        //   row * cellSize + cellSize / 2,
        //   30
        // );
        // textAlign(CENTER);
        // fill("yellow");
        // textSize(60);
        // text(
        //   "\u2654",
        //   col * cellSize + cellSize / 2 + rankWidth,
        //   row * cellSize + cellSize / 2 + cellSize / 3
        // );
      }
    }
    noFill();
    textAlign(CENTER);
    //draw rank (up/down)
    for (let i = 0; i <= 8; i++) {
      if (i < 8) {
        fill("purple");
        textSize(rankWidth / 2);
        text(
          i + 1,
          rankWidth / 2,
          cellSize * i + cellSize / 2 + textSize() / 2
        );
        noFill();
      }
    }
    //draw file (left/right)
    for (let i = 0; i < 8; i++) {
      let fileNum = i + 1;
      let fileChar;
      switch (fileNum) {
        case 1:
          fileChar = "A";
          break;
        case 2:
          fileChar = "B";
          break;
        case 3:
          fileChar = "C";
          break;
        case 4:
          fileChar = "D";
          break;
        case 5:
          fileChar = "E";
          break;
        case 6:
          fileChar = "F";
          break;
        case 7:
          fileChar = "G";
          break;
        case 8:
          fileChar = "H";
          break;
        default:
          break;
      }
      fill("purple");
      textSize(rankWidth / 2);
      text(
        fileChar,
        i * cellSize + rankWidth + cellSize / 2,
        cellSize * 8 + cellSize / 2 + textSize() / 4
      );
      noFill();
    }
  }
  initChessBoardArr() {
    textSize(60);
    let rankWidth = width / 10;
    let cellSize = (width - rankWidth) / 8;
    let middleCellCoordOffsetX = cellSize / 2 + rankWidth;
    let middleCellCoordOffsetY = cellSize / 2 + textSize() / 2;
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
  fillWhitePieces() {
    //fill white pawns in this.chessBoard
    for (let j = 0; j < this.chessBoard[6].length; j++) {
      this.chessBoard[6][j].setOccupiedPiece(this.chessPieces.pawn.white);
    }
  }
  fillBlackPieces() {
    //fill black pawns in this.chessBoard
    for (let j = 0; j < this.chessBoard[1].length; j++) {
      this.chessBoard[1][j].setOccupiedPiece(this.chessPieces.pawn.black);
      console.log(this.chessBoard[1][j]);
    }
  }
  drawPiecesToBoard() {
    for (let i = 0; i < this.chessBoard.length; i++) {
      console.log(this.chessBoard[i].length)
      for (let j = 0; j < 8; j++) {
        let boardPiece = this.chessBoard[i][j];
        if (boardPiece.getOccupiedPiece) {
          fill("purple");
          text(
            boardPiece.getOccupiedPiece,
            boardPiece.getSquareCanvasPosX,
            boardPiece.getSquareCanvasPosY
          );
        }
      }
    }
  }
}
