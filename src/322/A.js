module.exports = {
  getPairs: (mn, gn) => {
    const pairs = [];
    for (let j = 1; j <= gn; j++) {
      pairs.push([1, j]);
    }
    for (let jj = 2; jj <= mn; jj++) {
      pairs.push([jj, 1]);
    }
    return pairs;
  },
};
