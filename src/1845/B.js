module.exports = {
  getMaxCommonWayLength: (pa, pb, pc) => {
    let res = 1;
    const dx1 = pa[0] - pb[0];
    const dx2 = pa[0] - pc[0];
    const dy1 = pa[1] - pb[1];
    const dy2 = pa[1] - pc[1];
    if (dx1 > 0 && dx2 > 0) {
      res += Math.min(dx1, dx2);
    } else if (dx1 < 0 && dx2 < 0) {
      res += Math.min(-dx1, -dx2);
    }
    if (dy1 > 0 && dy2 > 0) {
      res += Math.min(dy1, dy2);
    } else if (dy1 < 0 && dy2 < 0) {
      res += Math.min(-dy1, -dy2);
    }
    return res;
  },
};
