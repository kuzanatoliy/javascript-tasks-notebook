module.exports = {
  getCountOfOperations: (str) => {
    let c1 = 0;
    for (let j = 0; j < str.length; j++) {
      c1 += str[j] === '0';
    }
    let count = 0;
    for (let jj = c1; jj < str.length; jj++) {
      count += str[jj] === '0';
    }
    return count;
  },
};
