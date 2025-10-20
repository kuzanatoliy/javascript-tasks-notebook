module.exports = {
  getMap: (counts, letters) => {
    let j = 0;
    let jj = 0;
    let d = 0;
    const res = [];
    while (jj < letters.length) {
      const dd = letters[jj] - d;
      if (dd > counts[j]) {
        d += counts[j];
        j++;
      } else {
        jj++;
        res.push([j + 1, dd]);
      }
    }
    return res;
  },
};
