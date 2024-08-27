import game from '../classes/game';
import { createPlayBtn } from './uibtns';

const gameObj = game;
const endGameModal = document.querySelector('#endgame-dialog');
const gameModal = document.querySelector('#game-dialog');

function createAnnouncementElem(gameWinner) {
  const announcementElem = document.createElement('p');
  announcementElem.textContent = `Winner ${gameWinner}!`;
  const announcementWrapper = document.querySelector('#announcement-wrapper');
  announcementWrapper.append(announcementElem);
}

function createRestartBtn() {
  const restartBtn = document.createElement('button');
  restartBtn.textContent = `Play Again`;
  restartBtn.addEventListener('click', () => {
    endGameModal.close();
    gameModal.showModal();
  });
  const restartWrapper = document.querySelector('#restart-btn-wrapper');
  restartWrapper.append(restartBtn);
}

function addEndGameElems(gameWinner) {
  createAnnouncementElem(gameWinner);
  createRestartBtn();
}

export default function openEndModal() {
  endGameModal.showModal();
  addEndGameElems(gameObj.winner);
  gameObj.restartGame();
  createPlayBtn();
}
