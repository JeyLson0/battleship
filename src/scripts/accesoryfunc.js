import game from './classes/gamemode';
import Ship from './classes/ship';
import { shipOrder } from './dom/shipcontainer';

export function createShipObj() {
  let shipObjArr = [];
  shipOrder.forEach(elem => {
    let ship = new Ship(elem[1], elem[0]);
    shipObjArr.push(ship);
  });
  return shipObjArr;
}

function returnShipObj(shipData) {
  const shipObjArr = createShipObj();
  const obj = shipObjArr.find(elem => elem.type === shipData);
  if (obj === undefined) {
    console.log(shipData);
  }
  return obj;
}

export function setPlayerGrid(player) {
  const filledElems = document.querySelectorAll('.filled');
  const playerGrid = player.gameBoard;
  if (filledElems.length === 17) {
    const shipObjArr = createShipObj();
    console.log(shipObjArr);
    console.log(playerGrid);
    filledElems.forEach(elem => {
      const elemCoordinatesArr = elem
        .getAttribute('data-coordinates')
        .split(', ');
      const elemShipType = elem.getAttribute('data-ship');
      const shipObj = returnShipObj(elemShipType);
      const yCoordinate = elemCoordinatesArr[0];
      const xCoordinate = elemCoordinatesArr[1];
      playerGrid.placeShip(shipObj, yCoordinate, xCoordinate);
    });
  } else {
    console.log('ships still missing');
  }
  console.log(player);
}
