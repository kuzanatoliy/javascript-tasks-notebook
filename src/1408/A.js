module.exports = {
  getColors: (a, b, c) => {
    const res = [a[0]];
    for (let j = 1; j < a.length; j++) {
      const can = res[j - 1] === a[j] || a[j] === res[0] ? b[j] : a[j];
      if (can === res[0] || can === res[j - 1]) {
        res.push(c[j]);
      } else {
        res.push(can);
      }
    }
    return res;
  },
};
