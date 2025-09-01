module.exports = {
  getCountOfIterations: (arrA, arrB) => {
    let sum = 1;
    for (let j = 0; j < arrA.length; j++) {
      if (arrA[j] > arrB[j]) {
        sum += arrA[j] - arrB[j];
      }
    }
    return sum;
  },
};
