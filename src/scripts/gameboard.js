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
    let shipLength = ship.length;
    if (horizontalAxis === true) {
      if (xIndex + shipLength > this.grid.length) {
        throw new Error('ship placement exceeds grid size');
      }
      for (let i = 0; i < shipLength; i++) {
        this.grid[yIndex][xIndex + i] = 1;
      }
    } else {
      if (yIndex + shipLength > this.grid.length) {
        throw new Error('ship placement exceeds grid size');
      }
      for (let i = 0; i < shipLength; i++) {
        this.grid[yIndex + i][xIndex] = 1;
      }
    }
  }
}
