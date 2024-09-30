module.exports = {
  getFinalNumber: (array) => {
    const arr = array.sort((a, b) => a - b);
    return arr[Math.floor(array.length / 2)];
  },
};
