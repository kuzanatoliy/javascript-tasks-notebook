module.exports = {
  getMaxSubArraySum: (arr) => {
    let [currSum] = arr;
    let resSum = currSum;
    for (let j = 1; j < arr.length; j++) {
      currSum = Math.max(arr[j], currSum + arr[j]);
      resSum = Math.max(currSum, resSum);
    }
    return resSum;
  },
};
