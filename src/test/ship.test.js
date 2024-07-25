import Ship from '../scripts/ship';

let mockShipType = jest
  .fn()
  .mockReturnValue(2)
  .mockReturnValueOnce(3)
  .mockReturnValueOnce(4)
  .mockReturnValueOnce(5);
describe('ship properties', () => {
  it('ship types', () => {
    let battleShip = new Ship(mockShipType());
    expect(battleShip.length).toBe(3);

    let cruiser = new Ship(mockShipType());
    expect(cruiser.length).toBe(4);

    let submarine = new Ship(mockShipType());
    expect(submarine.length).toBe(5);

    let destroyer = new Ship(mockShipType());
    expect(destroyer.length).toBe(2);
  });
});

describe('ship methods', () => {
  it('ship has been hit', () => {
    let carrier = new Ship(mockShipType());
    carrier.hit();
    expect(carrier.hits).toBe(1);
    carrier.hit();
    expect(carrier.hits).toBe(2);
    carrier.hit();
    expect(carrier.hits).toBe(3);
  });

  it('ship has been sunk', () => {
    let carrier = new Ship(mockShipType());
    carrier.hit();
    carrier.hit();
    carrier.hit();
    carrier.hit();
    carrier.hit();
    carrier.isSunk();
    expect(carrier.sunk).toBe(true);
  });
});
