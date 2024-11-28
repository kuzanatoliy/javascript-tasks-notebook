/* eslint-disable no-empty */
/* eslint-disable prefer-destructuring */
module.exports = {
  getCountOfOperations: (arr) => {
    let j = 0;
    for (j = 1; j < arr.length && arr[j - 1] < arr[j]; j++) {}
    const temp = [];
    if (j !== arr.length) {
      if ((arr[0] + arr[arr.length - 1]) % 2 === 0) {
        arr[0] = arr[arr.length - 1];
      } else {
        arr[arr.length - 1] = arr[0];
      }
      temp.push([1, arr.length]);
      for (j = 1; j < arr.length - 1; j++) {
        if ((arr[0] + arr[j]) % 2 === 1) {
          temp.push([1, j + 1]);
        } else {
          temp.push([j + 1, arr.length]);
        }
      }
    }
    return temp;
  },
};
