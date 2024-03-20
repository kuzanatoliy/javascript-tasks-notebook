module.exports = {
  getCountOfPairs: (men, women) => {
    let j = 0;
    let jj = 0;
    let count = 0;
    men.sort((a, b) => a - b);
    women.sort((a, b) => a - b);
    while (j < men.length && jj < women.length) {
      if (Math.abs(men[j] - women[jj]) <= 1) {
        j++;
        jj++;
        count++;
        continue;
      }
      if (men[j] > women[jj]) {
        jj++;
      } else {
        j++;
      }
    }
    return count;
  },
};
