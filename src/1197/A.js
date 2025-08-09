module.exports = {
  getCountOfSteps: (arr) => {
    arr.sort((a, b) => b - a);
    return Math.min(arr[1] - 1, arr.length - 2);
  },
};
