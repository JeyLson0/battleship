import addDraggableEvent from './dragdropevent';
import { removePlayerUI, setPlayerGrid } from '../accesoryfunc';
import { removeDropZone, addDropZone } from './gridevents';
import { fillShipContainers, addBtnDirectionElem } from '../dom/shipcontainer';
import game from '../classes/game';
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
function switchPlayerTwo() {
  const playerTwo = game.playerTwo;
  fillShipContainers(playerTwo.type);
  addBtnDirectionElem(playerTwo.type);
  addDropZone(playerTwo.type);
  addDraggableEvent();
  addClearBtnEvents();
}

function continueBtnEvent() {
  const gamemode = game.mode;
  const playerOne = game.playerOne;
  const playerTwo = game.playerTwo;
  if (gamemode === 'pvp') {
    if (game.state === 0) {
      if (setPlayerGrid(playerOne)) {
        removePlayerUI(playerOne.type);
        removeDropZone(playerOne.type);
        switchPlayerTwo();
        game.statePlayerTwoPlacement();
      }
    }
    if (game.state === 1) {
      if (setPlayerGrid(playerTwo)) {
        // start game function -> player one start first
        game.statePlayerOneTurn();
        console.log('start the game');
      }
    }
  }
  if (gamemode === 'pve') {
    game.stateComputerPlacement();
  }
}

export function addContinueBtnEvent() {
  const continueBtn = document.querySelector('#continue-btn');
  continueBtn.addEventListener('click', continueBtnEvent);
}
