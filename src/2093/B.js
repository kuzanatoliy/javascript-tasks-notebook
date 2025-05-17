module.exports = {
  getCountOfOperations: (snum) => {
    let count = 0;
    let j = snum.length - 1;
    while (snum[j] === '0') {
      j--;
    }
    for (let jj = j; jj >= 0; jj--) {
      count += snum[jj] === '0';
    }
    return snum.length - count - 1;
  },
};
