const chessBoard = new ChessBoard();
const canvasElement = document.getElementById("canvas-element")
function setup() {
  createCanvas(800, 800, canvasElement);
  chessBoard.initChessBoardArr();
  chessBoard.drawChessBoard();
  chessBoard.drawFillWhitePieces();
  chessBoard.drawFillBlackPieces();
}

function draw() {
  
}
