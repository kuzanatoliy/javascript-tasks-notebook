module.exports = {
  getCountOfOperations: (arr) => {
    let c1 = 0;
    let c2 = 0;
    let c = 0;
    const counts = [];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] % 2 === 1) {
        c1++;
      } else {
        c2++;
        c = 1;
        arr[j] /= 2;
        while (arr[j] % 2 === 0) {
          arr[j] /= 2;
          c++;
        }
      }
      counts.push(c);
    }
    if (c1 === arr.length) {
      return 0;
    }
    if (c1 > 0) {
      return c2;
    }
    return Math.min(...counts) + arr.length - 1;
  },
};
