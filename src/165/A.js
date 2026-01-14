/* eslint-disable max-depth */
module.exports = {
  getCountOfSupercentralPoints: (a) => {
    let ans = 0;
    for (let i = 0; i < a.length; i++) {
      const el1 = a[i];
      const _ = [];
      for (let j = 0; j < a.length; j++) {
        const el2 = a[j];
        if (el1[0] === el2[0]) {
          if (el1[1] > el2[1]) {
            _[0] = 1;
          } else if (el1[1] < el2[1]) {
            _[1] = 1;
          }
        }
        if (el1[1] === el2[1]) {
          if (el1[0] > el2[0]) {
            _[2] = 1;
          } else if (el1[0] < el2[0]) {
            _[3] = 1;
          }
        }
      }
      if (_[0] === 1 && _[1] === 1 && _[2] === 1 && _[3] === 1) {
        ans++;
      }
    }
    return ans;
  },
};
