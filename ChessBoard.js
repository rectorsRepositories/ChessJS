class ChessBoard {
    constructor() {
        this.chessBoard = [[], [], [], [], [], [], [], []];
    }
    drawBackground () {
        let squareCount = 0;
        for (let i = 0; i < height; i+= (height / 8)) {
            
            if (squareCount % 2 == 0) {
                noStroke();
                fill(0, 99, 0, 255);
                square(0, i, height / 8);
                noFill();
                squareCount++
            } else {
                square(0, i, height / 8);
                squareCount++
            }
        }

    } 
}
