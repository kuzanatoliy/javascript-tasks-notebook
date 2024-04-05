module.exports = {
  getMaxNumberOfInstruments: (count, array) => {
    const prep = array
      .map((item, index) => [item, index])
      .sort((a, b) => a[0] - b[0]);
    const res = [];
    let lc = 0;
    for (let j = 0; j < prep.length; j++) {
      lc += prep[j][0];
      if (lc > count) {
        break;
      }
      res.push(prep[j][1] + 1);
    }
    return res;
  },
};
