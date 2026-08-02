const { getBoxesCount } = require('../get-boxes-count/get-boxes-count');

module.exports = {
  getBoxesVolume: (arr, count) => {
    let l = 0;
    let r = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > l) {
        l = arr[j];
      }
      r += arr[j];
    }
    let lc = getBoxesCount(arr, l);
    while (r - l > 1 && lc !== count) {
      const d = Math.floor((l + r) / 2);
      const dc = getBoxesCount(arr, d);
      if (dc === -1 || dc > count) {
        l = d;
        lc = dc;
      } else {
        r = d;
      }
    }
    return lc === count ? l : r;
  },
};
