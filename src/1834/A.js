module.exports = {
  getCountOfOperations: (arr) => {
    let sum1 = 0;
    let sum2 = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > 0) {
        sum1++;
      } else {
        sum2++;
      }
    }
    let count = 0;
    if (sum1 < sum2) {
      count = Math.ceil((sum2 - sum1) / 2);
    }
    if ((sum2 - count) % 2 === 1) {
      count++;
    }
    return count;
  },
};
