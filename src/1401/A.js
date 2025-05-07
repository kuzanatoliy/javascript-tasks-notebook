module.exports = {
  getCountOfOperations: (num, k) => (num < k ? k - num : (num - k) % 2),
};
