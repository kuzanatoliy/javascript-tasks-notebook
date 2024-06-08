module.exports = {
  getInitNumbers: (array) => {
    const arr = array.sort((a, b) => a - b);
    return [arr[0], arr[1], arr[6] - arr[0] - arr[1]];
  },
};
