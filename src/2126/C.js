module.exports = {
  isItPossibleToArrive: (k, arr) => {
    const d = arr[k - 1];
    arr.sort((a, b) => a - b);
    let j = 0;
    while (j < arr.length && arr[j] !== d) {
      j++;
    }
    j++;
    while (j < arr.length && arr[j] - arr[j - 1] <= d) {
      j++;
    }
    return j < arr.length ? 'NO' : 'YES';
  },
};
