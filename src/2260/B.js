module.exports = {
  getTasksCount: (x, y, k) => {
    let count = 0n;
    const d = k < y ? k : y;
    for (let j = 0n; j < d; j++) {
      count += (y + j) % (x + j);
    }
    const dd = k - y;
    return count + (dd < 0n ? 0n : dd) * (y - x);
  },
};
