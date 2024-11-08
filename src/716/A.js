module.exports = {
  getCountOfWords: (c, timing) => {
    let count = 1;
    for (let j = timing.length - 2; j >= 0; j--) {
      if (timing[j + 1] - timing[j] > c) {
        return count;
      }
      count++;
    }
    return timing.length;
  },
};
