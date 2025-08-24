class BoardSquare {
    constructor (squareCanvasPosX, squareCanvasPosY, squareRank, squareFile) {
        this.squareCanvasPosX = squareCanvasPosX;
        this.squareCanvasPosY = squareCanvasPosY;
        // rank is horizontal a-h
        this.squareRank = squareRank;
        // file is vertical 1-8
        this.squareFile = squareFile;
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
    // set/get squareRank
    get getSquareRank () {
        return this.squareRank;
    } 
    set setSquareRank (newSquareRank) {
        this.squareRank = newSquareRank;
    }
    // set/get squareFile
    get getSquareFile () {
        return this.squareFile
    }
    set setSquareFile(newSquareFile){
        this.squareFile = newSquareFile;
    }
    // set/get occupiedPiece
    get getOccupiedPiece () {
        return this.occupiedPiece;
    }
    set setOccupiedPiece (newPiece) {
        this.occupiedPiece = newPiece;
    } 
}