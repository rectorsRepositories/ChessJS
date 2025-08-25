const chessBoard = new ChessBoard();
function setup() {
  createCanvas(800, 800);
  chessBoard.initChessBoardArr();
}

function draw() {
  background(220);
  chessBoard.drawChessBoard();
}
