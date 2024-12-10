module.exports = {
  isPermutationsExisted: (num, a, b) => {
    if ((num === a && num === b) || num - a - b > 1) {
      return 'YES';
    }
    return 'NO';
  },
};
