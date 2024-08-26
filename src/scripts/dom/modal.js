import { startPve, startPvp } from '../events/modalevent';

const gameModal = document.querySelector('#game-dialog');
export default gameModal;

const pvpBtn = document.querySelector('.pvp-btn');
const pveBtn = document.querySelector('.pve-btn');

pvpBtn.addEventListener('click', e => {
  let input = e.target.value;
  startPvp(input, gameModal);
});

pveBtn.addEventListener('click', e => {
  let input = e.target.value;
  startPve(input, gameModal);
});
