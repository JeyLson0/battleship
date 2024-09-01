import GameBoard from './gameboard';
import Player from './player';

export class Game {
  constructor() {
    this.mode = null;
    this.playerOne = null;
    this.playerTwo = null;
    this.state = null;
    this.winner = null;
  }

  startGame(htmlInput) {
    if (htmlInput === 'pvp') {
      this.mode = htmlInput;
      this.playerOne = new Player('player one', GameBoard);
      this.playerTwo = new Player('player two', GameBoard);
      this.statePlayerOnePlacement();
    }
    if (htmlInput === 'pve') {
      this.mode = htmlInput;
      this.playerOne = new Player('player one', GameBoard);
      this.playerTwo = new Player('computer', GameBoard);
      this.statePlayerOnePlacement();
    }
  }

  restartGame() {
    this.mode = null;
    this.playerOne = null;
    this.playerTwo = null;
    this.state = null;
    this.winner = null;
  }

  gameStateNull() {
    this.state = null;
  }

  statePlayerOnePlacement() {
    this.state = 0;
  }

  statePlayerTwoPlacement() {
    this.state = 1;
  }

  stateComputerPlacement() {
    this.state = 2;
  }

  statePlayerOneTurn() {
    this.state = 3;
  }

  statePlayerTwoTurn() {
    this.state = 4;
  }

  stateComputerTurn() {
    this.state = 5;
  }

  stateEndGame(player) {
    this.state = 6;
    this.winner = player;
  }
}

const game = new Game();
export default game;

/* 
game state:
1. player one ship placement - 0
2. player two ship placement - 1
3. computer place random ship placement - 2
4. player one turn - 3
5. player two turn - 4
6. computer turn - 5
7. game end - 6
 */
