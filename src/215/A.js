/* eslint-disable max-depth */
module.exports = {
  getCountOfGears: (arrA, arrB) => {
    let max = 0;
    let count = 0;
    for (let j = 0; j < arrA.length; j++) {
      for (let jj = 0; jj < arrB.length; jj++) {
        if (arrB[jj] % arrA[j] === 0) {
          const d = arrB[jj] / arrA[j];
          if (max < d) {
            max = d;
            count = 1;
          } else if (max === d) {
            count++;
          }
        }
      }
    }
    return count;
  },
};
