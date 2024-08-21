import addDirectionalEvent from '../events/directionevent';

const ships = document.querySelectorAll('.ships');
const directionBtnArr = document.querySelectorAll('.direction-btn-wrapper');

/* Ship-container */
export const shipOrder = [
  ['destroyer', 2],
  ['submarine', 3],
  ['cruiser', 3],
  ['carrier', 5],
  ['battleship', 4],
];

function createShipElemWrapper(shipType) {
  let elem = document.createElement('div');
  let childDiv = document.createElement('div');
  elem.appendChild(childDiv);
  childDiv.textContent = shipType[0];
  childDiv.setAttribute('draggable', true);
  childDiv.setAttribute('data-length', shipType[1]);
  childDiv.setAttribute('data-type', shipType[0]);
  elem.classList.add('ship-elem', `${shipType[0]}-wrapper`);
  return elem;
}

export function fillShipContainers(playerType) {
  if (playerType === 'player one') {
    for (let i = 0; i < 5; i++) {
      let shipElem = createShipElemWrapper(shipOrder[i]);
      ships[0].appendChild(shipElem);
    }
  }
  if (playerType === 'player two' || playerType === 'computer') {
    for (let i = 0; i < 5; i++) {
      let shipElem = createShipElemWrapper(shipOrder[i]);
      ships[1].appendChild(shipElem);
    }
  }
}

/* directionButton */
function createBtnDirection() {
  let btn = document.createElement('button');
  btn.classList.add('btn-direction');
  btn.id = 'direction-btn';
  btn.setAttribute('value', 'horizontal');
  btn.textContent = 'horizontal';
  return btn;
}

export function addBtnDirectionElem(playerType) {
  if (playerType === 'player one') {
    let elem = createBtnDirection();
    directionBtnArr[0].appendChild(elem);
    addDirectionalEvent();
  }
  if (playerType === 'player two' || playerType === 'computer') {
    let elem = createBtnDirection();
    directionBtnArr[1].appendChild(elem);
    addDirectionalEvent();
  }
}
