module.exports = {
  getCountOfWords: (strs, l) => {
    let count = 0;
    while (count < strs.length && l >= strs[count].length) {
      l -= strs[count].length;
      count++;
    }
    return count;
  },
};
