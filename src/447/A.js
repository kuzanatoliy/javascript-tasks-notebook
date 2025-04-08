module.exports = {
  getFirstPosition: (arr, k) => {
    const fls = new Array(k).fill(0);
    for (let j = 0; j < arr.length; j++) {
      const d = arr[j] % k;
      if (fls[d]) {
        return j + 1;
      }
      fls[d]++;
    }
    return -1;
  },
};
