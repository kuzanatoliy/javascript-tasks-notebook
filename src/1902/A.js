module.exports = {
  isZeroMoreThanOne: (str) => {
    for (let j = 0; j < str.length; j++) {
      if (str[j] === '0') {
        return 'YES';
      }
    }
    return 'NO';
  },
};
