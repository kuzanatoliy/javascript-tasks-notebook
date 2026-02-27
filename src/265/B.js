module.exports = {
  getCountOfSteps: (arr) => {
    let res = arr.length * 2 - 1 + arr[0];
    for (let j = 1; j < arr.length; j++) {
      res += Math.abs(arr[j] - arr[j - 1]);
    }
    return res;
  },
};
