module.exports = {
  getCountOfTriangles: (a, b, c, d) => {
    let ans = 0;
    const n = c - a + 1;
    let i = 1;
    for (let sum = a + b; sum <= b + c; sum++, i++) {
      ans +=
        Math.max(0, Math.min(sum - 1, d) - c + 1) *
        Math.min(i, n - i + 1, c - b + 1, b - a + 1);
    }

    return ans;
  },
};
