module.exports = {
  getCountOfOperations: (a, b, aim) => {
    let count = 0;
    while (a <= aim && b <= aim) {
      count++;
      if (a < b) {
        a += b;
        continue;
      }
      b += a;
    }
    return count;
  },
};
