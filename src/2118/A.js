module.exports = {
  getBitstring: (num, k) =>
    [...new Array(k).fill(1), ...new Array(num - k).fill(0)].join(''),
};
