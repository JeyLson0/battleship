import GameBoard from '../scripts/classes/gameboard';
import Ship from '../scripts/classes/ship';

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
    expect(gameboard.grid[0][1]).toBe(destroyer);
    expect(gameboard.grid[0][2]).toBe(destroyer);
  });

  it('carrier placed in (3,5) in vertical position', () => {
    gameboard.placeShip(carrier, 2, 5);
    expect(gameboard.grid[2][5]).toBe(carrier);
    expect(gameboard.grid[3][5]).toBe(carrier);
    expect(gameboard.grid[4][5]).toBe(carrier);
    expect(gameboard.grid[5][5]).toBe(carrier);
    expect(gameboard.grid[6][5]).toBe(carrier);
  });

  it('ship placement must not exceed grid', () => {
    expect(() => {
      gameboard.placeShip(carrier, 8, 8);
    }).toThrow('ship placement exceeds grid area');
  });

  // DO this soon
  /* it('ship placement should not be placed on occupied space', () => {
  }); */
});

describe('gameboard receiveAttack', () => {
  let gameboard = new GameBoard();
  let destroyer = new Ship(2);
  gameboard.placeShip(destroyer, 0, 0);

  it('ship took a hit', () => {
    expect(gameboard.receiveAttack(0, 0)).toBe('ship took a hit!');
    expect(gameboard.receiveAttack(1, 0)).toBe('ship took a hit!');
  });

  it('attacker missed', () => {
    expect(gameboard.receiveAttack(1, 3)).toBe('miss!');
  });
});

describe('scan gameboard', () => {
  let gameboard = new GameBoard();
  let submarine = new Ship(3);
  gameboard.placeShip(submarine, 6, 0);

  it('gameboard contains ships', () => {
    let scannedBoard = gameboard.scanBoard();
    console.log(scannedBoard);
    expect(Array.isArray(scannedBoard)).toBeTruthy();
  });

  it('gameboard is clear', () => {
    gameboard.receiveAttack(6, 0);
    gameboard.receiveAttack(7, 0);
    gameboard.receiveAttack(8, 0);
    let scannedBoard = gameboard.scanBoard();
    console.log(scannedBoard);
    expect(scannedBoard).toMatch('grid is clear');
  });
});
