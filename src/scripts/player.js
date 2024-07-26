import GameBoard from './gameboard';

export default class Player {
  constructor(type, Class) {
    if (type !== 'player' || type !== 'computer') {
      throw new Error('argument should be player or computer');
    }
    this.type = type;
    this.gameBoard = new Class();
  }
}
