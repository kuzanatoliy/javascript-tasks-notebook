module.exports = {
  getNumbers: (num) => (num % 2 === 1 ? [-1] : [1, num / 2]),
};
