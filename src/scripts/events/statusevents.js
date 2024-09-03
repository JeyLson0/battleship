export default function updateStatus(gameObj, bool = undefined, status = 0) {
  const turnStatusBar = document.querySelector('#turn-status');
  const gameStatusBar = document.querySelector('#game-status');
  switch (gameObj.state) {
    // Player one ship placement
    case 0:
      turnStatusBar.textContent = 'Player one';
      gameStatusBar.textContent = 'Ship placement';
      if (bool === false && status === 1) {
        gameStatusBar.textContent = 'Invalid placement. Ship over grid';
      }
      if (bool === false && status === 2) {
        gameStatusBar.textContent =
          'Invalid placement. Ship over occupied space';
      }
      if (bool === false && status === 3) {
        gameStatusBar.textContent = 'Missing ship';
      }
      break;
    // Player two ship placement
    case 1:
      turnStatusBar.textContent = 'Player two';
      gameStatusBar.textContent = 'Ship placement';
      if (bool === false && status === 1) {
        gameStatusBar.textContent = 'Invalid placement. Ship over grid';
      }
      if (bool === false && status === 2) {
        gameStatusBar.textContent =
          'Invalid placement. Ship over occupied space';
      }
      if (bool === false && status === 3) {
        gameStatusBar.textContent = 'Missing ship';
      }
      break;
    // Computer ship placement
    case 2:
      turnStatusBar.textContent = 'Computer';
      gameStatusBar.textContent = 'Randomizing placement';
      break;
    // Player one's turn
    case 3:
      turnStatusBar.textContent = `Player one's turn.`;
      gameStatusBar.textContent = '';
      if (bool === undefined && status === 1) {
        gameStatusBar.textContent = 'Cell already attacked!';
      }
      if (bool === undefined && status === 2) {
        gameStatusBar.textContent = `Wrong grid.`;
      }
      if (bool === true && status === 0) {
        gameStatusBar.textContent = 'Hit!';
      }
      if (bool === true && status === 'destroyer') {
        gameStatusBar.textContent = 'Hit! Destroyer destroyed!';
      }
      if (bool === true && status === 'submarine') {
        gameStatusBar.textContent = 'Hit! Submarine destroyed!';
      }
      if (bool === true && status === 'cruiser') {
        gameStatusBar.textContent = 'Hit! Cruiser destroyed!';
      }
      if (bool === true && status === 'carrier') {
        gameStatusBar.textContent = 'Hit! Carrier destroyed!';
      }
      if (bool === true && status === 'battleship') {
        gameStatusBar.textContent = 'Hit! Battleship destroyed!';
      }
      if (bool === false) {
        if (gameObj.mode === 'pvp') {
          turnStatusBar.textContent = `Player two's turn.`;
          gameStatusBar.textContent = `Miss!`;
        } else {
          turnStatusBar.textContent = `Computer's turn.`;
          gameStatusBar.textContent = `Miss!`;
        }
      }
      break;
    // Player two's turn
    case 4:
      turnStatusBar.textContent = `Player two's turn.`;
      if (bool === undefined && status === 1) {
        gameStatusBar.textContent = 'Cell already attacked!';
      }
      if (bool === undefined && status === 2) {
        gameStatusBar.textContent = `Wrong grid.`;
      }
      if (bool === true && status === 0) {
        gameStatusBar.textContent = 'Hit!';
      }
      if (bool === true && status === 'destroyer') {
        gameStatusBar.textContent = 'Hit! Destroyer destroyed!';
      }
      if (bool === true && status === 'submarine') {
        gameStatusBar.textContent = 'Hit! Submarine destroyed!';
      }
      if (bool === true && status === 'cruiser') {
        gameStatusBar.textContent = 'Hit! Cruiser destroyed!';
      }
      if (bool === true && status === 'carrier') {
        gameStatusBar.textContent = 'Hit! Carrier destroyed!';
      }
      if (bool === true && status === 'battleship') {
        gameStatusBar.textContent = 'Hit! Battleship destroyed!';
      }
      if (bool === false) {
        turnStatusBar.textContent = `Player one's turn.`;
        gameStatusBar.textContent = `Miss!`;
      }
      break;
    // Computer's turn
    case 5:
      turnStatusBar.textContent = `Computer's turn.`;
      gameStatusBar.textContent = ``;
      if (bool === true && status === 0) {
        gameStatusBar.textContent = 'Hit!';
      }
      if (bool === true && status === 'destroyer') {
        gameStatusBar.textContent = 'Hit! Destroyer destroyed!';
      }
      if (bool === true && status === 'submarine') {
        gameStatusBar.textContent = 'Hit! Submarine destroyed!';
      }
      if (bool === true && status === 'cruiser') {
        gameStatusBar.textContent = 'Hit! Cruiser destroyed!';
      }
      if (bool === true && status === 'carrier') {
        gameStatusBar.textContent = 'Hit! Carrier destroyed!';
      }
      if (bool === true && status === 'battleship') {
        gameStatusBar.textContent = 'Hit! Battleship destroyed!';
      }
      if (bool === false) {
        turnStatusBar.textContent = `Player one's turn.`;
        gameStatusBar.textContent = ``;
      }
      break;
    // End game
    case 6:
      turnStatusBar.textContent = '';
      gameStatusBar.textContent = '';
      break;
    default:
      turnStatusBar.textContent = 'undefined';
      gameStatusBar.textContent = 'undefined';
  }
}
