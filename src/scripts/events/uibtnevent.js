import addDraggableEvent from './dragdropevent';
import { createShipObj, setPlayerGrid } from '../accesoryfunc';
/* clear btn */

function clearGridElems() {
  const gridElems = document.querySelectorAll('.grid-elem.filled');
  gridElems.forEach(elem => {
    elem.classList.remove('filled');
    elem.classList.add('dropzone');
    elem.removeAttribute('data-ship');
  });
}

function toggleDraggables() {
  const shipElems = document.querySelectorAll('div[data-type]');
  shipElems.forEach(elem => {
    elem.setAttribute('draggable', true);
  });
  addDraggableEvent();
}

export function addClearBtnEvents() {
  const clearBtn = document.querySelector('#clear-btn');
  clearBtn.addEventListener('click', () => {
    clearGridElems();
    toggleDraggables();
  });
}

/* continue btn */

/* 
clicking the continue btn will need to do several things
1. process all filled elements and place it on respective player's grid in game obj
2. remove ship container from player one side to player two side.
2. if "pvp" make player two place it's ship elem on its grid. player two's continue btn should start the game 
3. if 'pve' start the game (do this if 'pvp' is functional) 
*/

export function addContinueBtnEvent(gamemode, gameObj, player) {
  const continueBtn = document.querySelector('#continue-btn');
  continueBtn.addEventListener('click', () => {
    setPlayerGrid(player);
  });
}
