module.exports = {
  isItPossibleToMeetConditions: (p, q) => {
    const h = p[1] - p[0];
    const v = p[3] - p[2];
    return (h > 0
      ? q[0] > q[4] - h
      : h < 0
        ? q[0] < q[2] - h
        : q[2] === q[4] && p[0]) ||
      (v > 0
        ? q[1] > q[5] - v
        : v < 0
          ? q[1] < q[3] - v
          : q[3] === q[5] && p[2])
      ? 'NO'
      : 'YES';
  },
};
