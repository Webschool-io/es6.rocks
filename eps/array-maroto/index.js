const create = require('random-numbers')

const range = (start, end) => (
  Array.from({ length: end - start + 1 }, (x, i) => create.randomNumber())
);

console.log(range(1, 5))