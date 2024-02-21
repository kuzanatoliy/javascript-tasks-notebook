/* eslint-disable prefer-destructuring */
module.exports = {
  getWinner: (candidates) => {
    let index = -1;
    let max = 0;
    for (let j = 0; j < candidates.length; j++) {
      if (candidates[j][0] > 10) {
        continue;
      }

      if (candidates[j][1] > max) {
        index = j;
        max = candidates[j][1];
      }
    }
    return index + 1;
  },
};
