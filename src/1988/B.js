module.exports = {
  isItPossibleToTransform: (str) => {
    if (str[0] === '1' && str[str.length - 1] === '1') {
      return 'YES';
    }
    let c2 = 0;
    for (let j = 1; j < str.length; j++) {
      if (str[j] === '1' && str[j - 1] === '1' && str[j + 1] === '1') {
        return 'YES';
      }
      c2 += str[j] === '1' && str[j - 1] === '1';
    }
    if (c2 > 1) {
      return 'YES';
    }
    if (c2 > 0 && (str[0] === '1' || str[str.length - 1] === '1')) {
      return 'YES';
    }
    return 'NO';
  },
};
