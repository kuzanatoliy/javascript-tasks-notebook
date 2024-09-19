module.exports = {
  getCountOfStolenNumbers: (arr) => {
    let count = 0;
    arr.sort((a, b) => a - b);
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] - arr[j - 1] > 1) {
        count += arr[j] - arr[j - 1] - 1;
      }
    }
    return count;
  },
};
