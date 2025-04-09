module.exports = {
  getMaxArea: (array) => {
    const arr = array.sort((a, b) => a - b);
    return Math.min(arr[0], arr[1]) * Math.min(arr[2], arr[3]);
  },
};
