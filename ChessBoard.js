class ChessBoard {
  constructor() {
    this.chessBoard = [[], [], [], [], [], [], [], []];
  }
  drawBackground() {
    let cellSize = width / 8;

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        if ((row + col) % 2 === 0) {
          fill("#efeaea"); // light square
        } else {
          fill("#000103"); // dark square
        }
        noStroke();
        square(col * cellSize, row * cellSize, cellSize);
      }
    }
  }
}
