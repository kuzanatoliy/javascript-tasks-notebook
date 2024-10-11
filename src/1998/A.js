module.exports = {
  getPositions: (x, y, k) => {
    const half = k / 2;
    const num = Math.floor(half);
    const res = half === num ? [] : [[x, y]];
    for (let j = 1; j <= num; j++) {
      res.push([x - j, y - j]);
      res.push([x + j, y + j]);
    }
    return res;
  },
};
