module.exports = {
  getDivisions: (num, k) => {
    const d1 = num / (1 + k + k * k + k * k * k);
    const d2 = d1 * k;
    const d3 = d2 * k;
    const d4 = d3 * k;
    return [d1, d2, d3, d4];
  },
};
