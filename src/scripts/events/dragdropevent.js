let dragData;

function dragStartFunc(event) {
  const elem = event.target;
  const directionVal = document.querySelector('#direction-btn').value;
  elem.classList.add('dragging');
  const dataArr = [elem.dataset.length, directionVal];
  event.dataTransfer.setData('text/plain', dataArr);
  dragData = dataArr;
}

function dragEndFunc(event) {
  let elem = event.target;
  elem.classList.remove('dragging');
}

export default function addDraggableEvent() {
  const draggableElems = document.querySelectorAll('div[draggable]');
  draggableElems.forEach(elem => {
    elem.addEventListener('dragstart', dragStartFunc);
    elem.addEventListener('dragend', dragEndFunc);
  });
}

export function dropEvent(event) {
  event.preventDefault();
  const val = event.target.dataset.coordinates;
  console.log(`dropped at: ${val}`);
  let data = event.dataTransfer.getData('text');
  const dataArr = data.split(',');
  console.log(dataArr);
}

function addClassToGridElem(currentY, currentX, length, direction) {
  if (direction === 'horizontal') {
    for (let i = 0; i <= length; i++) {
      const newXCoor = Math.floor(currentX) + i;
      if (newXCoor > 9) {
        break;
      }
      const elem = document.querySelector(
        `div[data-coordinates="${currentY}, ${newXCoor}"`,
      );
      elem.classList.add('dragover');
    }
  } else {
    for (let i = 0; i < length; i++) {
      const newYCoor = Math.floor(currentY) + i;
      if (newYCoor > 9) {
        break;
      }
      const elem = document.querySelector(
        `div[data-coordinates="${newYCoor}, ${currentX}"`,
      );
      elem.classList.add('dragover');
    }
  }
}

export function dragEnterEvent(event) {
  event.preventDefault();
  const val = event.target.dataset.coordinates;
  const [yCoor, xCoor] = val.split(', ');
  const [length, direction] = dragData;
  addClassToGridElem(yCoor, xCoor, length, direction);
}

function removeClassFromGridElem(currentY, currentX, length, direction) {
  if (direction === 'horizontal') {
    for (let i = 0; i <= length; i++) {
      const newXCoor = Math.floor(currentX) + i;
      if (newXCoor > 9) {
        break;
      }
      const elem = document.querySelector(
        `div[data-coordinates="${currentY}, ${newXCoor}"`,
      );
      elem.classList.remove('dragover');
    }
  } else {
    for (let i = 0; i < length; i++) {
      const newYCoor = Math.floor(currentY) + i;
      if (newYCoor > 9) {
        break;
      }
      const elem = document.querySelector(
        `div[data-coordinates="${newYCoor}, ${currentX}"`,
      );
      elem.classList.remove('dragover');
    }
  }
}

export function dragLeaveEvent(event) {
  event.preventDefault();
  const val = event.target.dataset.coordinates;
  const [yCoor, xCoor] = val.split(', ');
  const [length, direction] = dragData;
  removeClassFromGridElem(yCoor, xCoor, length, direction);
}

/* NOTE: getCoordinates should get all the divs that the ship will occupy.
the divs will get a new class that changes background indicating you can place
the ship over the div */
