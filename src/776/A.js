/* eslint-disable prefer-destructuring */
module.exports = {
  getSteps: (curr, next) => {
    const res = [[...curr]];
    for (let j = 0; j < next.length; j++) {
      if (next[j][0] === curr[0]) {
        curr[0] = next[j][1];
      } else {
        curr[1] = next[j][1];
      }
      res.push([...curr]);
    }
    return res;
  },
};
