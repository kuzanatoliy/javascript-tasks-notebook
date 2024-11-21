module.exports = {
  getMinLength: (l1, r1, l2, r2) => {
    if (r1 >= l2 && r2 >= l1) {
      return Math.max(l1, l2);
    }
    return l1 + l2;
  },
};
