module.exports = {
  isItPossibleToTransform: (arrA, arrB) => {
    arrB.sort((x, y) => x - y);

    let prev = -Infinity;
    let ok = true;

    for (let i = 0; i < arrA.length; i++) {
      let best = Infinity;
      let low = 0;
      let high = arrB.length - 1;

      while (low <= high) {
        const mid = (low + high) >> 1;
        const val = arrB[mid] - arrA[i];
        if (val >= prev) {
          best = val;
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      }

      const keep = arrA[i] >= prev ? arrA[i] : Infinity;
      const choose = best;

      if (keep === Infinity && choose === Infinity) {
        ok = false;
        break;
      }

      prev = Math.min(keep, choose);
    }

    return ok ? 'YES' : 'NO';
  },
};
