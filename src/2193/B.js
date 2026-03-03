module.exports = {
  transformPermutation: (arr) => {
    let j = 0;
    while (j < arr.length && arr[j] === arr.length - j) {
      j++;
    }
    const ind = j;
    const max = arr.length - j;
    j++;
    while (j < arr.length && arr[j] < max) {
      j++;
    }
    if (arr[j]) {
      return [
        ...arr.slice(0, ind),
        ...arr.slice(ind, j + 1).reverse(),
        ...arr.slice(j + 1),
      ];
    }
    return arr;
  },
};
