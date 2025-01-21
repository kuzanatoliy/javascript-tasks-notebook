module.exports = {
  getMinSum: (arrA, arrB) => {
    let sum = 0;
    for (let j = 1; j < arrA.length; j++) {
      sum += Math.min(
        Math.abs(arrA[j - 1] - arrA[j]) + Math.abs(arrB[j - 1] - arrB[j]),
        Math.abs(arrA[j - 1] - arrB[j]) + Math.abs(arrB[j - 1] - arrA[j])
      );
    }
    return sum;
  },
};
