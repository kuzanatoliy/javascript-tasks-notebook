module.exports = {
  isPermutation: (array) => {
    let f = 0;
    let l = 1;
    for (let j = 1; j < array.length; j++) {
      if (array[j] > array[l]) {
        l = j;
        continue;
      }
      if (array[f] > array[l]) {
        f = l;
        l = j + 1;
        continue;
      }
      if (array[l] > array[j]) {
        return ['YES', [f + 1, l + 1, j + 1]];
      }
    }
    return ['NO'];
  },
};
