const MAP = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];

module.exports = {
  getSegmentsCount: (x, y) => {
    let sum = 0;
    for (let j = x; j <= y; j++) {
      sum += j
        .toString()
        .split('')
        .reduce((a, b) => a + MAP[b], 0);
    }
    return sum;
  },
};
