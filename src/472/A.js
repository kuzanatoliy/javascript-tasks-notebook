module.exports = {
  getParts: (number) => (number % 2 === 0 ? [4, number - 4] : [9, number - 9]),
};
