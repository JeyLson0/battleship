const cancelBtn = document.querySelector('#clear-btn-wrapper');
const continueBtn = document.querySelector('#continue-btn-wrapper');

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

createBtnElem(cancelBtn);
createBtnElem(continueBtn);
