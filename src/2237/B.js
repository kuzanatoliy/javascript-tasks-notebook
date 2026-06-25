module.exports = {
  getOperationCount: (arrA, arrB) => {
    let swaps = 0;
    let ok = true;
    for (let i = 0; i < arrA.length; i++) {
      let isSorted = true;
      for (let j = i; j < arrA.length; j++) {
        if (arrA[j] > arrB[j]) {
          isSorted = false;
          break;
        }
      }
      if (isSorted) {
        break;
      }
      let best = null;
      for (let j = i; j < arrA.length; j++) {
        if (arrB[i] >= arrA[j]) {
          best = j;
          break;
        }
      }
      if (best === null) {
        ok = false;
        break;
      }
      swaps += best - i;
      for (let k = best; k > i; k--) {
        const temp = arrA[k];
        arrA[k] = arrA[k - 1];
        arrA[k - 1] = temp;
      }
    }
    return ok ? swaps : -1;
  },
};
