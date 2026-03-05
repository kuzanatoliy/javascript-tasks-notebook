module.exports = {
  getWinner: (arr) =>
    arr[0] === 0 && arr[arr.length - 1] === 0 ? 'Bob' : 'Alice',
};
