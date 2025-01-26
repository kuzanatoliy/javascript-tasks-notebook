module.exports = {
  getCountOfNumbers: (arr, k) => {
    const map = {};
    for (let i = 0; i < arr.length; i++) {
      if (!map[arr[i]]) {
        map[arr[i]] = 1;
      }
      if (map[arr[i]] === k) {
        return k - 1;
      }
      map[arr[i]] += 1;
    }
    return arr.length;
  },
};
