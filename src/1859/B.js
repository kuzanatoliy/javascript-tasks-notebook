/* eslint-disable prefer-destructuring */
module.exports = {
  getMaxSum: (arrays) => {
    let min1 = Number.MAX_SAFE_INTEGER;
    let min2 = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    for (let j = 0; j < arrays.length; j++) {
      arrays[j].sort((a, b) => a - b);
      sum += arrays[j][1];
      if (min1 > arrays[j][0]) {
        min1 = arrays[j][0];
      }
      if (min2 > arrays[j][1]) {
        min2 = arrays[j][1];
      }
    }
    return sum + min1 - min2;
  },
};
