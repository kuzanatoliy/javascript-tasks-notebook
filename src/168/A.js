module.exports = {
  getCountOfClones: (num, x, y) => Math.max(Math.ceil((y / 100) * num) - x, 0),
};
