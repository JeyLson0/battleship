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

function fillShipContainers() {
  let shipTypes = [...shipOrder];
  ships.forEach(shipDiv => {
    for (let i = 0; i < 5; i++) {
      let shipElem = createShipElem(shipTypes[i]);
      shipDiv.appendChild(shipElem);
    }
  });
}

fillShipContainers();

/* directionButton */
function createBtnDirection() {
  let btn = document.createElement('button');
  btn.classList.add('btn-direction');
  btn.setAttribute('value', 'horizontal');
  btn.textContent = 'horizontal';
  return btn;
}

function addBtnElem() {
  directionBtnArr.forEach(wrapper => {
    let elem = createBtnDirection();
    wrapper.appendChild(elem);
  });
}

addBtnElem();
