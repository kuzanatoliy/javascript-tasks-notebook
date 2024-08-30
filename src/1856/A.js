module.exports = {
  getMaxCountOfOperations: (array) => {
    let res = 0;
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        res = Math.max(res, array[i - 1]);
      }
    }
    return res;
  },
};
