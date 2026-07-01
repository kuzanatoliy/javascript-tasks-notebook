module.exports = {
  getMinAmount: (c, arrA, arrB) => {
    const sArrA = [...arrA].sort((a, b) => a - b);
    const sArrB = [...arrB].sort((a, b) => a - b);
    let sum1 = 0;
    let sum2 = 0;
    for (let jj = 0; jj < sArrA.length; jj++) {
      if (sArrA[jj] < sArrB[jj]) {
        return -1;
      }
      sum2 += sArrA[jj] - sArrB[jj];
    }
    for (let j = 0; j < arrA.length; j++) {
      if (arrA[j] < arrB[j]) {
        sum1 = Number.MAX_SAFE_INTEGER;
        break;
      }
      sum1 += arrA[j] - arrB[j];
    }
    return Math.min(sum1, sum2 + c);
  },
};
