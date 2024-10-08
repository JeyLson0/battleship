import game from '../classes/game';
import updateStatus from './statusevents';
import openEndModal from '../dom/endgamemodal';

// state 3 - player one turn
// state 4 - player two turn
// state 5 - computer turn

const gameObj = game;

function endGame(playerType) {
  gameObj.stateEndGame(playerType);
  openEndModal();
}

function compAttack(playerOne) {
  return new Promise(resolve => {
    setTimeout(() => {
      const computer = gameObj.playerTwo;
      const compMove = computer.playMove(playerOne);
      if (compMove === true) {
        updateStatus(gameObj, true, 0);
      }
      resolve(compMove);
    }, 800);
  });
}

// player one grid click event
function playerOneGridElemEvent(event) {
  if (gameObj.state === 4) {
    const elem = event.target;
    const data = elem.dataset.coordinates.split(', ');
    const yCoor = Math.floor(data[0]);
    const xCoor = Math.floor(data[1]);
    const playerOneGameboard = gameObj.playerOne.gameBoard;
    if (elem.classList.contains('attacked')) {
      return console.log('grid cell already attacked.');
    }
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
    const gameover = playerOneGameboard.scanBoard();
    if (gameover) {
      if (gameObj.mode === 'pvp') {
        endGame('Player Two');
      } else {
        endGame(`Computer`);
      }
    }
  }
}

// player two grid click event
async function playerTwoGridElemEvent(event) {
  if (gameObj.state === 3) {
    const elem = event.target;
    const data = elem.dataset.coordinates.split(', ');
    const yCoor = Math.floor(data[0]);
    const xCoor = Math.floor(data[1]);
    const playerTwoGameboard = gameObj.playerTwo.gameBoard;
    if (elem.classList.contains('attacked')) {
      return console.log('grid cell already attacked.');
    }
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
      gameObj.stateComputerTurn();
      updateStatus(gameObj);
      while (true) {
        updateStatus(gameObj);
        const computerHit = await compAttack(gameObj.playerOne);
        if (!computerHit) {
          updateStatus(gameObj, false);
          break;
        }
        const playerOneGameover = gameObj.playerOne.gameBoard.scanBoard();
        if (playerOneGameover) {
          endGame('Computer');
          break;
        }
      }
      gameObj.statePlayerOneTurn();
    }

    const gameover = playerTwoGameboard.scanBoard();
    if (gameover) {
      endGame(`Player One`);
    }
  }
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

// once all grid board is set. Start initial turn with player one
export default function startInitTurn() {
  game.statePlayerOneTurn();
  addEventToGridElem();
}
