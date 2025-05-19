/* eslint-disable no-unused-vars */
module.exports = {
  getCountOfSteps: (arr) => {
    const len = arr.length;
    const map = new Map();
    arr.forEach((x) => {
      if (map.has(x)) {
        map.set(x, map.get(x) + 1);
      } else {
        map.set(x, 1);
      }
    });
    let anst = 0;
    let val = -1;
    map.forEach((v, k) => {
      if (v > val) {
        val = v;
        anst = k;
      }
    });
    let longest = val;
    let ans = 0;
    while (len > longest) {
      ans += 1 + longest;
      longest += longest;
    }
    ans += len - longest;
    return ans;
  },
};
