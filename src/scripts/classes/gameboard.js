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
      return false;
    }
    console.log('grid is clear. game over!');
    return true;
  }

  placeRandomShip(ship) {
    const yCoor = Math.floor(Math.random() * 10);
    const xCoor = Math.floor(Math.random() * 10);
    const direction = Math.floor(Math.random() * 2);

    if (direction === 0) {
      // horizontal
      for (let i = 0; i < ship.length; i++) {
        const newXCoor = xCoor + i;
        if (newXCoor > 9) {
          return this.placeRandomShip(ship);
        }
        const elem = this.grid[yCoor][newXCoor];
        if (elem !== 0) {
          return this.placeRandomShip(ship);
        }
      }
      for (let j = 0; j < ship.length; j++) {
        this.grid[yCoor][xCoor + j] = ship;
      }
    } else {
      // vertical
      for (let i = 0; i < ship.length; i++) {
        const newYCoor = yCoor + i;
        if (newYCoor > 9) {
          return this.placeRandomShip(ship);
        }
        const elem = this.grid[newYCoor][xCoor];
        if (elem !== 0) {
          return this.placeRandomShip(ship);
        }
      }
      for (let j = 0; j < ship.length; j++) {
        this.grid[yCoor + j][xCoor] = ship;
      }
    }

    return this.grid;
  }
}
