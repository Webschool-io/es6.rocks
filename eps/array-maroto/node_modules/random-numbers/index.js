'use strict'

const create = require('./randomEvenNumbers')
// const create = require('even-random-numbers')
const arr = []

for(let i = 0; i < 10; i++) {
  let even = create.randomEvenNumbers()
  arr[i] = even
}

console.log('arr', arr)