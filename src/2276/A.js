module.exports = {
  getSendwichsCount: (a, b) => (a <= b ? -1 : Math.min(a - b, b)),
};
