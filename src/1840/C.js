module.exports = {
  getCountOfWays: (arr, k, q) => {
    let curr = 0;
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > q) {
        curr = 0;
        continue;
      }
      curr++;
      if (curr >= k) {
        count += curr - k + 1;
      }
    }
    return count;
  },
};
