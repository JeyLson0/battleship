export default function addGridElemEvent(elem) {
  elem.addEventListener('click', e => {
    console.log(e.target.value);
  });
}
