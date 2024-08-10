import { dropEvent, dragOverEvent, dragLeaveEvent } from './dragdropevent';

export function addDropZone(playerType) {
  if (playerType === 'player one') {
    const grid = document.getElementById('player-one-grid');
    const gridElems = [...grid.children];
    gridElems.forEach(elem => {
      elem.classList.add('dropzone');
      elem.addEventListener('drop', dropEvent);
    });
  } else {
    console.log(playerType);
    const grid = document.getElementById('player-two-grid');
    const gridElems = [...grid.children];
    gridElems.forEach(elem => elem.classList.add('dropzone'));
  }
}

export function removeDropZone(playerType) {
  if (playerType === 'player one') {
    const grid = document.getElementById('player-one-grid');
    const gridElems = [...grid.children];
    gridElems.forEach(elem => elem.classList.remove('dropzone'));
  } else {
    console.log(playerType);
    const grid = document.getElementById('player-two-grid');
    const gridElems = [...grid.children];
    gridElems.forEach(elem => elem.classList.remove('dropzone'));
  }
}
