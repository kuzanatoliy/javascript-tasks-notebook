module.exports = {
  getMinMaxCount: (num) => {
    if (num < 4n || num % 2n === 1n) {
      return [-1n];
    }
    return [num / 6n + (num % 6n ? 1n : 0n), num / 4n];
  },
};
