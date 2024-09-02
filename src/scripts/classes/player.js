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

  searchMove(coordinates) {
    const memoryArr = this.memory;
    for (let i = 0; i < memoryArr.length; i++) {
      if (coordinates.toString() === memoryArr[i].toString()) {
        return true;
      }
    }
    return false;
  }

  updateHitStack(coordinateArr) {
    const [yCoor, xCoor] = coordinateArr;

    const surroundingCoords = {
      top: [yCoor + 1, xCoor],
      right: [yCoor, xCoor + 1],
      bottom: [yCoor - 1, xCoor],
      left: [yCoor, xCoor - 1],
    };

    const coordArr = Object.values(surroundingCoords);

    coordArr.forEach(coordinates => {
      if (
        coordinates[0] < 9 &&
        coordinates[0] >= 0 &&
        coordinates[1] < 9 &&
        coordinates[1] >= 0
      ) {
        this.hitStack.push(coordinates);
      }
    });
  }

  playMove(playerOne) {
    let hit;
    const playerOneGameBoard = playerOne.gameBoard;

    if (this.hitStack.length > 0) {
      const lastValStack = this.hitStack.pop();
      const yValStack = lastValStack[0];
      const xValStack = lastValStack[1];
      const searchStackMove = this.searchMove(lastValStack);

      if (!searchStackMove) {
        this.memory.push(lastValStack);
        const elem = document.querySelector(
          `#player-one-grid>[data-coordinates="${yValStack.toString()}, ${xValStack.toString()}"]`,
        );
        hit = playerOneGameBoard.receiveAttack(yValStack, xValStack);
        elem.classList.add('attacked');

        if (hit) {
          elem.classList.add('hit');
          playerOneGameBoard.grid[yValStack][xValStack].isSunk();
          playerOneGameBoard.removeShip(yValStack, xValStack);
          this.updateHitStack(lastValStack);
          return hit;
        }
      } else {
        return this.playMove(playerOne);
      }
    } else {
      const yCoor = this.getRandomNum();
      const xCoor = this.getRandomNum();
      const coordinates = [yCoor, xCoor];
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
          this.updateHitStack(coordinates);
          return hit;
        }
      } else {
        return this.playMove(playerOne);
      }
    }

    return hit;
  }
}
