import game from '../classes/game';
import { addDropZone } from './gridevents';
import { fillShipContainers, addBtnDirectionElem } from '../dom/shipcontainer';
import addDraggableEvent from './dragdropevent';
import { addClearBtnEvents, addContinueBtnEvent } from './uibtnevent';
import updateStatus from './statusevents';
import { createShipBtnUI } from '../dom/uibtns';

// if restarting the game, remove all clear all grid-elem classes
function clearGridElemClass() {
  const gridElems = document.querySelectorAll('.attacked');
  console.log(gridElems);
  gridElems.forEach(elem => {
    elem.classList.remove('attacked');
    if (elem.classList.contains('hit')) {
      elem.classList.remove('hit');
    }
  });
  const gridElem = document.querySelectorAll('.grid-elem');
  console.log(gridElem);
}

function clearEndGameModal() {
  const announcementWrapper = document.querySelector('#announcement-wrapper');
  announcementWrapper.firstChild.remove();
  const restartBtnWrapper = document.querySelector('#restart-btn-wrapper');
  restartBtnWrapper.firstChild.remove();
}

export function startPvp(input, modal) {
  game.startGame(input);
  fillShipContainers(game.playerOne.type);
  addBtnDirectionElem(game.playerOne.type);
  createShipBtnUI();
  addDropZone(game.playerOne.type);
  addDraggableEvent();
  addClearBtnEvents();
  addContinueBtnEvent();
  updateStatus(game);
  clearGridElemClass();
  clearEndGameModal();
  modal.close();
}

export function startPve(input, modal) {
  game.startGame(input);
  fillShipContainers(game.playerOne.type);
  addBtnDirectionElem(game.playerOne.type);
  createShipBtnUI();
  addDropZone(game.playerOne.type);
  addDraggableEvent();
  addClearBtnEvents();
  addContinueBtnEvent(game.mode, game, game.playerOne);
  updateStatus(game);
  clearGridElemClass();
  clearEndGameModal();
  modal.close();
}
