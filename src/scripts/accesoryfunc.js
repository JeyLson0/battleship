import game from './classes/game';
import Ship from './classes/ship';
import { shipOrder } from './dom/shipcontainer';

/* "occupied" elements into player's grid logic */
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
  return obj;
}

export function setPlayerGrid(playerObj) {
  const filledElems = document.querySelectorAll('.filled');
  const playerGrid = playerObj.gameBoard;
  if (filledElems.length === 17) {
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
    console.log(playerObj);
    return true;
  }
  console.log(playerObj);
  return false;
}

/* logic that switches to player two placement. */
function removeAllChildren(htmlArr) {
  const length = htmlArr.children.length;
  for (let i = 0; i < length; i++) {
    htmlArr.removeChild(htmlArr.firstElementChild);
  }
}

export function removePlayerUI(playerType) {
  const shipContainerElemArr = document.querySelectorAll('.ship-container');
  if (playerType === 'player one') {
    console.log('removing player one UI');
    const playerOneContainer = shipContainerElemArr[0].children; // class: ships and direction-btn-wrapper
    const playerOneShips = playerOneContainer[0];
    const playerOneDirectionBtn = playerOneContainer[1];
    removeAllChildren(playerOneShips);
    removeAllChildren(playerOneDirectionBtn);
  }
  if (playerType === 'player two' || playerType === 'computer') {
    console.log('removing player two UI');
    const playerTwoContainer = shipContainerElemArr[1].children; // class: ships and direction-btn-wrapper
    const playerTwoShips = playerTwoContainer[0];
    const playerTwoDirectionBtn = playerTwoContainer[1];
    removeAllChildren(playerTwoShips);
    removeAllChildren(playerTwoDirectionBtn);
  }
}
