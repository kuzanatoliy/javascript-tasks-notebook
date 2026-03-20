module.exports = {
  getEntranceNumber: (num, a, b) => {
    const d = a + b;
    return (d > 0 ? (a + b) % num : num + ((a + b) % num)) || num;
  },
};
