module.exports = {
  getDistances: (r, c) => {
    const rd = Math.floor(r / 2);
    const cd = Math.floor(c / 2);
    const res = [];
    for (let j = 1; j <= rd; j++) {
      for (let jj = 1; jj <= cd; jj++) {
        res.push(r - j + c - jj);
      }
      for (let jj = cd + 1; jj <= c; jj++) {
        res.push(r - j + c - jj + cd);
      }
    }
    for (let j = rd + 1; j <= r; j++) {
      for (let jj = 1; jj <= cd; jj++) {
        res.push(r - j + rd + c - jj);
      }
      for (let jj = cd + 1; jj <= c; jj++) {
        res.push(r - j + rd + c - jj + cd);
      }
    }
    return res.sort((a, b) => a - b);
  },
};
