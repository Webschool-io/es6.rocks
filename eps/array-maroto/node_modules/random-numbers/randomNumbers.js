function randomNumber(start, end) {
  const min = start || 1;
  const max = end || 100;
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = { randomNumber }
