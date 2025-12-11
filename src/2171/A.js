module.exports = {
  getCountOfConfigurations: (num) => (num % 2 ? 0 : Math.floor(num / 4) + 1),
};
