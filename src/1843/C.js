module.exports = {
  binaryTreeSum: (nodeNumber) => {
    let sum = BigInt(nodeNumber);
    let tmp = sum;
    while (tmp > 1n) {
      tmp >>= 1n;
      sum += tmp;
    }
    return sum;
  },
};
