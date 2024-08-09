function constructor(type) {
  if (type !== 'player' || type !== 'computer') {
    throw new Error('argument should be player or computer');
  }
  return {
    a: type,
  };
}

let a = 'player';

console.log(a !== 'player' || a !== 'computer');

console.log(a !== 'player');

const source = document.querySelector('#source');
source.addEventListener('dragstart', ev => {
  console.log('dragStart');
  // Change the source element's background color
  // to show that drag has started
  ev.currentTarget.classList.add('dragging');
  // Clear the drag data cache (for all formats/types)
  ev.dataTransfer.clearData();
  // Set the drag's format and data.
  // Use the event target's id for the data
  ev.dataTransfer.setData('text/plain', ev.target.id);
});
source.addEventListener('dragend', ev =>
  ev.target.classList.remove('dragging'),
);
