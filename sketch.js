const canvasElement = document.getElementById("canvas-element");
const chessBoard = new ChessBoard();
let whiteTurn = true;
let pieceClicked = false;
let potentialPieceToMove = "";

function setup() {
  createCanvas(800, 800, canvasElement);
  background(220);
  chessBoard.initChessBoardArr();

  chessBoard.fillWhitePieces();
  chessBoard.fillBlackPieces();
}
function mousePressed() {
  //upon mouse press check distance to closest square
  let selectedPiece;
  let maxCursorDistance = 40;
  for (let i = 0; i < chessBoard.chessBoard.length; i++) {
    for (let j = 0; j < chessBoard.chessBoard[i].length; j++) {
      selectedPiece = chessBoard.chessBoard[i][j];
      let cursorDistanceX = Math.abs(
        mouseX - selectedPiece.getSquareCanvasPosX
      );
      let cursorDistanceY = Math.abs(
        mouseY - selectedPiece.getSquareCanvasPosY
      );
      let cursorDistanceTot = cursorDistanceX + cursorDistanceY;
      if (cursorDistanceTot <= maxCursorDistance) {
        if (selectedPiece.getOccupiedPiece) {
          pieceClicked = selectedPiece;
        }
        console.log(selectedPiece);
      }
    }
  }
  console.log("pressed");
}
function mouseReleased() {
  let maxCursorDistance = 40;
  let chessSquare
  for (let i = 0; i < chessBoard.chessBoard.length; i++) {
    for (let j = 0; j < chessBoard.chessBoard[i].length; j++) {
      chessSquare = chessBoard.chessBoard[i][j];
      let cursorDistanceX = Math.abs(mouseX - chessSquare.getSquareCanvasPosX);
      let cursorDistanceY = Math.abs(mouseY - chessSquare.getSquareCanvasPosY);
      let cursorDistanceTot = cursorDistanceX + cursorDistanceY;
      if (cursorDistanceTot <= maxCursorDistance) {
        chessSquare.setOccupiedPiece(pieceClicked.getOccupiedPiece);
        chessSquare.setIsPieceWhite(pieceClicked.getIsPieceWhite());
        if (pieceClicked != chessSquare) {
          pieceClicked.setOccupiedPiece(false);
        }
        console.log(chessSquare);
      }
    }
  }
  pieceClicked = false;
  console.log("released");
}
function draw() {
  chessBoard.drawChessBoard();
  chessBoard.drawPiecesToBoard(chessBoard.chessBoard);
  if (pieceClicked) {
    if (pieceClicked.getIsPieceWhite()) {
      fill("red");
    } else {
      fill("blue");
    }
    noCursor(); // hide default cursor
    textSize(32);
    text(pieceClicked.getOccupiedPiece, mouseX, mouseY);
  } else {
    cursor(ARROW);
  }
}
