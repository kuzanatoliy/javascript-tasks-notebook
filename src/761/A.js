module.exports = {
  isExisted: (l, r) =>
    (l === 0 && r === 0) || Math.abs(l - r) > 1 ? 'NO' : 'YES',
};
