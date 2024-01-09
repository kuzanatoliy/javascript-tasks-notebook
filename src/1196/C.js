module.exports = {
  getPoint: (robots) => {
    const x1 = Math.max(
      -100000,
      ...robots.filter((item) => item[2] === 0).map((item) => item[0])
    );
    const y1 = Math.min(
      100000,
      ...robots.filter((item) => item[3] === 0).map((item) => item[1])
    );
    const x2 = Math.min(
      100000,
      ...robots.filter((item) => item[4] === 0).map((item) => item[0])
    );
    const y2 = Math.max(
      -100000,
      ...robots.filter((item) => item[5] === 0).map((item) => item[1])
    );
    if (x2 < x1 || y1 < y2) {
      return [0];
    } else {
      return [1, x1, y2];
    }
  },
};
