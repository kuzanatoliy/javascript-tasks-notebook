/* eslint-disable no-unused-vars */
module.exports = {
  getPermutation: (num, k) => {
    const res = [num];
    for (let j = 1; j <= Math.ceil(num / 2); j++) {
      res.push(j);
      res.push(num - j);
    }
    res.length = num;
    return res;
  },
};
