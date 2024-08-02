import { startPve, startPvp } from '../events/modalevent';

const modal = document.querySelector('#opening-dialog');
modal.showModal();

const pvpBtn = document.querySelector('.pvp-btn');
const pveBtn = document.querySelector('.pve-btn');

pvpBtn.addEventListener('click', e => {
  let input = e.target.value;
  startPvp(input, modal);
});

pveBtn.addEventListener('click', e => {
  let input = e.target.value;
  startPve(input, modal);
});
