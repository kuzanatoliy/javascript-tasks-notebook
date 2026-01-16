module.exports = {
  getMinDif: (arr) => {
    arr.sort((a, b) => a - b);
    const d = arr.length / 2;
    return arr[d] - arr[d - 1];
  },
};
