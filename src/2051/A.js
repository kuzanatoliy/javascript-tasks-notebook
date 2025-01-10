module.exports = {
  getMaxDif: (arrA, arrB) => {
    let sum = arrA[arrA.length - 1];
    for (let j = 1; j < arrB.length; j++) {
      const d = arrA[j - 1] - arrB[j];
      if (d > 0) {
        sum += d;
      }
    }

    return sum;
  },
};
