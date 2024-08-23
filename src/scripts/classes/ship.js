export default class Ship {
  constructor(length, type) {
    // length is an array of spaces in gameboard
    this.length = length;
    this.type = type;
    this.hits = 0;
    this.sunk = false;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    if (this.length === this.hits || this.length < this.hits) {
      this.sunk = true;
    }
    return this.sunk;
  }
}

// battle ship length 4
// Carrier length 5
// Cruiser length 3
// Submarine length 3
// Destroyer length 2
