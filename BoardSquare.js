class BoardSquare {
    constructor (squareCanvasPosX, squareCanvasPosY) {
        this.squareCanvasPosX = squareCanvasPosX;
        this.squareCanvasPosY = squareCanvasPosY;
        this.occupiedPiece = false;
    }
    // set/get squareCanvasPosX
    get getSquareCanvasPosX () {
        return this.squareCanvasPosX
    }
    set setSquareCanvasPosX (newCanvasPosX) {
        this.getSquareCanvasPosX = newCanvasPosX;
    }
    // set/get squareCanvasPosY
    get getSquareCanvasPosY () {
        return this.squareCanvasPosY
    }
    set setSquareCanvasPosY (newCanvasPosY) {
        this.squareCanvasPosY = newCanvasPosY;
    } 
    
    // set/get occupiedPiece
    get getOccupiedPiece () {
        return this.occupiedPiece;
    }
    set setOccupiedPiece (newPiece) {
        this.occupiedPiece = newPiece;
    } 
}