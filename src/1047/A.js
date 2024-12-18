module.exports = {
  getNumbers: (num) => (num % 3 === 0 ? [1, 1, num - 2] : [1, 2, num - 3]),
};
