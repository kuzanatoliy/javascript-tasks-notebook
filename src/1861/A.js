const MAP = {
  1: 13,
  2: 23,
  3: 31,
  4: 41,
  5: 53,
  6: 61,
  7: 71,
  8: 83,
  9: 97,
};

module.exports = {
  transformNumber: (num) => MAP[num.toString()[0]],
};
