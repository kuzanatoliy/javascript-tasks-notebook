module.exports = {
  getMaxPossibleValue: (array) => {
    let max = 0;
    for (let j = 1; j < array.length; j++) {
      const m = array[j] * array[j - 1];
      if (m > max) {
        max = m;
      }
    }
    return max;
  },
};
