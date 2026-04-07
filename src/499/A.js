/* eslint-disable prefer-destructuring */
module.exports = {
  getCountOfMinutes: (x, positions) => {
    let curr = 0;
    let res = 0;
    for (let j = 0; j < positions.length; j++) {
      res +=
        ((positions[j][0] - curr - 1) % x) +
        positions[j][1] -
        positions[j][0] +
        1;
      curr = positions[j][1];
    }
    return res;
  },
};
