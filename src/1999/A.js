module.exports = {
  getSumNumber: (number) => {
    const ans = number.toString().split('');
    return +ans[0] + +ans[1];
  },
};
