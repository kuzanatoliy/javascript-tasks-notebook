module.exports = {
  getMaxHappiness: (m, k, arr) => {
    arr.sort((a, b) => Number(b - a));
    const c1 = m / (k + 1n);
    const c2 = c1 * k + (m % (k + 1n));
    return c2 * arr[0] + c1 * arr[1];
  },
};
