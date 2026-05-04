module.exports = {
  getWinner: (arr) => {
    const max = Math.max(...arr);
    return arr.reduce((res, item) => res + (item === max), 0);
  },
};
