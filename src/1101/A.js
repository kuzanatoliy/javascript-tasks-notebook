module.exports = {
  getMinNumber: (l, r, d) =>
    (Math.floor((l - 1) / d) && d) || Math.ceil((r + 1) / d) * d,
};
