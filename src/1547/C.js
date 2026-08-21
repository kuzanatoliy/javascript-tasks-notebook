module.exports = {
  restoreArray: (k, arrA, arrB) => {
    let idxA = 0;
    let idxB = 0;
    const result = [];

    while (idxA < arrA.length || idxB < arrB.length) {
      if (arrA[idxA] === 0) {
        result.push(0);
        idxA++;
        k++;
      } else if (arrB[idxB] === 0) {
        result.push(0);
        idxB++;
        k++;
      } else if (arrA[idxA] <= k) {
        result.push(arrA[idxA]);
        idxA++;
      } else if (arrB[idxB] <= k) {
        result.push(arrB[idxB]);
        idxB++;
      } else {
        return [-1];
      }
    }
    return result;
  },
};
