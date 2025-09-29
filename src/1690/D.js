module.exports = {
  getMinCountOfRecoloredCells: (str, k) => {
    let min = 0;
    for (let j = 0; j < k; j++) {
      min += str[j] === 'W';
    }
    for (let jj = k + 1; jj < str.length; jj++) {
      const d = min - (str[jj - k - 1] === 'W') + (str[jj] === 'W');
      if (d < min) {
        min = d;
      }
    }
    return min;
  },
};
