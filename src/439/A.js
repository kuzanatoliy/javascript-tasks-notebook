module.exports = {
  isItPossibleToOrganize: (arr, d) => {
    const sum = arr.reduce((a, b) => a + b, 0);
    d -= sum;
    return d >= (arr.length - 1) * 10 ? Math.floor(d / 5) : -1;
  },
};
