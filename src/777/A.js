const STATES = [
  [0, 1, 2],
  [1, 0, 2],
  [1, 2, 0],
  [2, 1, 0],
  [2, 0, 1],
  [0, 2, 1],
];

module.exports = {
  getInitPosition: (num, position) => STATES[num % 6][position],
};
