module.exports = {
  getCountOfChanges: (num, k, p) => {
    const d = Math.ceil(Math.abs(k) / p);
    return d > num ? -1 : d;
  },
};
