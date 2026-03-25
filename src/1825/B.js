module.exports = {
  getMaxValue: (n, m, arr) => {
    arr.sort((a, b) => a - b);
    const max1 = arr[n * m - 1];
    const max2 = arr[n * m - 2];
    const [min1, min2] = arr;
    const d = Math.min(n, m);
    const a = (max1 - min1) * (n * m - d) + (max1 - min2) * (d - 1);
    const b = (max1 - min1) * (n * m - d) + (max2 - min1) * (d - 1);
    return Math.max(a, b);
  },
};
