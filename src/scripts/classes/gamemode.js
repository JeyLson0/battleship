import GameBoard from './gameboard';
import Player from './player';

class Game {
  constructor() {
    this.mode = null;
    this.playerOne = null;
    this.playerTwo = null;
    this.state = null;
  }

  startGame(htmlInput) {
    if (htmlInput === 'pvp') {
      this.mode = htmlInput;
      this.playerOne = new Player('player one', GameBoard);
      this.playerTwo = new Player('player two', GameBoard);
    }
    if (htmlInput === 'pve') {
      this.mode = htmlInput;
      this.playerOne = new Player('player one', GameBoard);
      this.playerTwo = new Player('computer', GameBoard);
    }
  }

  placementPhase(player) {
    this.state = 'ship placement';
  }
}

const game = new Game();
export default game;
