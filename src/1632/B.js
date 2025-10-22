module.exports = {
  getPermutation: (num) => {
    let largestPowOf2 = 1;
    let temp = num - 1;
    while (temp >> 1 > 0) {
      temp >>= 1;
      largestPowOf2 <<= 1;
    }
    const ans = [];
    for (let j = 1; j < largestPowOf2; j++) {
      ans.push(j);
    }
    ans.push(0);
    for (let jj = largestPowOf2; jj < num; jj++) {
      ans.push(jj);
    }
    return ans;
  },
};
