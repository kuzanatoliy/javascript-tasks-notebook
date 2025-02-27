module.exports = {
  isItPossibleToTransform: (str) => {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[j] === 'B') {
        count--;
      } else {
        count++;
      }
      if (count < 0) {
        return 'NO';
      }
    }
    return str[str.length - 1] === 'B' ? 'YES' : 'NO';
  },
};
