import game from '../classes/game';
import updateStatus from './statusevents';

// state 3 - player one turn
// state 4 - player two turn
// state 5 - computer turn

const gameObj = game;

// player one grid click event
function playerOneGridElemEvent(event) {
  const elem = event.target;
  const data = elem.dataset.coordinates.split(', ');
  const yCoor = Math.floor(data[0]);
  const xCoor = Math.floor(data[1]);
  const playerOneGameboard = gameObj.playerOne.gameBoard;
  if (elem.classList.contains('attacked')) {
    return console.log('grid cell already attacked.');
  }
  if (gameObj.state === 4 || gameObj.state === 5) {
    elem.classList.add('attacked');
    const hit = playerOneGameboard.receiveAttack(yCoor, xCoor); // Bool
    if (hit) {
      elem.classList.add('hit');
      const shipObj = playerOneGameboard.grid[yCoor][xCoor];
      const shipSunk = shipObj.isSunk(); // Bool
      updateStatus(gameObj, true, 0);
      if (shipSunk) {
        updateStatus(gameObj, true, shipObj.type);
      }
      playerOneGameboard.removeShip(yCoor, xCoor);
    } else {
      updateStatus(gameObj, false);
      gameObj.statePlayerOneTurn();
    }
  }
  playerOneGameboard.scanBoard();
}

// player two grid click event
function playerTwoGridElemEvent(event) {
  const elem = event.target;
  const data = elem.dataset.coordinates.split(', ');
  const yCoor = Math.floor(data[0]);
  const xCoor = Math.floor(data[1]);
  const playerTwoGameboard = gameObj.playerTwo.gameBoard;
  if (elem.classList.contains('attacked')) {
    return console.log('grid cell already attacked.');
  }
  if (gameObj.state === 3) {
    elem.classList.add('attacked');
    const hit = playerTwoGameboard.receiveAttack(yCoor, xCoor); // Bool
    if (hit) {
      elem.classList.add('hit');
      const shipObj = playerTwoGameboard.grid[yCoor][xCoor];
      const shipSunk = shipObj.isSunk(); // Bool
      updateStatus(gameObj, true, 0);
      if (shipSunk) {
        updateStatus(gameObj, true, shipObj.type);
      }
      playerTwoGameboard.removeShip(yCoor, xCoor);
    } else if (gameObj.mode === 'pvp') {
      updateStatus(gameObj, false);
      gameObj.statePlayerTwoTurn();
    } else {
      updateStatus(gameObj, false);
      gameObj.stateComputerTurn();
    }
  }
  playerTwoGameboard.scanBoard();
}

// add events to all grid elem
function addEventToGridElem() {
  const playerOneGrid = document.querySelectorAll(
    '#player-one-grid>.grid-elem',
  );
  const playerTwoGrid = document.querySelectorAll(
    '#player-two-grid>.grid-elem',
  );
  playerOneGrid.forEach(gridElem => {
    gridElem.addEventListener('click', playerOneGridElemEvent);
  });
  playerTwoGrid.forEach(gridElem => {
    gridElem.addEventListener('click', playerTwoGridElemEvent);
  });
}

// removes entire grid elem event
function removeGridElemEvent() {
  const playerOneGrid = document.querySelectorAll(
    '#player-one-grid>.grid-elem',
  );
  const playerTwoGrid = document.querySelectorAll(
    '#player-two-grid>.grid-elem',
  );
  playerOneGrid.forEach(gridElem => {
    gridElem.removeEventListener('click', playerOneGridElemEvent);
  });
  playerTwoGrid.forEach(gridElem => {
    gridElem.removeEventListener('click', playerTwoGridElemEvent);
  });
}

// once all grid board is set. Start initial turn with player one
export default function startInitTurn() {
  console.log('start init');
  game.statePlayerOneTurn();
  addEventToGridElem();
}
