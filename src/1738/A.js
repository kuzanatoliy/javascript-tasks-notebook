module.exports = {
  getMaxDemage: (arrA, arrB) => {
    const c = [];
    const f = [];
    for (let j = 0; j < arrA.length; j++) {
      if (arrA[j] === 0) {
        c.push(arrB[j]);
      } else {
        f.push(arrB[j]);
      }
    }
    if (c.length === arrB.length || f.length === arrB.length) {
      return arrB.reduce((a, b) => a + b);
    }
    if (c.length === f.length) {
      return arrB.reduce((a, b) => a + b) * 2 - Math.min(...arrB);
    }
    c.sort((a, b) => b - a);
    f.sort((a, b) => b - a);
    let count = 0;
    let jj = 0;
    if (c.length > f.length) {
      while (jj < f.length) {
        count += c[jj] + f[jj];
        jj++;
      }
      count *= 2;
      while (jj < c.length) {
        count += c[jj];
        jj++;
      }
    } else {
      while (jj < c.length) {
        count += c[jj] + f[jj];
        jj++;
      }
      count *= 2;
      while (jj < f.length) {
        count += f[jj];
        jj++;
      }
    }

    return count;
  },
};
