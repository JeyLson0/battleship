export default class Ship {
  constructor(arrLength) {
    // length is an array of spaces in gameboard
    this.length = arrLength;
    this.hits = 0;
    this.sunk = false;
    this.hit = () => {
      this.hits += 1;
    };
    this.isSunk = () => {
      this.sunk = true;
    };
  }
}

// battle ship length 4
// Carrier length 5
// Cruiser length 3
// Submarine length 3
// Destroyer length 2
