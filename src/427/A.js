module.exports = {
  getCountOfOccuredCrimes: (order) => {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < order.length; i++) {
      if (order[i] >= 0) {
        sum += order[i];
        continue;
      }
      if (sum === 0) {
        count++;
      } else {
        sum--;
      }
    }
    return count;
  },
};
