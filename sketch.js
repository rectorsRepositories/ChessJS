const canvasElement = document.getElementById("canvas-element")
const chessBoard = new ChessBoard();

function setup() {
  createCanvas(800, 800, canvasElement);
  chessBoard.initChessBoardArr();
  chessBoard.drawChessBoard();
  chessBoard.fillWhitePieces();
  chessBoard.fillBlackPieces();
}

function draw() {
  chessBoard.drawPiecesToBoard(chessBoard.chessBoard);
}
