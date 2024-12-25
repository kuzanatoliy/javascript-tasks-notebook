module.exports = {
  getWinNumber: (arr) =>
    arr.sort((a, b) => a - b)[Math.ceil(arr.length / 2) - 1],
};
