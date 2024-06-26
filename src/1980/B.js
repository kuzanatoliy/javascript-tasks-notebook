module.exports = {
  isCubeRemoved: (f, k, array) => {
    const val = array[f - 1];
    const arr = array.sort((a, b) => b - a);
    const first = arr.indexOf(val);
    let last = first;
    while (arr[last + 1] === val) {
      last++;
    }
    if (first < k && last >= k) {
      return 'MAYBE';
    }
    if (first < k) {
      return 'YES';
    }
    return 'NO';
  },
};
