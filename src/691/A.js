module.exports = {
  isFastenedJacket: (arr) => {
    if (arr.length === 1) {
      return arr[0] === 1 ? 'YES' : 'NO';
    }
    return arr.reduce((a, b) => a + b, 0) === arr.length - 1 ? 'YES' : 'NO';
  },
};
