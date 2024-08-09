module.exports = {
  getMinCountOfOccupiedDiagonals: (m, c) => {
    if (c === 0) {
      return 0;
    }
    let count = 1;
    c -= m;
    m--;
    while (m && c > 0) {
      count++;
      c -= m;
      m = count % 2 === 0 ? m : m - 1;
    }
    return count;
  },
};
