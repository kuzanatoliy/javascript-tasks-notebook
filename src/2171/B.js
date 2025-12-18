/* eslint-disable prefer-destructuring */
module.exports = {
  transformArray: (arr) => {
    for (let j = 1; j < arr.length - 1; j++) {
      if (arr[j] === -1) {
        arr[j] = 0;
      }
    }
    if (arr[0] === -1) {
      arr[0] = arr[arr.length - 1] === -1 ? 0 : arr[arr.length - 1];
    }
    if (arr[arr.length - 1] === -1) {
      arr[arr.length - 1] = arr[0];
    }
    return arr;
  },
};
