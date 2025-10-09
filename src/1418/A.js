module.exports = {
  getCountOfOperations: (x, y, k) => {
    const d = k * y + k;
    return (d - 1n) / (x - 1n) + ((d - 1n) % (x - 1n) ? 1n : 0n) + k;
  },
};
