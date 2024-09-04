module.exports = {
  getStep: (array) => {
    let max = 0;
    let min = 1000000000;
    for (let j = 1; j < array.length; j++) {
      const ml = parseInt((array[j - 1] + array[j]) / 2);
      const mr = parseInt((array[j - 1] + array[j] + 1) / 2);
      if (array[j - 1] < array[j]) {
        min = Math.min(min, ml);
        continue;
      }
      if (array[j - 1] > array[j]) {
        max = Math.max(max, mr);
        continue;
      }
    }
    if (min >= max) {
      return max;
    }
    return -1;
  },
};
