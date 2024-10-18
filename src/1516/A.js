module.exports = {
  getLexicographicallySmallestArray: (array, k) => {
    for (let j = 0; j < array.length - 1 && k > 0; j++) {
      if (array[j] > k) {
        array[j] -= k;
        array[array.length - 1] += k;
        k = 0;
      } else {
        k -= array[j];
        array[array.length - 1] += array[j];
        array[j] = 0;
      }
    }
    return array;
  },
};
