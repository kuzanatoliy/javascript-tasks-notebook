module.exports = {
  isItPossibleToTransform: (arr) => {
    let n1 = 0;
    let sum1 = 0;
    for (let j = 0; j < arr.length; j += 2) {
      n1++;
      sum1 += arr[j];
    }
    const d1 = sum1 / n1;
    if (Math.floor(d1) !== Math.ceil(d1)) {
      return 'NO';
    }
    let n2 = 0;
    let sum2 = 0;
    for (let jj = 1; jj < arr.length; jj += 2) {
      n2++;
      sum2 += arr[jj];
    }
    const d2 = sum2 / n2;
    if (Math.floor(d2) !== Math.ceil(d2)) {
      return 'NO';
    }
    return d1 === d2 ? 'YES' : 'NO';
  },
};
