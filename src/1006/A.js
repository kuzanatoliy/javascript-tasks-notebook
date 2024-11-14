module.exports = {
  getTransformedArray: (arr) =>
    arr.map((item) => (item % 2 === 0 ? item - 1 : item)),
};
