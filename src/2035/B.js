module.exports = {
  getNumber: (num) => {
    if (num === 1 || num === 3) {
      return '-1';
    }
    if (num === 2) {
      return '66';
    }
    return num % 2
      ? `${new Array(num - 5).fill(3).join('')}36366`
      : `${new Array(num - 2).fill(3).join('')}66`;
  },
};
