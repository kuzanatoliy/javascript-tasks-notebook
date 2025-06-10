module.exports = {
  isItPossibleToTransform: (str, count) => {
    if (count === 0) {
      for (let i = 0; i < str.length / 2; i++) {
        if (str[str.length - i - 1] === str[i]) {
          continue;
        }
        if (str[str.length - i - 1] > str[i]) {
          return 'YES';
        }
        return 'NO';
      }
      return 'NO';
    }
    for (let i = 1; i < str.length; i++) {
      if (str[0] !== str[i]) {
        return 'YES';
      }
    }
    return 'NO';
  },
};
