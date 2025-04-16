module.exports = {
  getCountOfOptions: (x1, x2, array) => {
    const arr = array.sort((a, b) => a - b);
    return arr[x2] - arr[x2 - 1];
  },
};
