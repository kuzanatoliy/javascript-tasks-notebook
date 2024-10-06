module.exports = {
  getArray: (num) => {
    const res = [];
    let j = 1;
    while (j <= num) {
      res.push(j * 2);
      j++;
    }
    return res;
  },
};
