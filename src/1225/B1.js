module.exports = {
  getCountOfSubscriptions: (k, d, arr) => {
    const temp = new Array(k + 1).fill(0);
    let j = 0;
    const set = new Set();
    while (j < d) {
      temp[arr[j]]++;
      set.add(arr[j]);
      j++;
    }
    let min = set.size;
    while (j < arr.length) {
      temp[arr[j - d]]--;
      if (temp[arr[j - d]] === 0) {
        set.delete(arr[j - d]);
      }
      temp[arr[j]]++;
      set.add(arr[j]);
      j++;
      min = Math.min(min, set.size);
    }
    return min;
  },
};
