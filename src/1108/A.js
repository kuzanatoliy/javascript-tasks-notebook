module.exports = {
  getPoints: (l1, r1, l2, r2) => {
    const a = l1;
    if (l2 !== a) {
      return [a, l2];
    }
    return [a, r2];
  },
};
