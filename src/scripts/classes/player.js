export default class Player {
  constructor(type, Class) {
    if (
      !(type === 'player one' || type === 'player two' || type === 'computer')
    ) {
      throw new Error('argument should be player or computer');
    }
    this.type = type;
    this.gameBoard = new Class();
    this.memory = [];
    this.hitStack = []; // stack
  }

  // Computer methods

  getRandomNum() {
    return Math.floor(Math.random() * 10);
  }

  searchMove(move) {
    const memoryArr = this.memory;
    for (let i = 0; i < memoryArr.length; i++) {
      if (move.toString() === memoryArr[i].toString()) {
        return true;
      }
    }
    return false;
  }

  updateHitStack(coordinateArr) {
    const { yCoor, xCoor } = coordinateArr;
  }

  playMove(playerOne) {
    let hit;
    const yCoor = this.getRandomNum();
    const xCoor = this.getRandomNum();
    const coordinates = [yCoor, xCoor];
    const playerOneGameBoard = playerOne.gameBoard;
    const searchMove = this.searchMove([yCoor, xCoor]);
    if (!searchMove) {
      this.memory.push(coordinates);
      const elem = document.querySelector(
        `#player-one-grid>[data-coordinates="${yCoor.toString()}, ${xCoor.toString()}"]`,
      );
      hit = playerOneGameBoard.receiveAttack(yCoor, xCoor);
      elem.classList.add('attacked');
      if (hit) {
        elem.classList.add('hit');
        playerOneGameBoard.grid[yCoor][xCoor].isSunk();
        playerOneGameBoard.removeShip(yCoor, xCoor);
        /*         this.updateHitStack(coordinates); */
        return hit;
      }
    } else {
      return this.playMove(playerOne);
    }
    return hit;
  }
}
