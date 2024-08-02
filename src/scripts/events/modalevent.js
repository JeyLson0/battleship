import game from '../classes/gamemode';
import { fillShipContainers, addBtnDirectionElem } from '../dom/shipcontainer';

export function startPvp(input, modal) {
  game.startGame(input);
  fillShipContainers(game.playerOne.type);
  addBtnDirectionElem(game.playerOne.type);
  modal.close();
}

export function startPve(input, modal) {
  game.startGame(input);
  fillShipContainers(game.playerOne.type);
  addBtnDirectionElem(game.playerOne.type);
  modal.close();
}
