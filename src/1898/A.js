module.exports = {
  getReplaceOperationProps: (str, k) => {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      count += str[j] === 'B';
    }
    if (count < k) {
      const d = k - count;
      let c = 0;
      for (let jj = 0; jj < str.length; jj++) {
        c += str[jj] === 'A';
        if (c === d) {
          return [1, [jj + 1, 'B']];
        }
      }
    }
    if (count > k) {
      let cc = 0;
      for (let jjj = str.length; jjj >= 0; jjj--) {
        cc += str[jjj] === 'B';
        if (cc === k) {
          return [1, [jjj, 'A']];
        }
      }
    }
    return [0];
  },
};
