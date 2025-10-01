module.exports = {
  getCountOfVariants: (num) => (num % 2 ? 0 : 2 ** (num / 2)),
};
