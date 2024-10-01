/* eslint-disable prefer-destructuring */
module.exports = {
  getMinNum: (snum) => {
    if (snum.length === 1) {
      return snum;
    }
    if (snum.length === 2) {
      return snum[1];
    }
    let min = snum[0];
    for (let j = 1; j < snum.length; j++) {
      if (min > snum[j]) {
        min = snum[j];
      }
    }
    return min;
  },
};
