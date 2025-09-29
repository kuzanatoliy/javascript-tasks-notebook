module.exports = {
  getMinCountOfRecoloredCells: (str, k) => {
    let min = 0;
    for (let j = 0; j < k; j++) {
      min += str[j] === 'W';
    }
    let d = min;
    for (let jj = k; jj < str.length; jj++) {
      d = d - (str[jj - k] === 'W') + (str[jj] === 'W');
      if (d < min) {
        min = d;
      }
    }
    return min;
  },
};
