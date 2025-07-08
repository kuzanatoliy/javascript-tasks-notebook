module.exports = {
  getCountOfSteps: (arr, s) => {
    if (s <= arr[0]) {
      return arr[arr.length - 1] - s;
    } else if (s >= arr[arr.length - 1]) {
      return s - arr[0];
    } else {
      return (
        Math.min(s - arr[0], arr[arr.length - 1] - s) +
        arr[arr.length - 1] -
        arr[0]
      );
    }
  },
};
