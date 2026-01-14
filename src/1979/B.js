module.exports = {
  getLengthOfLongestCommonSubsegment: (a, b) => {
    let r = a ^ b;
    let res = 0;
    while (r % 2 === 0) {
      res += 1;
      r /= 2;
    }
    return 2 ** res;
  },
};
