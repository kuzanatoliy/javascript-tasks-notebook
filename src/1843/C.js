export const binaryTreeSum = (nodeNumber) => {
  let sum = BigInt(nodeNumber),
    tmp = sum;
  while (tmp > 1n) {
    tmp = tmp >> 1n;
    sum += tmp;
  }
  return sum;
};
