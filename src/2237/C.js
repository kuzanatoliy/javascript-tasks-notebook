module.exports = {
  getMaxSum: (arr) => {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
      let j = i;
      while (j < arr.length - 1 && arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp + arr[j];
        j++;
      }
      maxSum = Math.max(maxSum, arr[j]);
      i = j;
    }
    return maxSum;
  },
};
