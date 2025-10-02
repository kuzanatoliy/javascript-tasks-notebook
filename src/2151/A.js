module.exports = {
  getCountOfSubarrs: (num, arr) => {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1] >= arr[j]) {
        return 1;
      }
    }
    return num - arr[arr.length - 1] + 1;
  },
};
