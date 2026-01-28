module.exports = {
  isItPossibleToTransform: (str) => {
    for (let j = 1; j < str.length; j++) {
      if (str[j] < str[j - 1]) {
        return ['YES', [j, j + 1]];
      }
    }
    return ['NO'];
  },
};
