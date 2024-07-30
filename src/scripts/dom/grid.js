import addGridElemEvent from '../events/gridevents';

// selects all .grid-container div
const playersGrid = document.querySelectorAll('.grid-container');

// creates the button elem, containing values
function createGridElem(yIndex, xIndex) {
  let elem = document.createElement('button');
  elem.classList.add('grid-elem');
  elem.setAttribute('value', `${yIndex}, ${xIndex}`);
  return elem;
}

// this function places each elem in the grid.
function placeElemToGrid(elem, index) {
  playersGrid[index].appendChild(elem);
}

// create both player one and player two grid with respective values
function createGrid() {
  for (let i = 0; i < 10; i++) {
    let y = i;
    for (let j = 0; j < 10; j++) {
      let x = j;
      for (let n = 0; n < playersGrid.length; n++) {
        let elem = createGridElem(y, x);
        addGridElemEvent(elem);
        placeElemToGrid(elem, n);
      }
    }
  }
}

createGrid();
