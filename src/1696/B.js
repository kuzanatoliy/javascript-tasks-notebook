module.exports = {
  getCountOfOperations: (arr) => {
    let res = 0;
    for (let i = 0, j = 0; i < arr.length; i = ++j) {
      if (arr[i] === 0) {
        continue;
      }
      while (j + 1 < arr.length && arr[j + 1] !== 0) {
        j++;
      }
      res++;
    }
    return Math.min(res, 2);
  },
};
