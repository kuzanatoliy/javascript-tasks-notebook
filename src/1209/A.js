module.exports = {
  getCountOfColors: (array) => {
    let arr = array.sort((a, b) => a - b);
    let count = 0;
    while (arr.length > 0) {
      const [d] = arr;
      arr = arr.filter((item) => item % d !== 0);
      count++;
    }
    return count;
  },
};
