module.exports = {
  getParity: (arr, k) => {
    if (k % 2 === 0) {
      return arr[arr.length - 1] % 2 === 1 ? 'odd' : 'even';
    } else {
      const res = arr.reduce((a, b) => a + b);
      return res % 2 === 0 ? 'even' : 'odd';
    }
  },
};
