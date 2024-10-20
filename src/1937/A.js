module.exports = {
  getPosition: (num) => {
    const d = num / 2;
    let res = 1;
    while (res <= d) {
      res *= 2;
    }
    return res;
  },
};
