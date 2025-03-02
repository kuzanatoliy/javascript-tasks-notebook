module.exports = {
  getMaxSquare: (array) => {
    const arr = array.sort((a, b) => b - a);
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < j + 1) {
        return j;
      }
    }
    return arr.length;
  },
};
