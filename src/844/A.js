module.exports = {
  getCountOfLettersOrImpossible: (str, k) => {
    if (str.length < k) {
      return 'impossible';
    }
    return Math.max(0, k - new Set(str.split('')).size);
  },
};
