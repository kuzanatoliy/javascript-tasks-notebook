module.exports = {
  getNumber: (arr) => {
    const res = arr.reduce((a, b) => a ^ b);
    if (arr.length % 2 === 1) {
      return res;
    }
    return res === 0 ? 0 : -1;
  },
};
