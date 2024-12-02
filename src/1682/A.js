module.exports = {
  getCountOfIndexes: (str) => {
    const m = Math.floor(str.length / 2);
    let count = 1;
    let j = m - 1;
    while (j >= 0 && str[j] === str[m]) {
      count++;
      j--;
    }
    j = m + 1;
    while (j < str.length && str[j] === str[m]) {
      count++;
      j++;
    }
    return count;
  },
};
