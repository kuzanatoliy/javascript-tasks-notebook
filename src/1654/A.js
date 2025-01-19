module.exports = {
  getMaxTastiness: (array) => {
    const arr = array.sort((a, b) => b - a);
    return arr[0] + arr[1];
  },
};
