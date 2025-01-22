module.exports = {
  areTwoWays: (arr) => {
    for (let j = 1; j < arr.length; j++) {
      if (2 * arr[j] > arr[j - 1] && 2 * arr[j - 1] > arr[j]) {
        return 'YES';
      }
    }
    return 'NO';
  },
};
