/* eslint-disable prefer-destructuring */
module.exports = {
  isProgressiveSquare: (num, c, d, array) => {
    const arr = array.sort((a, b) => a - b);
    const temp = [];
    for (let j = 0, k = array[0]; j < num; j++, k += c) {
      temp.push(k);
      for (let jj = 1, kk = k + d; jj < num; jj++, kk += d) {
        temp.push(kk);
      }
    }
    temp.sort((a, b) => a - b);
    for (let jjj = 0; jjj < temp.length; jjj++) {
      if (temp[jjj] !== arr[jjj]) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
