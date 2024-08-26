export default class GameBoard {
  constructor() {
    this.grid = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
  }

  placeShip(shipObj, yIndex, xIndex) {
    this.grid[yIndex][xIndex] = shipObj;
  }

  removeShip(yIndex, xIndex) {
    this.grid[yIndex][xIndex] = 0;
  }

  receiveAttack(yIndex, xIndex) {
    if (typeof this.grid[yIndex][xIndex] === 'object') {
      this.grid[yIndex][xIndex].hit();
      return true;
    }
    return false;
  }

  scanBoard() {
    let shipCoordinates = [];
    for (let i = 0; i < this.grid.length; i++) {
      let row = this.grid[i];
      for (let j = 0; j < row.length; j++) {
        let rowElem = row[j];
        if (typeof rowElem === 'object') {
          let coordinates = [i, j];
          shipCoordinates.push(coordinates);
        }
      }
    }
    if (shipCoordinates.length > 0) {
      console.log('grid still contains ships');
      return shipCoordinates;
    }
    return console.log('grid is clear. game over!');
  }
}
