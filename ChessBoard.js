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
      this.chessBoard[6][j].setTeamColor("white");
    }
    // add white king in this.chessBoard
    this.chessBoard[7][4].setOccupiedPiece(this.chessPieces.king.white);
     this.chessBoard[7][4].setTeamColor("white")
    // add white queen in this.chessBoard
    this.chessBoard[7][3].setOccupiedPiece(this.chessPieces.queen.white);
    this.chessBoard[7][3].setTeamColor("white")
    // add white rooks in this.chessBoard
    this.chessBoard[7][0].setOccupiedPiece(this.chessPieces.rook.white);
    this.chessBoard[7][0].setTeamColor("white")
    this.chessBoard[7][7].setOccupiedPiece(this.chessPieces.rook.white);
    this.chessBoard[7][7].setTeamColor("white")
    // add white knights in this.chessBoard
    this.chessBoard[7][1].setOccupiedPiece(this.chessPieces.knight.white);
    this.chessBoard[7][1].setTeamColor("white")
    this.chessBoard[7][6].setOccupiedPiece(this.chessPieces.knight.white);
    this.chessBoard[7][6].setTeamColor("white")
    // add white bishops in this.chessBoard
    this.chessBoard[7][2].setOccupiedPiece(this.chessPieces.bishop.white);
    this.chessBoard[7][2].setTeamColor("white")
    this.chessBoard[7][5].setOccupiedPiece(this.chessPieces.bishop.white);
    this.chessBoard[7][5].setTeamColor("white")
  }
  fillBlackPieces() {
    //fill black pawns in this.chessBoard
    for (let j = 0; j < this.chessBoard[1].length; j++) {
      this.chessBoard[1][j].setOccupiedPiece(this.chessPieces.pawn.black);
    }
    // add black king in this.chessBoard
    this.chessBoard[0][4].setOccupiedPiece(this.chessPieces.king.black);
    // add black queen in this.chessBoard
    this.chessBoard[0][3].setOccupiedPiece(this.chessPieces.queen.black);
    // add black rooks in this.chessBoard
    this.chessBoard[0][0].setOccupiedPiece(this.chessPieces.rook.black);
    this.chessBoard[0][7].setOccupiedPiece(this.chessPieces.rook.black);
    // add black knights in this.chessBoard
    this.chessBoard[0][1].setOccupiedPiece(this.chessPieces.knight.black);
    this.chessBoard[0][6].setOccupiedPiece(this.chessPieces.knight.black);
    // add black bishops in this.chessBoard
    this.chessBoard[0][2].setOccupiedPiece(this.chessPieces.bishop.black);
    this.chessBoard[0][5].setOccupiedPiece(this.chessPieces.bishop.black);
  }
  drawPiecesToBoard() {
    //iterate through board
    for (let i = 0; i < this.chessBoard.length; i++) {
      for (let j = 0; j < this.chessBoard[i].length; j++) {
        let boardPiece = this.chessBoard[i][j];
        //check if a piece on the square
        if (boardPiece.getOccupiedPiece) {
          //check piece color to fill
          if (boardPiece.getTeamColor() == "white") {
            fill("red");
          } else {
            fill("blue");
          }
          //draw piece on screen
          text(
            boardPiece.getOccupiedPiece,
            boardPiece.getSquareCanvasPosX,
            boardPiece.getSquareCanvasPosY
          );
          noFill();
        }
      }
    }
  }
}
