import { addDirectionalEvent } from '../events/directionevent';

const ships = document.querySelectorAll('.ships');
const directionBtnArr = document.querySelectorAll('.direction-btn-wrapper');

/* Ship-container */
const shipOrder = [
  ['destroyer', 2],
  ['submarine', 3],
  ['cruiser', 3],
  ['carrier', 5],
  ['battleship', 4],
];

function createShipElem(shipType) {
  let elem = document.createElement('div');
  let childDiv = document.createElement('div');
  elem.appendChild(childDiv);
  childDiv.textContent = shipType[0];
  childDiv.setAttribute('draggable', false);
  childDiv.setAttribute('data-length', shipType[1]);
  elem.classList.add('ship-elem', `${shipType[0]}-wrapper`);
  return elem;
}

export function fillShipContainers(playerType) {
  let shipTypes = [...shipOrder];
  if (playerType === 'player one') {
    for (let i = 0; i < 5; i++) {
      let shipElem = createShipElem(shipTypes[i]);
      ships[0].appendChild(shipElem);
    }
  }
  if (playerType === 'player two') {
    for (let i = 0; i < 5; i++) {
      let shipElem = createShipElem(shipTypes[i]);
      ships[1].appendChild(shipElem);
    }
  }
}

/* directionButton */
function createBtnDirection() {
  let btn = document.createElement('button');
  btn.classList.add('btn-direction');
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
  }
}
