module.exports = {
  isLoveTriangle: (arr) => {
    for (let j = 0; j < arr.length; j++) {
      if (arr[arr[arr[j] - 1] - 1] - 1 === j) {
        return 'YES';
      }
    }
    return 'NO';
  },
};
