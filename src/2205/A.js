/* eslint-disable prefer-destructuring */
module.exports = {
  transformPermutation: (arr) => {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr.length) {
        arr[j] = arr[0];
        break;
      }
    }
    arr[0] = arr.length;
    return arr;
  },
};
