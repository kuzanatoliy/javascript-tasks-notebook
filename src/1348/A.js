module.exports = {
  getMinDifference: (count) => {
    let fSum = 0;
    let lSum = 0;
    let d = 2;
    const c = count / 2;
    for (let j = 1; j < c; j++) {
      fSum += d;
      d *= 2;
    }
    for (let j = 0; j < c; j++) {
      lSum += d;
      d *= 2;
    }
    fSum += d;
    return fSum - lSum;
  },
};
