module.exports = {
  getEquivalentPositions: (files) => {
    const sum = files.reduce((a, b) => a + b, 0);
    const res = new Set([0]);
    for (let j = 0, k = 1; j < files.length; j++) {
      for (let jj = 1; jj <= files[j]; jj++) {
        let d = (jj / files[j]) * 100;
        let dd = (k / sum) * 100;
        d = Math.ceil(d) - d < 0.0001 ? Math.ceil(d) : Math.floor(d);
        dd = Math.ceil(dd) - dd < 0.0001 ? Math.ceil(dd) : Math.floor(dd);
        if (d === dd) {
          res.add(d);
        }
        k++;
      }
    }
    return Array.from(res);
  },
};
