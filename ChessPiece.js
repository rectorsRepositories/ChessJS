class ChessPiece {
  constructor(
    pieceColor,
    pieceName,
    pieceBoardPos,
    piecePosX,
    piecePosY
  ) {
    this.pieceColor = pieceColor;
    this.pieceName = pieceName;
    this.pieceBoardPos = pieceBoardPos;
    this.piecePosX = piecePosX;
    this.piecePosY = piecePosY;
  }
  //pieceColor setter/getter
  get getPieceColor() {
    return this.pieceColor;
  }
  set setPieceColor(newPieceColor) {
    this.pieceColor = newPieceColor;
  }
  //pieceName setter/getter
  get getPieceName () {
    return this.pieceName;
  }
  set setPieceName (newPieceName) {
    this.pieceName = newPieceName;
  }
  //pieceBoardPos setter/getter
  get setPieceBoardPos () {
    return this.pieceBoardPos;
  }
  set setPieceBoardPos (newPieceBoardPos) {
    this.pieceBoardPos = newPieceBoardPos;
  }
  //piecePosX setter/getter
  get getPiecePosX () {
    return this.piecePosX
  }
  set setPiecePosX (newPiecePosX) {
    this.piecePosX = newPiecePosX;
  }
  //piecePosY setter/getter
  get getPiecePosY () {
    return this.piecePosY;
  }
  set setPiecePosY (newPiecePosY) {
    this.piecePosY = newPiecePosY;
  }
}
