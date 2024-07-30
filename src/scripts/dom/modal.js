const modal = document.querySelector('#opening-dialog');
modal.showModal();

const pvpBtn = document.querySelector('.pvp-btn');
const pveBtn = document.querySelector('.pve-btn');

pvpBtn.addEventListener('click', event => {
  console.log(event.target.value);
  modal.close();
});

pveBtn.addEventListener('click', event => {
  console.log(event.target.value);
  modal.close();
});

// use this event to start the game in pvp or pve
// - once clicked, start the gamemode
// - remove or close modal
