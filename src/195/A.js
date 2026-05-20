module.exports = {
  getWaitDelay: (a, b, c) => Math.ceil((Math.max(a - b, 0) * c) / b),
};
