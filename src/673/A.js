module.exports = {
  getDelay: (array) => {
    const arr = [0, ...array, 90];
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] - arr[j - 1] > 15) {
        return arr[j - 1] + 15;
      }
    }
    return 90;
  },
};
