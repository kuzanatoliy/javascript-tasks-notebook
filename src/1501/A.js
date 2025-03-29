/* eslint-disable prefer-destructuring */
module.exports = {
  getTime: (lines, times) => {
    lines = [[0, 0], ...lines];

    if (times.length === 1) {
      return times[0] + lines[1][0];
    }

    let r = 0;
    for (let i = 0; i < times.length - 1; i++) {
      const a1 =
        r +
        (lines[i + 1][0] - lines[i][1] + times[i]) +
        Math.ceil((lines[i + 1][1] - lines[i + 1][0]) / 2);
      const a2 = lines[i + 1][1];
      r = Math.max(a1, a2);
    }
    r =
      r +
      times[times.length - 1] +
      lines[times.length][0] -
      lines[times.length - 1][1];
    return r;
  },
};
