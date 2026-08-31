module.exports = {
  getMaxK: (arr) => {
    arr.sort((a, b) => a - b);
    return Math.max(arr[0], arr[1] - arr[0]);
  },
};
