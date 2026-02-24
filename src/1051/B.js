module.exports = {
  getPairs: (l, r) => {
    const res = [];
    for (let j = l; j <= r; j += 2n) {
      res.push([j, j + 1n]);
    }
    return res;
  },
};
