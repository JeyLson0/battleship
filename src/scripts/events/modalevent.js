import game from '../classes/gamemode';
import { addDropZone, removeDropZone } from './gridevents';
import { fillShipContainers, addBtnDirectionElem } from '../dom/shipcontainer';
import addDraggableEvent from './dragdropevent';
import addClearBtnEvents from './uibtnevent';

export function startPvp(input, modal) {
  game.startGame(input);
  fillShipContainers(game.playerOne.type);
  addBtnDirectionElem(game.playerOne.type);
  addDropZone(game.playerOne.type);
  addDraggableEvent();
  addClearBtnEvents();
  modal.close();
}

export function startPve(input, modal) {
  game.startGame(input);
  fillShipContainers(game.playerOne.type);
  addBtnDirectionElem(game.playerOne.type);
  addClearBtnEvents();
  modal.close();
}
