const gameModal = document.querySelector('#game-dialog');
const cancelBtn = document.querySelector('#clear-btn-wrapper');
const continueBtn = document.querySelector('#continue-btn-wrapper');
const playBtn = document.querySelector('#play-btn-wrapper');

function createBtnElem(wrapper) {
  let btn = document.createElement('button');
  wrapper.appendChild(btn);
  if (wrapper.id === 'clear-btn-wrapper') {
    btn.setAttribute('id', 'clear-btn');
    btn.textContent = 'Clear';
  }
  if (wrapper.id === 'continue-btn-wrapper') {
    btn.setAttribute('id', 'continue-btn');
    btn.textContent = 'Continue';
  }
}

function createPlayBtn() {
  let btn = document.createElement('button');
  playBtn.appendChild(btn);
  btn.setAttribute('id', 'play-btn');
  btn.textContent = 'Play';
  btn.addEventListener('click', () => {
    gameModal.showModal();
  });
}

export function createShipBtnUI() {
  createBtnElem(cancelBtn);
  createBtnElem(continueBtn);
  const playElem = document.querySelector('#play-btn');
  playElem.remove();
}

export function removeShipBtnUI() {
  const clearBtnElem = document.querySelector('#clear-btn');
  const continueBtnElem = document.querySelector('#continue-btn');
  clearBtnElem.remove();
  continueBtnElem.remove();
}

createPlayBtn();
