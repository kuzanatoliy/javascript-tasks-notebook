module.exports = {
  getWinner: (x, y, array) => {
    const sum = array.reduce((s, next) => s + next);
    if (sum % 2 === 0) {
      if (x % 2 !== y % 2) {
        return 'Bob';
      }
      return 'Alice';
    }
    if (x % 2 === y % 2) {
      return 'Bob';
    }
    return 'Alice';
  },
};
