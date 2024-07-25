import GameBoard from '../scripts/gameboard';
import Ship from '../scripts/ship';

describe('grid size', () => {
  it('game board should be a 10x10 grid', () => {
    let gameboard = new GameBoard();
    expect(gameboard.grid.length).toBe(10);
    for (let i = 0; i < gameboard.grid.length; i++) {
      let gridRow = gameboard.grid[i];
      expect(gridRow.length).toBe(10);
    }
  });
});

describe('ship placement', () => {
  let destroyer = new Ship(2);
  let carrier = new Ship(5);
  let gameboard = new GameBoard();

  it('gameboard should be able to place ships at specific coordinates', () => {
    gameboard.placeShip(destroyer, 0, 1, true);
    expect(gameboard.grid[0][1]).toBe(1);
    expect(gameboard.grid[0][2]).toBe(1);
  });

  it('carrier placed in (3,5) in vertical position', () => {
    gameboard.placeShip(carrier, 2, 5);
    expect(gameboard.grid[2][5]).toBe(1);
    expect(gameboard.grid[3][5]).toBe(1);
    expect(gameboard.grid[4][5]).toBe(1);
    expect(gameboard.grid[5][5]).toBe(1);
    expect(gameboard.grid[6][5]).toBe(1);
  });

  it('ship placement must not exceed grid', () => {
    expect(() => {
      gameboard.placeShip(carrier, 8, 8);
    }).toThrow('ship placement exceeds grid size');
  });
});
