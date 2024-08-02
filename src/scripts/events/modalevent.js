import game from '../classes/gamemode';

export function startPvp(input, modal) {
  game.startGame(input);
  modal.close();
}

export function startPve(input, modal) {
  game.startGame(input);
  modal.close();
}
