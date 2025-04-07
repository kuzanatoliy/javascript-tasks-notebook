module.exports = {
  getCountOfPacks: (k, num, s, p) => Math.ceil((Math.ceil(num / s) * k) / p),
};
