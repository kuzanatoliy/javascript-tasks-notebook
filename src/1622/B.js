module.exports = {
  transformRate: (rate, map) => {
    let count = map.split('').reduce((sum, val) => sum + (val === '0'), 0) + 1;
    let s = 1;
    const arr = rate
      .map((item, ind) => [item, ind, map[ind]])
      .sort((a, b) => a[0] - b[0]);
    const res = new Array(rate.length).fill(0);
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][2] === '1') {
        res[arr[j][1]] = count;
        count++;
      } else {
        res[arr[j][1]] = s;
        s++;
      }
    }
    return res;
  },
};
