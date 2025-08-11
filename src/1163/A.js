module.exports = {
  getCountOfGroups: (num, m) => (m === 0 ? 1 : Math.min(num - m, m)),
};
