// global variable will contain ship elem data [direction, length, type]
let dragData;

/* dropzone element */
function addClassToGridElem(currentY, currentX, length, direction, type) {
  let elemArr = [];
  if (direction === 'horizontal') {
    for (let i = 0; i < length; i++) {
      const newXCoor = Math.floor(currentX) + i;
      const elem = document.querySelector(
        `div[data-coordinates="${currentY}, ${newXCoor}"`,
      );
      if (newXCoor > 9 || elem.classList.contains('filled')) {
        if (elemArr.length > 0) {
          elemArr.forEach(item => item.classList.add('occupied'));
        }
        break;
      }
      elemArr.push(elem);
      elem.classList.add('dragover');
      elem.setAttribute('data-ship', type);
    }
  } else {
    for (let i = 0; i < length; i++) {
      const newYCoor = Math.floor(currentY) + i;
      const elem = document.querySelector(
        `div[data-coordinates="${newYCoor}, ${currentX}"`,
      );
      if (newYCoor > 9 || elem.classList.contains('filled')) {
        if (elemArr.length > 0) {
          elemArr.forEach(item => item.classList.add('occupied'));
        }
        break;
      }
      elemArr.push(elem);
      elem.classList.add('dragover');
      elem.setAttribute('data-ship', type);
    }
  }
}

function removeClassFromGridElem(currentY, currentX, length, direction, type) {
  if (direction === 'horizontal') {
    for (let i = 0; i < length; i++) {
      const newXCoor = Math.floor(currentX) + i;
      if (newXCoor > 9) {
        break;
      }
      const elem = document.querySelector(
        `div[data-coordinates="${currentY}, ${newXCoor}"`,
      );
      elem.classList.remove('occupied');
      elem.classList.remove('dragover');
      elem.removeAttribute('data-ship', type);
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
      elem.classList.remove('occupied');
      elem.classList.remove('dragover');
      elem.removeAttribute('data-ship', type);
    }
  }
}

export function dragOverEvent(event) {
  event.preventDefault();
  const val = event.target.dataset.coordinates;
  const [yCoor, xCoor] = val.split(', ');
  const [direction, length, type] = dragData;
  addClassToGridElem(yCoor, xCoor, length, direction, type);
}

export function dragLeaveEvent(event) {
  event.preventDefault();
  const val = event.target.dataset.coordinates;
  const [yCoor, xCoor] = val.split(', ');
  const [direction, length, type] = dragData;
  removeClassFromGridElem(yCoor, xCoor, length, direction, type);
}

/* drag element */
function dragStartFunc(event) {
  const elem = event.target;
  const directionVal = document.querySelector('#direction-btn').value;
  elem.classList.add('dragging');
  const dataArr = [directionVal, elem.dataset.length, elem.dataset.type];
  event.dataTransfer.setData('text/plain', dataArr);
  dragData = dataArr;

  const dropzones = document.querySelectorAll('.dropzone');
  dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', dragOverEvent);
    dropzone.addEventListener('dragleave', dragLeaveEvent);
  });
}

function dragEndFunc(event) {
  let elem = event.target;
  elem.removeAttribute('class');
}

export default function addDraggableEvent() {
  const draggableElems = document.querySelectorAll('div[draggable]');
  draggableElems.forEach(elem => {
    elem.addEventListener('dragstart', dragStartFunc);
    elem.addEventListener('dragend', dragEndFunc);
  });
}

/* drop should  */
function occupyDragoverElems() {
  const dragoverElems = document.querySelectorAll('.dragover');
  dragoverElems.forEach(elem => {
    elem.classList.remove('dropzone', 'dragover');
    elem.classList.add('filled');
    elem.removeEventListener('dragover', dragOverEvent);
    elem.removeEventListener('dragleave', dragLeaveEvent);
  });
}

function toggleDraggable(ship) {
  let elem = document.querySelector(`div[data-type=${ship}]`);
  if (elem.draggable === true) {
    elem.removeAttribute('draggable');
    elem.classList.remove('dragging');
    elem.removeEventListener('dragstart', dragStartFunc);
    elem.removeEventListener('dragend', dragEndFunc);
  }
}

export function dropEvent(event) {
  event.preventDefault();
  let dataStr = event.dataTransfer.getData('text');
  const dataArr = dataStr.split(',');
  const dataShipStr = dataArr[2];
  const dataLength = Math.floor(dataArr[1]);
  const dragOverElems = document.querySelectorAll('.dragover');
  const dragOverElemsLength = dragOverElems.length;
  if (dataLength === dragOverElemsLength) {
    occupyDragoverElems();
    toggleDraggable(dataShipStr);
  } else {
    dragOverElems.forEach(elem =>
      elem.classList.remove('dragover', 'occupied', 'dragging'),
    );
  }
  const dropZones = document.querySelectorAll('.dropzone');
  dropZones.forEach(dropzone => {
    dropzone.removeEventListener('dragover', dragOverEvent);
    dropzone.removeEventListener('dragleave', dragLeaveEvent);
  });
}
