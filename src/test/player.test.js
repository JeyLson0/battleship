import Player from '../scripts/player';
import GameBoard from '../scripts/gameboard';

describe('player class', () => {
  it('player class type property should be player or computer', () => {
    let num = 1;
    let array = [1, 2];
    let obj = { val: 3 };
    let randomStr = 'random';
    expect(() => {
      let player = new Player(num, GameBoard);
    }).toThrow();
    expect(() => {
      let player = new Player(array, GameBoard);
    }).toThrow();
    expect(() => {
      let player = new Player(obj, GameBoard);
    }).toThrow();
    expect(() => {
      let player = new Player(randomStr, GameBoard);
    }).toThrow();
  });

  it('player created with Player class', () => {
    let player = new Player('player', GameBoard);
    expect(player.type).toBe('player');
  });
});
