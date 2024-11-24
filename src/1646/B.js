module.exports = {
  isItPossibleToPaint: (arr) => {
    arr.sort((a, b) => a - b);
    const num = Math.ceil(arr.length / 2);
    return arr.slice(num + !(arr.length % 2)).reduce((a, b) => a + b, 0) >
      arr.slice(0, num).reduce((a, b) => a + b, 0)
      ? 'YES'
      : 'NO';
  },
};
