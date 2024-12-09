module.exports = {
  getWinner: (s, v1, v2, t1, t2) => {
    const d1 = s * v1 + 2 * t1;
    const d2 = s * v2 + 2 * t2;
    if (d1 < d2) {
      return 'First';
    } else if (d2 < d1) {
      return 'Second';
    } else {
      return 'Friendship';
    }
  },
};
