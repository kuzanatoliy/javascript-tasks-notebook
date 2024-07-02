/* eslint-disable prefer-destructuring */
module.exports = {
  getMinimumPossiblePenalty: (array) => {
    let f = Infinity;
    let s = array[0];
    let res = 0;
    for (let i = 1; i < array.length; i += 1) {
      if (array[i] > f) {
        s = f;
        f = array[i];
        res += 1;
      } else if (array[i] === f) {
        f = array[i];
      } else if (array[i] > s) {
        f = array[i];
      } else if (array[i] === s) {
        s = array[i];
      } else {
        s = array[i];
      }
    }
    return res;
  },
};
