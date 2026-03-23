module.exports = {
  getMatrix: (num) => {
    let j = 0;
    const res = [[], []];
    for (let i = num - 1; i > 0; i -= 2) {
      res[0][j] = i + num;
      res[0][j + 1] = i;
      j += 2;
    }
    j = 1;
    for (let i = 2; i <= num; i += 2) {
      res[1][j] = i + num;
      res[1][j - 1] = num + 2 - i;
      j += 2;
    }
    return res;
  },
};
