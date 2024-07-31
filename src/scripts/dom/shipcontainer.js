const shipContainer = document.querySelectorAll('.ship-container');
const ships = document.querySelectorAll('.ships');
const directionBtn = document.querySelectorAll('.direction-btn-wrapper');

/* Ship-container */
const shipOrder = [
  'destroyer',
  'submarine',
  'cruiser',
  'carrier',
  'battleship',
];

function createShipElem(shipType) {
  let elem = document.createElement('div');
  let paragraph = document.createElement('p');
  elem.appendChild(paragraph);
  paragraph.textContent = shipType;
  elem.classList.add('ship-elem', shipType);
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
