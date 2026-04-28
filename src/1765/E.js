module.exports = {
  getCountOfBattles: (num, a, b) => (a > b ? 1 : Math.ceil(num / a)),
};
