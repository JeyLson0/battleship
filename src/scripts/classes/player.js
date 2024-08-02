export default class Player {
  constructor(type, Class) {
    if (
      !(type === 'player one' || type === 'player two' || type === 'computer')
    ) {
      throw new Error('argument should be player or computer');
    }
    this.type = type;
    this.name = null;
    this.turn = null;
    this.gameBoard = new Class();
  }
}
