module.exports = {
  decriptString: (str) => {
    const m = Math.ceil(str.length / 2) - 1;
    const d = Math.floor(str.length / 2);
    let res = '';
    for (let j = 0; j < d; j++) {
      res += str[m - j] + str[m + j + 1];
    }
    if (str.length % 2 === 1) {
      res += str[0];
    }
    return res;
  },
};
