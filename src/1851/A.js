/* eslint-disable max-depth */
module.exports = {
  getCountOfPeople: (m, k, H, hs) => {
    let count = 0;
    for (let j = 0; j < hs.length; j++) {
      let hd = H - hs[j];
      if (hd !== 0) {
        if (hd < 0) {
          hd *= -1;
        }
        if (hd % k === 0) {
          if (hd / k < m) {
            count++;
          }
        }
      }
    }
    return count;
  },
};
