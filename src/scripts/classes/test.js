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
