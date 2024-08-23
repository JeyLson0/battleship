import game from '../classes/game';

// state 3 - player one turn
// state 4 - player two turn
// state 5 - computer turn

function addClickClassElem(elem) {
  elem.classList.add('clicked');
}

function addHoverClassElem(elem) {
  elem.classList.add('hover');
}

// click event
function hitShip(yCoor, xCoor) {
  const playerOneGameboard = game.playerOne.gameBoard;
  const playerTwoGameboard = game.playerTwo.gameBoard;
  if (game.state === 3) {
    console.log(playerTwoGameboard);
    const hit = playerTwoGameboard.receiveAttack(yCoor, xCoor);
    if (hit) {
      const ship = playerTwoGameboard.grid[yCoor][xCoor];
      const type = ship.type;
      const isShipSunk = ship.isSunk();
      if (isShipSunk) {
        console.log(`${type} destroyed`);
      }
      playerTwoGameboard.scanBoard();
    } else {
      // switch turn
    }
  }
  if (game.state === 4) {
    console.log('player two hit ship');
  }
  if (game.state === 5) {
    console.log('computer hit ship');
  }
}

function gridElemEvent(event) {
  // when clicked
  const gameObj = game;
  console.log(event.target);
  const data = event.target.dataset.coordinates.split(', ');
  const yCoor = Math.floor(data[0]);
  const xCoor = Math.floor(data[1]);
  hitShip(yCoor, xCoor);
}

// if player one's turn, opponent's grid is clickable.
function addEventToGrid() {
  const playerOneGrid = document.querySelectorAll(
    '#player-one-grid>.grid-elem',
  );
  const playerTwoGrid = document.querySelectorAll(
    '#player-two-grid>.grid-elem',
  );
  const gameObj = game;
  console.log(gameObj.state);
  if (gameObj.state === 3) {
    playerTwoGrid.forEach(elem => {
      elem.addEventListener('click', gridElemEvent);
      elem.classList.add('clickable');
    });
    console.log(playerTwoGrid);
  }
  if (gameObj.state === 4) {
    playerOneGrid.forEach(elem => {
      elem.addEventListener('click', gridElemEvent);
      elem.classList.add('clickable');
    });
  }
}

// if player one's turn, remove it's grid elem events
function removeGridElemEvent() {
  const playerOneGrid = document.querySelectorAll(
    '#player-one-grid>.grid-elem',
  );
  const playerTwoGrid = document.querySelectorAll(
    '#player-two-grid>.grid-elem',
  );
  const gameObj = game;
  if (gameObj.state === 3) {
    playerOneGrid.forEach(elem => {
      elem.addEventListener('click', gridElemEvent);
      elem.classList.add('clickable');
    });
  }
  if (gameObj.state === 4) {
    playerTwoGrid.forEach(elem => {
      elem.addEventListener('click', gridElemEvent);
      elem.classList.add('clickable');
    });
  }
}

export function switchPlayerTurn() {
  addEventToGrid();
  removeGridElemEvent();
}

export function startInitTurn() {
  console.log('start init');
  game.statePlayerOneTurn();
  console.log(game.state);
  addEventToGrid();
  removeGridElemEvent();
}
