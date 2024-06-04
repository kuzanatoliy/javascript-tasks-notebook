/* eslint-disable prefer-destructuring */
module.exports = {
  getPossibleWinners: (array) => {
    if (array.length === 1) {
      return [1];
    }
    const arr = array
      .map((item, index) => [item, index])
      .sort((a, b) => a[0] - b[0]);
    let s = arr[0][0] === arr[1][0] ? 0 : 1;
    let sum = arr[0];
    let j = 1;
    while (j < arr.length) {
      if (arr[j][0] - arr[j - 1][0] > sum) {
        s = j;
      }
      sum += arr[j][0];
      j++;
    }
    const result = [];
    for (let jj = s; jj < arr.length; jj++) {
      result.push(arr[jj][1] + 1);
    }
    return result.sort((a, b) => a - b);
  },
};
