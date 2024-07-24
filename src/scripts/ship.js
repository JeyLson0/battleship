export default class Ship {
  constructor(arrLength) {
    // length is an array of spaces in gameboard
    this.length = arrLength;
    this.hits = 0;
    this.alive = true;
    this.hit = () => this.hits + 1;
    this.isSunk = () => {
      this.alive = false;
    };
  }
}

// battle ship length 4
// Carrier length 5
// Cruiser length 3
// Submarine length 3
// Destroyer length 2
