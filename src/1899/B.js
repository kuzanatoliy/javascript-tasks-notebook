/* eslint-disable max-depth */
module.exports = {
  getTeleportsCount: (arr) => {
    let d = 0;
    if (arr.length > 1) {
      const border = arr.length / 2;
      for (let j = 1; j <= border; j++) {
        if (arr.length % j) {
          continue;
        }
        let max = 0;
        let min = Infinity;
        for (let jj = 0; jj < arr.length; jj += j) {
          let sum = 0;
          for (let jjj = 0; jjj < j; jjj++) {
            sum += arr[jj + jjj];
          }
          if (sum < min) {
            min = sum;
          }
          if (sum > max) {
            max = sum;
          }
        }
        d = Math.max(d, max - min);
      }
    }
    return d;
  },
};
