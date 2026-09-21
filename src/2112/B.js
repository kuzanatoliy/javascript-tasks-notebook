module.exports = {
  getOperationsCount: (arr) => {
    let fl = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] > arr[j - 1]) {
        fl++;
      } else {
        fl--;
      }
      if (Math.abs(arr[j] - arr[j - 1]) < 2) {
        return 0;
      }
    }
    return Math.abs(fl) === arr.length - 1 ? -1 : 1;
  },
};
