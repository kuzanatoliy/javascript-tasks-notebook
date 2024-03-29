module.exports = {
  getCountOfGoodPairs: (arrA, arrB) => {
    let count = 0;
    const arrC = [];
    let j = 0;
    for (; j < arrA.length; j++) {
      arrC[j] = arrA[j] - arrB[j];
    }
    arrC.sort((a, b) => b - a);
    j = 0;
    for (j = 0; j < arrA.length; j++) {
      if (arrC[j] <= 0) {
        break;
      }
    }
    let jj = j - 1;
    let jjj = j;
    for (; jj >= 0; jj--) {
      for (; jjj < arrC.length; jjj++) {
        if (arrC[jj] + arrC[jjj] <= 0) {
          break;
        }
      }
      count += jjj - jj - 1;
    }
    return count;
  },
};
