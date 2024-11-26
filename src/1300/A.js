module.exports = {
  getCounOfOperations: (arr) => {
    const c0 = arr.filter((item) => item === 0).length;
    const sum = arr.reduce((a, b) => a + b, 0);
    return sum + c0 === 0 ? c0 + 1 : c0;
  },
};
