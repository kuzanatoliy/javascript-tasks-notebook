module.exports = {
  getMinCountOfInconvince: (arr) => {
    const sum = arr.reduce((a, b) => a + b, 0);
    const d = sum % arr.length;
    return d * (arr.length - d);
  },
};
