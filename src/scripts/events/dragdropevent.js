// global variable will contain ship elem data [direction, length, *shiptype]
let dragData;

/* dropzone element */
function addClassToGridElem(currentY, currentX, length, direction) {
  let elemArr = [];
  if (direction === 'horizontal') {
    for (let i = 0; i < length; i++) {
      const newXCoor = Math.floor(currentX) + i;
      const elem = document.querySelector(
        `div[data-coordinates="${currentY}, ${newXCoor}"`,
      );
      if (newXCoor > 9 || elem.classList.contains('filled')) {
        break;
      }
      elemArr.push(elem);
      elem.classList.add('dragover');
    }
  } else {
    for (let i = 0; i < length; i++) {
      const newYCoor = Math.floor(currentY) + i;
      const elem = document.querySelector(
        `div[data-coordinates="${newYCoor}, ${currentX}"`,
      );
      if (newYCoor > 9 || elem.classList.contains('filled')) {
        break;
      }
      elem.classList.add('dragover');
    }
  }
}

function removeClassFromGridElem(currentY, currentX, length, direction) {
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
    }
  }
}

export function dragOverEvent(event) {
  event.preventDefault();
  const val = event.target.dataset.coordinates;
  const [yCoor, xCoor] = val.split(', ');
  const [direction, length] = dragData;
  addClassToGridElem(yCoor, xCoor, length, direction);
}

export function dragLeaveEvent(event) {
  event.preventDefault();
  const val = event.target.dataset.coordinates;
  const [yCoor, xCoor] = val.split(', ');
  const [direction, length] = dragData;
  removeClassFromGridElem(yCoor, xCoor, length, direction);
}

/* drag element */
function dragStartFunc(event) {
  const elem = event.target;
  const directionVal = document.querySelector('#direction-btn').value;
  elem.classList.add('dragging');
  const dataArr = [directionVal, elem.dataset.length];
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
  elem.classList.remove('dragging');
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

export function dropEvent(event) {
  event.preventDefault();
  const val = event.target.dataset.coordinates;
  let dataStr = event.dataTransfer.getData('text');
  const dataArr = dataStr.split(',');
  const dataLength = Math.floor(dataArr[1]);
  const dragOverElems = document.querySelectorAll('.dragover');
  const dragOverElemsLength = dragOverElems.length;
  if (dataLength === dragOverElemsLength) {
    occupyDragoverElems();
  } else {
    dragOverElems.forEach(elem => elem.classList.remove('dragover'));
  }
  const dropZones = document.querySelectorAll('.dropzone');
  dropZones.forEach(dropzone => {
    dropzone.removeEventListener('dragover', dragOverEvent);
    dropzone.removeEventListener('dragleave', dragLeaveEvent);
  });
}
