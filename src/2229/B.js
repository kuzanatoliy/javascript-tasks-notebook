module.exports = {
  getMaximum: (arrA, arrB) => {
    let ans = 0;
    let sum = 0;
    for (let j = 0; j < arrA.length; j++) {
      let max = arrA[j];
      let min = arrB[j];
      if (arrA[j] < arrB[j]) {
        max = arrB[j];
        min = arrA[j];
      }
      sum += max;
      if (min > ans) {
        ans = min;
      }
    }
    return sum + ans;
  },
};
