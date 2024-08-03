const cancelBtn = document.querySelector('#cancel-btn-wrapper');
const continueBtn = document.querySelector('#continue-btn-wrapper');

function createBtnElem(wrapper) {
  let btn = document.createElement('button');
  wrapper.appendChild(btn);
  if (wrapper.id === 'cancel-btn-wrapper') {
    btn.setAttribute('id', 'cancel-btn');
    btn.textContent = 'Clear';
  }
  if (wrapper.id === 'continue-btn-wrapper') {
    btn.setAttribute('id', 'cancel-btn');
    btn.textContent = 'Continue';
  }
}

createBtnElem(cancelBtn);
createBtnElem(continueBtn);
