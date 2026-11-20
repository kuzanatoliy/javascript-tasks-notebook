/* eslint-disable prefer-destructuring */
module.exports = {
  getOperationsCount: (piles) => {
    let count = 0;
    for (let j = 0; j < piles.length; j++) {
      let z = piles[j][0];
      if (z > piles[j][2]) {
        count += z - piles[j][2];
        z = piles[j][2];
      }
      if (piles[j][1] > piles[j][3]) {
        count += piles[j][1] - piles[j][3] + z;
      }
    }
    return count;
  },
};
