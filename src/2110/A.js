module.exports = {
  getCountOfOperations: (array) => {
    const arr = array.sort((a, b) => a - b);
    let l = 0;
    while ((arr[l] + arr[arr.length - 1]) % 2) {
      l++;
    }
    let r = 0;
    while ((arr[0] + arr[arr.length - 1 - r]) % 2) {
      r++;
    }
    return Math.min(l, r);
  },
};
