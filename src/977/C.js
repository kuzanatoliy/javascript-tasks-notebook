module.exports = {
  findX: (array, limit) => {
    const arr = array.sort((a, b) => a - b);
    if (limit === 0) {
      return arr[0] > 1 ? arr[0] - 1 : -1;
    }
    if (arr[limit - 1] && arr[limit - 1] !== arr[limit]) {
      return arr[limit - 1];
    }
    return -1;
  },
};
