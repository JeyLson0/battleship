import Player from '../scripts/classes/player';
import GameBoard from '../scripts/classes/gameboard';

describe('player class', () => {
  it('player class type property should be player or computer', () => {
    let num = 1;
    let array = [1, 2];
    let obj = { val: 3 };
    let randomStr = 'random';
    expect(() => {
      let player1 = new Player(num, GameBoard);
    }).toThrow();
    expect(() => {
      let player2 = new Player(array, GameBoard);
    }).toThrow();
    expect(() => {
      let player3 = new Player(obj, GameBoard);
    }).toThrow();
    expect(() => {
      let player4 = new Player(randomStr, GameBoard);
    }).toThrow();
  });

  it('Player class has player type', () => {
    let player = new Player('player one', GameBoard);
    expect(player.type).toBe('player one');
  });

  it('Player class has computer type', () => {
    let player = new Player('computer', GameBoard);
    expect(player.type).toBe('computer');
  });
});
