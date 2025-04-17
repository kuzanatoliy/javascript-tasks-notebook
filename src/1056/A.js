module.exports = {
  getTramLines: (steps) => {
    const fls = new Array(100).fill(0);
    for (let j = 0; j < steps.length; j++) {
      for (let jj = 1; jj < steps[j].length; jj++) {
        fls[steps[j][jj] - 1]++;
      }
    }
    const res = [];
    for (let r = 0; r < fls.length; r++) {
      if (fls[r] === steps.length) {
        res.push(r + 1);
      }
    }
    return res;
  },
};
