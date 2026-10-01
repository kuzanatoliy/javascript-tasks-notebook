module.exports = {
  getMaxNumbersCount: (arr) => {
    let count = 0;
    let count1 = 0;
    let count2 = 0;
    for (let j = 0; j < arr.length; j++) {
      count += arr[j] % 2;
      count1 += arr[j] % 4 === 0;
      count2 += arr[j] % 4 === 2;
    }
    return Math.max(count, count1, count2);
  },
};
