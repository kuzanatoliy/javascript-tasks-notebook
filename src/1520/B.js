module.exports = {
  getCountOfOrdinaryNumbers: (number) => {
    const val = `${number}`;
    const ch = new Array(val.length).fill(val[0]).join('');
    return (val.length - 1) * 9 + +val[0] - 1 + (val >= ch ? 1 : 0);
  },
};
