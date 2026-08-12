/* eslint-disable prefer-destructuring */
module.exports = {
  getMaxHappiness: (arr) => {
    if (!arr.length) {
      return 0;
    }
    const map = new Map();
    for (let j = 0; j < arr.length; j++) {
      if (map.has(arr[j][0])) {
        map.set(arr[j][0], map.get(arr[j][0]) + arr[j][1]);
        continue;
      }
      map.set(arr[j][0], arr[j][1]);
    }
    const temp = Array.from(map).sort((a, b) => a[0] - b[0]);
    let l = 0;
    let r = 0;
    let hap = 0;
    let curr = temp[0][1];
    while (r < temp.length) {
      if (temp[l][0] < temp[r][0] / 2) {
        curr -= temp[l][1];
        l++;
      } else {
        hap = Math.max(hap, curr);
        r++;
        curr += temp[r] ? temp[r][1] : 0;
      }
    }
    return hap;
  },
};
