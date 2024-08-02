import GameBoard from './gameboard';
import Player from './player';

class Game {
  constructor() {
    this.mode = null;
    this.playerOne = null;
    this.playerTwo = null;
  }

  startGame(htmlInput) {
    if (htmlInput === 'pvp') {
      this.mode = htmlInput;
      this.playerOne = new Player('player', GameBoard);
      this.playerTwo = new Player('player', GameBoard);
    }
    if (htmlInput === 'pve') {
      this.mode = htmlInput;
      this.playerOne = new Player('player', GameBoard);
      this.playerTwo = new Player('computer', GameBoard);
    }
  }
}

const game = new Game();
export default game;
