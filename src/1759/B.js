module.exports = {
  isItPossibleToGetPermutation: (sum, array) => {
    const arr = array.sort((a, b) => a - b);
    let step = 0;
    let j = 0;
    while (sum > 0) {
      step++;
      if (arr[j] === step) {
        j++;
        continue;
      }
      sum -= step;
    }
    while (j < arr.length) {
      if (arr[j] - step > 1) {
        return 'NO';
      }
      step = arr[j];
      j++;
    }
    return sum === 0 ? 'YES' : 'NO';
  },
};
