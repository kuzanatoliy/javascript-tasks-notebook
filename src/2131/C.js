module.exports = {
  getOperationsCount: (k, arrA, arrB) => {
    const tempA = arrA
      .map((item) => Math.min(item % k, k - (item % k)))
      .sort((a, b) => a - b);
    const tempB = arrB
      .map((item) => Math.min(item % k, k - (item % k)))
      .sort((a, b) => a - b);
    for (let j = 0; j < arrA.length; j++) {
      if (tempA[j] !== tempB[j]) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
