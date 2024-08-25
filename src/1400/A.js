module.exports = {
  getSubstr: (str, k) => {
    let x = '';
    for (let i = 0; i < k; i++) {
      x += str[2 * i];
    }
    return x;
  },
};
