function directionalEvent(event) {
  if (event.target.value === 'horizontal') {
    event.target.value = 'vertical';
    event.target.textContent = 'vertical';
  } else if (event.target.value === 'vertical') {
    event.target.value = 'horizontal';
    event.target.textContent = 'horizontal';
  }
}

export function addDirectionalEvent() {
  const directionBtn = document.querySelector('.btn-direction');
  directionBtn.addEventListener('click', directionalEvent);
}

// create a function that removes the element after player placed ship on board
export function removeDirectionalEvent() {
  const direction = document.querySelector('.btn-direction');
}
