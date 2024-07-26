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

  placeShip(ship, yIndex, xIndex, horizontalAxis) {
    let s = ship;
    let shipLength = ship.length;
    if (horizontalAxis === true) {
      if (xIndex + shipLength > this.grid.length) {
        throw new Error('ship placement exceeds grid size');
      }
      for (let i = 0; i < shipLength; i++) {
        this.grid[yIndex][xIndex + i] = s;
      }
    } else {
      if (yIndex + shipLength > this.grid.length) {
        throw new Error('ship placement exceeds grid size');
      }
      for (let i = 0; i < shipLength; i++) {
        this.grid[yIndex + i][xIndex] = s;
      }
    }
  }

  receiveAttack(yIndex, xIndex) {
    // -1 represents ship hit.
    if (typeof this.grid[yIndex][xIndex] === 'object') {
      this.grid[yIndex][xIndex].hit();
      this.grid[yIndex][xIndex] = -1;
      return 'ship took a hit!';
    }
    // 2 represents missed shot
    this.grid[yIndex][xIndex] = 2;
    return 'miss!';
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
    return 'grid is clear';
  }
}
