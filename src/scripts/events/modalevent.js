import game from '../classes/game';
import { addDropZone, removeDropZone } from './gridevents';
import { fillShipContainers, addBtnDirectionElem } from '../dom/shipcontainer';
import addDraggableEvent from './dragdropevent';
import { addClearBtnEvents, addContinueBtnEvent } from './uibtnevent';

export function startPvp(input, modal) {
  game.startGame(input);
  fillShipContainers(game.playerOne.type);
  addBtnDirectionElem(game.playerOne.type);
  addDropZone(game.playerOne.type);
  addDraggableEvent();
  addClearBtnEvents();
  addContinueBtnEvent();
  modal.close();
}

export function startPve(input, modal) {
  game.startGame(input);
  fillShipContainers(game.playerOne.type);
  addBtnDirectionElem(game.playerOne.type);
  addDropZone(game.playerOne.type);
  addDraggableEvent();
  addClearBtnEvents();
  addContinueBtnEvent(game.mode, game, game.playerOne);
  modal.close();
}
