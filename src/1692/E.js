module.exports = {
  getCountOfOperations: (array, purpose) => {
    let sum = 0;
    for (let j = 0; j < array.length; j++) {
      sum += array[j];
    }
    if (sum === purpose) {
      return 0;
    }
    if (sum < purpose) {
      return -1;
    }
    let t = 0;
    let res = 0;
    for (let i = 0, j = 0; i < array.length; i++) {
      if (i > 0) {
        t -= array[i - 1];
      }
      while (j < array.length && t + array[j] <= purpose) {
        t += array[j++];
      }
      res = Math.max(res, j - i);
    }
    return array.length - res;
  },
};
