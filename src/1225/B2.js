module.exports = {
  getCountOfSubscriptions: (k, d, arr) => {
    let j = 0;
    const map = {};
    let min = 0;
    while (j < d) {
      if (!map[arr[j]]) {
        min++;
      }
      map[arr[j]] = (map[arr[j]] || 0) + 1;
      j++;
    }
    let temp = min;
    while (j < arr.length) {
      map[arr[j - d]]--;
      if (!map[arr[j - d]]) {
        temp--;
      }
      if (!map[arr[j]]) {
        temp++;
      }
      map[arr[j]] = (map[arr[j]] || 0) + 1;
      j++;
      min = Math.min(min, temp);
    }
    return min;
  },
};
