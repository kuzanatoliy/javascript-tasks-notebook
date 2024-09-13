module.exports = {
  getLargestMod: (l, r) => {
    const d = r / 2 + 1;
    if (d >= l) {
      return Math.floor((r - 1) / 2);
    }
    return r - l;
  },
};
