module.exports = {
  getMinJumpAbility: (str) =>
    Math.max(...str.split(/[AEIOUY]/u).map((item) => item.length)) + 1,
};
