import Ship from '../scripts/ship';

let mockShipType = jest
  .fn()
  .mockReturnValue([1, 2, 3, 4, 5])
  .mockReturnValueOnce([1, 2, 3, 4])
  .mockReturnValueOnce([1, 2, 3])
  .mockReturnValueOnce([1, 2, 3])
  .mockReturnValueOnce([1, 2]);

it('ship types', () => {
  let battleShip = new Ship(mockShipType());
  expect(battleShip.length).toStrictEqual([1, 2, 3, 4]);

  let cruiser = new Ship(mockShipType());
  expect(cruiser.length).toStrictEqual([1, 2, 3]);

  let submarine = new Ship(mockShipType());
  expect(submarine.length).toStrictEqual([1, 2, 3]);

  let destroyer = new Ship(mockShipType());
  expect(destroyer.length).toStrictEqual([1, 2]);

  let carrier = new Ship(mockShipType());
  expect(carrier.length).toStrictEqual([1, 2, 3, 4, 5]);
});

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
  expect(carrier.sunk).toBe(true);
});
