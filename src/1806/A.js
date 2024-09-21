module.exports = {
  getCountOfSteps: (arr) => {
    if (arr[3] < arr[1]) {
      return -1;
    }
    const steps = arr[3] - arr[1];
    arr[0] += steps;
    if (arr[0] < arr[2]) {
      return -1;
    }
    return steps + arr[0] - arr[2];
  },
};
