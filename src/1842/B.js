module.exports = {
  isItPossibleToConstruct: (x, arrA, arrB, arrC) => {
    let res = 0;
    for (let j = 0; j < arrA.length; j++) {
      const cand = res | arrA[j];
      if ((x | cand) !== x) {
        break;
      } else {
        res = cand;
      }
    }
    for (let jj = 0; jj < arrB.length; jj++) {
      const cand = res | arrB[jj];
      if ((x | cand) !== x) {
        break;
      } else {
        res = cand;
      }
    }
    for (let jjj = 0; jjj < arrC.length; jjj++) {
      const cand = res | arrC[jjj];
      if ((x | cand) !== x) {
        break;
      } else {
        res = cand;
      }
    }
    return res === x ? 'YES' : 'NO';
  },
};
